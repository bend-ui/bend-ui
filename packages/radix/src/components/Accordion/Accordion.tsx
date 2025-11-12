import { forwardRef } from 'react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { ChevronDownIcon } from 'lucide-react';
import { cx } from '@particles/styled-system/css';
import { accordion } from '@particles/styled-system/recipes';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(accordion);

const Root = withProvider(AccordionPrimitive.Root, 'root');

const Item = withPart(AccordionPrimitive.Item, 'item');

const Trigger = withPart(AccordionPrimitive.Trigger, 'trigger');

const IndicatorPrimitive = forwardRef<HTMLDivElement, { className: string }>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div ref={ref} className={cx('flex items-center', className)} {...rest}>
        <ChevronDownIcon
          className={cx('transform transition-transform', 'rotate-0')}
          size={16}
        />
      </div>
    );
  },
);

IndicatorPrimitive.displayName = 'Accordion.Indicator';

const Indicator = withPart(IndicatorPrimitive, 'indicator');

const Content = withPart(AccordionPrimitive.Content, 'content');

export default Object.assign(Root, {
  Root,
  Item,
  Trigger,
  Indicator,
  Content,
});
