/* eslint-disable @typescript-eslint/no-empty-object-type */
export type Props = Record<string, unknown>;

export interface Recipe<P extends Props = {}> {
  (props?: P): string;
  splitVariantProps: (props: P) => [P, P];
}
