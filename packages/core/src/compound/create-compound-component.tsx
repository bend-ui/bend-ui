'use client';

import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import type { Assign, JsxStyleProps } from '@bend-ui/styled-system/types';
import type { ComponentProps, ComponentType, ElementType } from 'react';

type AnySlotRecipe = {
  __type?: Record<string, unknown>;
  __slot?: string;
};

type RecipeVariantProps<R> = R extends { __type: infer Variants }
  ? NonNullable<Variants>
  : object;

export interface CompoundSlotDefinition<T extends ElementType = ElementType> {
  component: T;
  slot: string;
  provider?: boolean;
  defaultProps?: Partial<ComponentProps<T>>;
}

export type CompoundSlotProps<
  Definition extends CompoundSlotDefinition,
  Variants,
> = Assign<
  ComponentProps<Definition['component']>,
  JsxStyleProps & (Definition extends { provider: true } ? Variants : object)
>;

export type CompoundComponent<
  Slots extends Record<string, CompoundSlotDefinition>,
  Variants,
> = {
  [SlotName in keyof Slots]: ComponentType<
    CompoundSlotProps<Slots[SlotName], Variants>
  >;
};

export interface CreateCompoundComponentOptions<
  Recipe extends AnySlotRecipe,
  Slots extends Record<string, CompoundSlotDefinition>,
> {
  name: string;
  recipe: Recipe;
  slots: Slots;
}

type StyleContextFactory = (
  component: ElementType,
  slot: string,
  options?: { defaultProps?: Record<string, unknown> },
) => ComponentType<Record<string, unknown>>;

export const createCompoundComponent = <
  Recipe extends AnySlotRecipe,
  const Slots extends Record<string, CompoundSlotDefinition>,
>(
  options: CreateCompoundComponentOptions<Recipe, Slots>,
): CompoundComponent<Slots, RecipeVariantProps<Recipe>> => {
  const { name, recipe, slots } = options;
  // Keep generated intrinsic-element unions behind the existing typed slot seam.
  const createContext = createSlotRecipeContext as unknown as (
    recipe: Recipe,
  ) => { withProvider: StyleContextFactory; withContext: StyleContextFactory };
  const { withProvider, withContext } = createContext(recipe);

  return Object.fromEntries(
    Object.entries(slots).map(([slotName, definition]) => {
      const factory = definition.provider ? withProvider : withContext;
      const Component = (factory as unknown as StyleContextFactory)(
        definition.component,
        definition.slot,
        definition.defaultProps
          ? {
              defaultProps: definition.defaultProps as Record<string, unknown>,
            }
          : undefined,
      );

      Object.assign(Component, { displayName: `${name}.${slotName}` });
      return [slotName, Component];
    }),
  ) as unknown as CompoundComponent<Slots, RecipeVariantProps<Recipe>>;
};
