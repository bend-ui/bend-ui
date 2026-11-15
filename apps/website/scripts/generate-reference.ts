/* Build-time source adapter deliberately reads the defining files for drift detection. */
/* eslint-disable @nx/enforce-module-boundaries */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { componentContracts } from '../../../packages/preset-base/src/contracts/components';
import { button as structuralButton } from '../../../packages/preset-base/src/recipes/button';
import {
  selectRecipe as structuralSelect,
  selectDropdownRecipe as structuralDropdown,
} from '../../../packages/preset-base/src/recipes/select';
import { buttonRecipe } from '../../../packages/preset/src/recipes/button';
import {
  selectRecipe,
  selectDropdownRecipe,
} from '../../../packages/preset/src/recipes/select';
import { namedThemeColors } from '../../../packages/preset/src/tokens/theme-colors';
import {
  personalityThemes,
  themePersonalities,
} from '../../../packages/preset/src/themes/personalities';

const root = path.resolve(__dirname, '../../..');
const app = path.join(root, 'apps/website');
const referenceFile = path.join(app, 'lib/generated-reference/api-types.ts');
const selected = {
  button: [
    'children',
    'disabled',
    'isDisabled',
    'isLoading',
    'icon',
    'iconEnd',
    'onClick',
    'variant',
    'size',
  ],
  select: [
    'value',
    'defaultValue',
    'onValueChange',
    'open',
    'defaultOpen',
    'onOpenChange',
    'disabled',
    'name',
    'required',
    'size',
  ],
} as const;

function extractProps() {
  const config = ts.readConfigFile(
    path.join(app, 'tsconfig.json'),
    ts.sys.readFile,
  );
  if (config.error)
    throw new Error(
      ts.flattenDiagnosticMessageText(config.error.messageText, '\n'),
    );
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, app);
  const program = ts.createProgram([referenceFile], {
    ...parsed.options,
    noEmit: true,
    incremental: false,
  });
  const errors = ts
    .getPreEmitDiagnostics(program)
    .filter((d) => d.category === ts.DiagnosticCategory.Error);
  if (errors.length)
    throw new Error(
      ts.formatDiagnosticsWithColorAndContext(errors, {
        getCanonicalFileName: (f) => f,
        getCurrentDirectory: () => root,
        getNewLine: () => '\n',
      }),
    );
  const checker = program.getTypeChecker();
  const source = program.getSourceFile(referenceFile);
  if (!source) throw new Error('Missing API extraction source');
  return Object.fromEntries(
    (['button', 'select'] as const).map((id) => {
      const alias = source.statements.find(
        (node): node is ts.TypeAliasDeclaration =>
          ts.isTypeAliasDeclaration(node) &&
          node.name.text ===
            `${id === 'button' ? 'Button' : 'Select'}Reference`,
      );
      if (!alias) throw new Error(`Missing ${id} type alias`);
      const type = checker.getTypeFromTypeNode(alias.type);
      return [
        id,
        selected[id].map((name) => {
          const symbol = type.getProperty(name);
          if (!symbol) return { name, missing: true };
          const declaration =
            symbol.valueDeclaration ?? symbol.declarations?.[0] ?? alias;
          return {
            name,
            type: checker.typeToString(
              checker.getTypeOfSymbolAtLocation(symbol, declaration),
              alias,
              ts.TypeFormatFlags.NoTruncation,
            ),
            optional: Boolean(symbol.flags & ts.SymbolFlags.Optional),
            description: ts.displayPartsToString(
              symbol.getDocumentationComment(checker),
            ),
            source: declaration
              .getSourceFile()
              .fileName.replace(root + path.sep, ''),
          };
        }),
      ];
    }),
  );
}

