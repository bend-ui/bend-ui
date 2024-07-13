import { styled } from '@particles/styled-system/jsx';
import { formField } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils/create-style-context';

const { withProvider, withContext } = createStyleContext(formField);

const Root = withProvider(styled.div, 'root');

const Label = withContext(styled.label, 'label');

const Description = withContext(styled.div, 'description');

const Error = withContext(styled.div, 'error');

export const FormField = Object.assign(Root, {
  Root,
  Label,
  Description,
  Error,
});
