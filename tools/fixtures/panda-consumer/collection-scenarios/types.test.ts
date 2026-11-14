import type { ComponentProps } from 'react';
import { Button, Input, Select } from '@bend-ui/base-ui';
import { button, input, select, card } from '../styled-system/recipes';

const validButton: ComponentProps<typeof Button> = {
  variant: 'danger',
  size: 'sm',
};
const validInput: ComponentProps<typeof Input> = {
  variant: 'outline',
  size: 'lg',
};
button({ variant: 'inverse', size: 'lg' });
input({ variant: 'solid', size: 'sm' });
select({ size: 'md' });
card({ withBorder: true, inheritPadding: false });
// @ts-expect-error The collection does not widen published variant names.
button({ variant: 'atelier' });
// @ts-expect-error The collection does not widen generated select sizes.
select({ size: 'huge' });
void [validButton, validInput, Select];

// Compare resolved consumer-generated declarations with the packed runtime's
// public contract rather than assuming codegen emits separate local files.
import type {
  ButtonVariant,
  ButtonSlot,
  InputVariant,
  InputSlot,
  SelectVariant,
  SelectSlot,
  SelectDropdownVariant,
  SelectDropdownSlot,
  CardVariant,
  CardSlot,
} from '../styled-system/recipes';
import type {
  ButtonVariant as PublishedButtonVariant,
  ButtonSlot as PublishedButtonSlot,
  InputVariant as PublishedInputVariant,
  InputSlot as PublishedInputSlot,
  SelectVariant as PublishedSelectVariant,
  SelectSlot as PublishedSelectSlot,
  SelectDropdownVariant as PublishedDropdownVariant,
  SelectDropdownSlot as PublishedDropdownSlot,
  CardVariant as PublishedCardVariant,
  CardSlot as PublishedCardSlot,
} from '@bend-ui/base-ui/recipes';
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
type Compatibility = [
  Assert<Equal<ButtonVariant, PublishedButtonVariant>>,
  Assert<Equal<ButtonSlot, PublishedButtonSlot>>,
  Assert<Equal<InputVariant, PublishedInputVariant>>,
  Assert<Equal<InputSlot, PublishedInputSlot>>,
  Assert<Equal<SelectVariant, PublishedSelectVariant>>,
  Assert<Equal<SelectSlot, PublishedSelectSlot>>,
  Assert<Equal<SelectDropdownVariant, PublishedDropdownVariant>>,
  Assert<Equal<SelectDropdownSlot, PublishedDropdownSlot>>,
  Assert<Equal<CardVariant, PublishedCardVariant>>,
  Assert<Equal<CardSlot, PublishedCardSlot>>,
];
const compatibility: Compatibility = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];
void compatibility;
