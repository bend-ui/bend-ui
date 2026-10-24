import type {
  ComponentContract,
  RecipeCompatibilityIssue,
  ReplacementRecipe,
} from './types';

/**
 * Checks a resolved replacement against the current packed component contract.
 * Errors break drop-in styling; warnings require consumer-owned props/runtime.
 * This is a structural check, not CSS, accessibility, or behavioral validation.
 */
export function validateReplacementRecipe(
  component: ComponentContract,
  recipeName: string,
  replacement: ReplacementRecipe,
): RecipeCompatibilityIssue[] {
  const contract = component.recipes[recipeName];
  const issues: RecipeCompatibilityIssue[] = [];
  const report = (
    severity: RecipeCompatibilityIssue['severity'],
    code: RecipeCompatibilityIssue['code'],
    path: string,
    message: string,
  ) =>
    issues.push({
      severity,
      code,
      path: path ? `${recipeName}.${path}` : recipeName,
      message,
    });

  if (!Object.hasOwn(component.recipes, recipeName)) {
    report(
      'error',
      'unknown-recipe',
      '',
      'Recipe is not part of this component contract.',
    );
    return issues;
  }
  if ((contract.kind === 'slotRecipe') !== Array.isArray(replacement.slots)) {
    report(
      'error',
      'kind-mismatch',
      'slots',
      `Expected a ${contract.kind} definition.`,
    );
    return issues;
  }
  if (replacement.className !== contract.className) {
    report(
      'error',
      'namespace-mismatch',
      'className',
      `Preserve the ${contract.className} namespace used by the packed runtime.`,
    );
  }
  const requiredSlots = new Set([
    ...component.anatomy.flatMap((part) =>
      part.kind === 'slot' && part.recipe === recipeName ? [part.slot] : [],
    ),
    ...Object.entries(contract.privateSlots)
      .filter(([, usage]) => usage === 'required')
      .map(([slot]) => slot),
  ]);
  for (const slot of requiredSlots) {
    if (!replacement.slots?.includes(slot)) {
      report(
        'error',
        'missing-slot',
        `slots.${slot}`,
        `Keep the ${slot} slot used by public anatomy or internal rendering.`,
      );
    }
  }
  for (const [axis, definition] of Object.entries(contract.variants)) {
    const values = replacement.variants?.[axis];
    if (!values) {
      report(
        'error',
        'missing-axis',
        `variants.${axis}`,
        'The packed component still accepts this variant axis.',
      );
    } else {
      for (const value of definition.values) {
        if (!Object.hasOwn(values, value)) {
          report(
            'error',
            'missing-value',
            `variants.${axis}.${value}`,
            'The packed component still accepts this variant value.',
          );
        }
      }
      for (const value of Object.keys(values)) {
        if (!definition.values.includes(value)) {
          report(
            'warning',
            'added-value',
            `variants.${axis}.${value}`,
            'Published props do not gain consumer-defined values.',
          );
        }
      }
    }
    if (
      definition.defaultValue !== undefined &&
      replacement.defaultVariants?.[axis] !== definition.defaultValue
    ) {
      report(
        'error',
        'default-mismatch',
        `defaultVariants.${axis}`,
        'Preserve the default selected by the packed runtime.',
      );
    }
  }
  for (const axis of Object.keys(replacement.variants ?? {})) {
    if (!Object.hasOwn(contract.variants, axis)) {
      report(
        'warning',
        'added-axis',
        `variants.${axis}`,
        'A new axis requires a consumer-generated component to select and consume it.',
      );
    }
  }
  if (replacement.compoundVariants?.length) {
    report(
      'warning',
      'compound-runtime',
      'compoundVariants',
      'The packed runtime cannot select consumer-defined compound classes; use the consumer-generated runtime.',
    );
  }
  return issues;
}
