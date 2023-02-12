import { forwardRef as reactForwardRef } from 'react';

/* -------------------------------------------------------------------------------------------------
 * We copied the code from https://radix-ui.com/primitives/docs/utilities/polymorphic
 * because it causes problems with react-router when importing the types
 * ----------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------
 * Utility types
 * ----------------------------------------------------------------------------------------------- */
export type Merge<P1 = Record<string, any>, P2 = Record<string, any>> = Omit<
  P1,
  keyof P2
> &
  P2;

type NarrowIntrinsic<E> = E extends keyof JSX.IntrinsicElements ? E : never;

type ForwardRefExoticComponent<E, OwnProps> = React.ForwardRefExoticComponent<
  Merge<
    E extends React.ElementType ? React.ComponentPropsWithRef<E> : never,
    OwnProps & { as?: E }
  >
>;

/* -------------------------------------------------------------------------------------------------
 * ForwardRefComponent
 * ----------------------------------------------------------------------------------------------- */

export interface ForwardRefComponent<
  IntrinsicElementString,
  OwnProps = Record<string, any>
  /**
   * Extends original type to ensure built in React types play nice
   * with polymorphic components still e.g. `React.ElementRef` etc.
   */
> extends ForwardRefExoticComponent<IntrinsicElementString, OwnProps> {
  /**
   * When `as` prop is passed, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We explicitly avoid `React.ElementType` and manually narrow the prop types
   * so that events are typed when using JSX.IntrinsicElements.
   */
  <
    As extends
      | keyof JSX.IntrinsicElements
      | React.ComponentType<any> = NarrowIntrinsic<IntrinsicElementString>
  >(
    props: As extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[As], OwnProps & { as: As }>
      : As extends React.ComponentType<infer P>
      ? Merge<P, OwnProps & { as: As }>
      : never
  ): React.ReactElement | null;
}

/**
 * All credits goes to Chakra UI
 * https://github.com/chakra-ui/chakra-ui/blob/461343d529a7c40d310b959f8bb51f9f1cc355a9/packages/system/src/forward-ref.tsx
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function forwardRef<Props, Component>(
  component: React.ForwardRefRenderFunction<
    any,
    Omit<
      Merge<
        Component extends React.ElementType
          ? React.ComponentPropsWithRef<Component>
          : never,
        Props & { as?: Component }
      >,
      'color'
    >
  >
) {
  return reactForwardRef(component) as unknown as ForwardRefComponent<
    Component,
    Props
  >;
}
