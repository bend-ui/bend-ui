import { css, cx } from '@particles/panda-system/css';
import { card } from '@particles/panda-system/recipes';

import { createComponent, forwardRef } from '@particles/primitives';
import { type ReactNode, useCallback } from 'react';
import type { CardVariantProps } from '@particles/panda-system/recipes';

const useComponent = (props: any) => {
  const { css: cssProp = {}, className } = props;

  const getComponentProps = useCallback(
    (recipe?: string) => ({
      className: cx(recipe, css(cssProp), className),
    }),
    [className, cssProp],
  );

  return { getComponentProps };
};

export interface CardSectionProps {
  children?: ReactNode;
  inheritPadding?: CardVariantProps['inheritPadding'];
  withBorder?: CardVariantProps['withBorder'];
}

const Section = forwardRef<'div', CardSectionProps>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    withBorder,
    inheritPadding,
    ...rest
  } = props;

  const { getComponentProps } = useComponent(rest);
  const recipe = card({ withBorder, inheritPadding });

  return (
    <Component ref={ref} {...getComponentProps(recipe.section)} {...rest}>
      {children}
    </Component>
  );
});

Section.displayName = 'Card.Section';

export type CardHeaderProps = CardSectionProps;

const Header = forwardRef<'div', CardHeaderProps>((props, ref) => {
  const {
    children,
    className,
    withBorder = true,
    inheritPadding = true,
    ...rest
  } = props;
  const { getComponentProps } = useComponent(rest);
  const recipe = card();

  return (
    <Section
      ref={ref}
      {...getComponentProps(recipe.header)}
      withBorder={withBorder}
      inheritPadding={inheritPadding}
      {...rest}
    >
      <h2>{children}</h2>
    </Section>
  );
});

Header.displayName = 'Card.Header';

export type CardFooterProps = CardSectionProps;

const Footer = forwardRef<'div', CardFooterProps>((props, ref) => {
  const { children, withBorder = true, inheritPadding = true, ...rest } = props;
  const { getComponentProps } = useComponent(rest);
  const recipe = card();
  return (
    <Section
      ref={ref}
      {...getComponentProps(recipe.footer)}
      withBorder={withBorder}
      inheritPadding={inheritPadding}
      {...rest}
    >
      {children}
    </Section>
  );
});

Footer.displayName = 'Card.Footer';

interface CardProps {
  children?: ReactNode;
}

const Root = forwardRef<'div', CardProps>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  const { getComponentProps } = useComponent(rest);
  const recipe = card();

  return (
    <Component ref={ref} {...getComponentProps(recipe.root)} {...rest}>
      {children}
    </Component>
  );
});

Root.displayName = 'Card';

export const Card = createComponent(Root, { Section, Header, Footer });
