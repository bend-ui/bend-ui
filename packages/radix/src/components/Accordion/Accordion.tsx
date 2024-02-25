import { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { LuChevronDown } from 'react-icons/lu';
import { cx } from '@particles/styled-system/css';
import { accordion } from '@particles/styled-system/recipes';
import { createComponent } from '@particles/primitives';
import { createStyleContext } from '../../utils/style-context';

const { withProvider, withContext } = createStyleContext(accordion);

const Root = withProvider(AccordionPrimitive.Root);

const Item = withContext(AccordionPrimitive.Item, 'item');

const Trigger = withContext(AccordionPrimitive.Trigger, 'trigger');

const IndicatorPrimitive = forwardRef<HTMLDivElement, { className: string }>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div ref={ref} className={cx('flex items-center', className)} {...rest}>
        <LuChevronDown
          className={cx('transform transition-transform', 'rotate-0')}
          size={16}
        />
      </div>
    );
  },
);

IndicatorPrimitive.displayName = 'Accordion.Indicator';

const Indicator = withContext(IndicatorPrimitive, 'indicator');

const Content = withContext(AccordionPrimitive.Content, 'content');

export default createComponent(Root, {
  Root,
  Item,
  Trigger,
  Indicator,
  Content,
});
