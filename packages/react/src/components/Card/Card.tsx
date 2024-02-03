import { cx } from '@particles/styled-system/css';
import { card } from '@particles/styled-system/recipes';
import { createComponent, forwardRef } from '@particles/primitives';
import { type ReactNode } from 'react';
import { styled } from '@particles/styled-system/jsx';
import type { CardVariantProps } from '@particles/styled-system/recipes';

export interface CardSectionProps {
  children?: ReactNode;
  inheritPadding?: CardVariantProps['inheritPadding'];
  withBorder?: CardVariantProps['withBorder'];
}

const Section = forwardRef<'div', CardSectionProps>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    className,
    withBorder,
    inheritPadding,
    ...rest
  } = props;

  const recipe = card({ withBorder, inheritPadding });

  return (
    <Component ref={ref} className={cx(recipe.section, className)} {...rest}>
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
  const recipe = card();

  return (
    <Section
      ref={ref}
      className={cx(recipe.header, className)}
      inheritPadding={inheritPadding}
      withBorder={withBorder}
      {...rest}
    >
      <h2>{children}</h2>
    </Section>
  );
});

Header.displayName = 'Card.Header';

export type CardFooterProps = CardSectionProps;

const Footer = forwardRef<'div', CardFooterProps>((props, ref) => {
  const {
    children,
    className,
    withBorder = true,
    inheritPadding = true,
    ...rest
  } = props;
  const recipe = card();
  return (
    <Section
      ref={ref}
      className={cx(recipe.footer, className)}
      inheritPadding={inheritPadding}
      withBorder={withBorder}
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
  const { children, as: Component = 'div', className, ...rest } = props;
  const recipe = card();

  return (
    <Component ref={ref} className={cx(recipe.root, className)} {...rest}>
      {children}
    </Component>
  );
});

Root.displayName = 'Card';

export const Card = createComponent(styled(Root), {
  Section: styled(Section),
  Header: styled(Header),
  Footer: styled(Footer),
});