const recipes = {
  button: { base: structuralButton, design: buttonRecipe },
  select: { base: structuralSelect, design: selectRecipe },
  selectDropdown: { base: structuralDropdown, design: selectDropdownRecipe },
};
type RecipeShape = {
  slots?: readonly string[];
  variants?: Record<string, Record<string, unknown>>;
  defaultVariants?: Record<string, unknown>;
};
function recipeReference(
  name: keyof typeof recipes,
  contract:
    | (typeof componentContracts)['button']['recipes']['button']
    | (typeof componentContracts)['select']['recipes']['select']
    | (typeof componentContracts)['select']['recipes']['selectDropdown'],
) {
  const { base, design } = recipes[name] as {
    base: RecipeShape;
    design: RecipeShape;
  };
  const axes = new Set([
    ...Object.keys(base.variants ?? {}),
    ...Object.keys(design.variants ?? {}),
    ...Object.keys(contract.variants),
  ]);
  const variants = [...axes].map((axis) => {
    const values = [
      ...new Set([
        ...Object.keys(base.variants?.[axis] ?? {}),
        ...Object.keys(design.variants?.[axis] ?? {}),
      ]),
    ];
    const documented = contract.variants[
      axis as keyof typeof contract.variants
    ] as
      | {
          values: readonly string[];
          defaultValue?: string | boolean;
          description?: string;
        }
      | undefined;
    return {
      axis,
      values,
      defaultValue:
        design.defaultVariants?.[axis] ?? base.defaultVariants?.[axis] ?? null,
      description: documented?.description ?? '',
      mismatch:
        !documented ||
        values.some((v) => !documented.values.includes(v)) ||
        documented.values.some((v) => !values.includes(v)) ||
        (documented.defaultValue ?? null) !==
          (design.defaultVariants?.[axis] ??
            base.defaultVariants?.[axis] ??
            null),
    };
  });
  const slots = [...new Set([...(base.slots ?? []), ...(design.slots ?? [])])];
  return {
    name,
    variants,
    states: contract.states.map((state) => ({
      ...state,
      missingSlots: state.slots.filter((slot) => !slots.includes(slot)),
    })),
    slots,
  };
}
function buildReference() {
  const props = extractProps();
  const personality = themePersonalities.stratus;
  const palette = namedThemeColors[personality.primary];
  const colors = personalityThemes.stratus.semanticTokens!.colors! as any;
  function resolveAlias(value: string): string {
    const visited = new Set<string>();
    while (value.startsWith('{colors.') && value.endsWith('}')) {
      if (visited.has(value)) throw new Error(`Cyclic token alias: ${value}`);
      visited.add(value);
      const parts = value.slice(8, -1).split('.');
      const first = parts.shift()!;
      let entry: any =
        first in colors
          ? colors[first]
          : (namedThemeColors as any)[first]?.scale;
      for (const part of parts) entry = entry?.[part];
      value = typeof entry === 'string' ? entry : entry?.value;
      if (typeof value !== 'string')
        throw new Error(
          `Unresolved token alias: ${[first, ...parts].join('.')}`,
        );
    }
    return value;
  }
  const aliases = Object.entries(colors.fill.primary)
    .filter(([key]) => key !== 'fill')
    .map(([key, token]) => {
      const value = (token as { value: string }).value;
      return {
        name: key === 'DEFAULT' ? 'fill.primary' : `fill.primary.${key}`,
        value,
        resolved: resolveAlias(value),
      };
    });
  return {
    tokens: {
      theme: 'Stratus',
      paletteName: personality.primary,
      palette: Object.entries(palette.scale).map(([shade, value]) => ({
        shade,
        value,
      })),
      aliases,
    },
    components: (['button', 'select'] as const).map((id) => ({
      id,
      contract: componentContracts[id],
      anatomyIssues: componentContracts[id].anatomy.flatMap((part) =>
        part.kind === 'slot' &&
        ![
          ...(recipes[part.recipe as keyof typeof recipes]?.base.slots ?? []),
          ...(recipes[part.recipe as keyof typeof recipes]?.design.slots ?? []),
        ].includes(part.slot)
          ? [`${part.name}: ${part.recipe}.${part.slot} missing from recipe`]
          : [],
      ),
      recipes: Object.entries(componentContracts[id].recipes).map(
        ([name, contract]) =>
          recipeReference(name as keyof typeof recipes, contract as any),
      ),
      props: props[id],
    })),
  };
}
const output = path.join(app, 'lib/generated-reference/data.json');
const content = `${JSON.stringify(buildReference(), null, 2)}\n`;
if (!fs.existsSync(output) || fs.readFileSync(output, 'utf8') !== content) {
  const temporary = `${output}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, content);
  fs.renameSync(temporary, output);
}
console.log(`Generated ${path.relative(root, output)}`);
