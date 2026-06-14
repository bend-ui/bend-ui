import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { createStyleContext } from '@particles/styled-system/jsx';
import { segmentedControl } from '@particles/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(segmentedControl);

const SegmentedControlRoot = withProvider(RadioGroupPrimitive, 'root');
const SegmentedControlList = withContext('div', 'list');
const SegmentedControlItem = withContext(RadioPrimitive.Root, 'item');

const Component = SegmentedControlRoot;

export const SegmentedControl = Object.assign(Component, {
  Root: SegmentedControlRoot,
  List: SegmentedControlList,
  Item: SegmentedControlItem,
});
