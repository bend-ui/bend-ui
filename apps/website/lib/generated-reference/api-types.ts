/* The build-time extractor reads defining declarations to avoid checking the entire adapter barrel on every dev rebuild. */
/* eslint-disable @nx/enforce-module-boundaries */
import type { ButtonProps } from '../../../../packages/base-ui/src/components/Button/Button';
import type { SelectProps } from '../../../../packages/base-ui/src/components/Select/Select';

/** Concrete instantiations used only by the build-time reference extractor. */
export type ButtonReference = ButtonProps;
export type SelectReference = SelectProps<string>;
