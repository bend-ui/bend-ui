import type { CSSFunctionArgs, SpaceProps } from 'system-props';

export interface DefaultComponentProps extends SpaceProps<'prefix'> {
  sx?: CSSFunctionArgs<'prefix'>;
}
