/** Serializable prototype metadata; contains no primitive-library or React types. */
export interface ComponentContract {
  schemaVersion: 1;
  status: 'prototype';
  scope: 'base-ui-v0';
  name: string;
  description: string;
  anatomy: readonly AnatomyPart[];
  recipes: Readonly<Record<string, RecipeContract>>;
}

export type AnatomyPart = {
  name: string;
  description: string;
} & (
  | { kind: 'slot'; recipe: string; slot: string }
  | { kind: 'recipe'; recipe: string }
  | { kind: 'behavior' | 'unstyled' }
);

export interface RecipeContract {
  kind: 'recipe' | 'slotRecipe';
  className: string;
  /** Private does not mean removable: required slots are rendered internally. */
  privateSlots: Readonly<Record<string, 'required' | 'optional'>>;
  variants: Readonly<
    Record<
      string,
      {
        description: string;
        values: readonly string[];
        defaultValue?: string | boolean;
      }
    >
  >;
  defaultTreatment: string;
  states: readonly {
    name: string;
    condition?: `_${string}`;
    /** Canonical selector, matched by the design preset's union condition. */
    selector: string;
    slots: readonly string[];
  }[];
}

/** The subset of a resolved Panda definition checked for drop-in compatibility. */
export interface ReplacementRecipe {
  className?: string;
  slots?: readonly string[];
  variants?: Record<string, Record<string, unknown>>;
  defaultVariants?: Record<string, unknown>;
  compoundVariants?: readonly unknown[];
}

export interface RecipeCompatibilityIssue {
  severity: 'error' | 'warning';
  code:
    | 'unknown-recipe'
    | 'kind-mismatch'
    | 'namespace-mismatch'
    | 'missing-slot'
    | 'missing-axis'
    | 'missing-value'
    | 'default-mismatch'
    | 'added-axis'
    | 'added-value'
    | 'compound-runtime';
  path: string;
  message: string;
}
