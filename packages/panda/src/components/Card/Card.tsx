import { cva, cx } from '@particles/panda-system/css';
import { createComponent, forwardRef } from '@particles/primitives';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ReactNode } from 'react';

const cardSectionStyles = cva({
  base: {
    mx: '-4',
    '&:first-child': {
      mt: '-4',
    },
    '&:last-child': {
      mb: '-4',
    },
  },
  variants: {
    withBorder: {
      true: {
        borderColor: 'primary',
        '&:not(:first-child)': {
          borderTopWidth: 1,
        },
        '&:not(:last-child)': {
          borderBottomWidth: 1,
        },
      },
    },
    inheritPadding: {
      true: {
        p: '4',
      },
    },
  },
});

export type CardSectionVariants = RecipeVariantProps<typeof cardSectionStyles>;

export type CardSectionProps = CardSectionVariants & {
  children?: ReactNode;
};

const Section = forwardRef<'div', CardSectionProps>((props, ref) => {
  const {
    children,
    className,
    as: Component = 'div',
    withBorder,
    inheritPadding,
    ...rest
  } = props;
  return (
    <Component
      ref={ref}
      className={cx(
        cardSectionStyles({ withBorder, inheritPadding }),
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
});

export type CardHeaderProps = CardSectionProps;

const Header = forwardRef<'div', CardHeaderProps>((props, ref) => {
  const {
    children,
    className,
    withBorder = true,
    inheritPadding = true,
    ...rest
  } = props;
  return (
    <Section
      ref={ref}
      withBorder={withBorder}
      inheritPadding={inheritPadding}
      {...rest}
    >
      <h2>{children}</h2>
    </Section>
  );
});

export type CardFooterProps = CardSectionProps;

const Footer = forwardRef<'div', CardFooterProps>((props, ref) => {
  const {
    children,
    className,
    withBorder = true,
    inheritPadding = true,
    ...rest
  } = props;
  return (
    <Section
      ref={ref}
      withBorder={withBorder}
      inheritPadding={inheritPadding}
      {...rest}
    >
      {children}
    </Section>
  );
});

const cardStyles = cva({
  base: {
    color: 'fg.onSurface',
    bg: 'surface',
    p: 4,
    rounded: 'md',
  },
});

interface CardProps {
  children?: ReactNode;
}

const Root = forwardRef<'div', CardProps>((props, ref) => {
  const { children, className, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} className={cx(cardStyles(), className)} {...rest}>
      {children}
    </Component>
  );
});

export const Card = createComponent(Root, { Section, Header, Footer });
