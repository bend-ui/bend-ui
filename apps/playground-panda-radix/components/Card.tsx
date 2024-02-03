import { cx } from '@particles/styled-system/css';
import { card } from '@particles/styled-system/recipes';
import type { CardVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef } from 'react';

type CardSectionProps = ComponentPropsWithoutRef<'div'> & CardVariantProps;

const Section = (props: CardSectionProps) => {
  const { children, className, ...rest } = props;
  const classes = card({ withBorder: true });

  return (
    <div className={cx(classes.section, className)} {...rest}>
      {children}
    </div>
  );
};

Section.displayName = 'Card.Section';

type CardHeaderProps = CardSectionProps;

const Header = (props: CardHeaderProps) => {
  const { children, withBorder = true, inheritPadding = true, ...rest } = props;

  return (
    <Section inheritPadding={inheritPadding} withBorder={withBorder} {...rest}>
      {children}
    </Section>
  );
};

Header.displayName = 'Card.Header';

type CardProps = ComponentPropsWithoutRef<'div'>;

const Card = (props: CardProps) => {
  const { children, className, ...rest } = props;
  const classes = card();

  return (
    <div className={cx(classes.root, className)} {...rest}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';

export default Object.assign(Card, { Section, Header });
