import { renderToStaticMarkup } from 'react-dom/server';
import { Button, Card, IconButton, Select } from '@bend-ui/base-ui';
import {
  button as publishedButton,
  selectDropdown as publishedSelectDropdown,
} from '@bend-ui/base-ui/recipes';
import { button, text, selectDropdown } from '../styled-system/recipes';
import { RecipeButton } from './recipe-button';

export const contract = {
  select: renderToStaticMarkup(
    <Select
      aria-label="Consumer font"
      size="lg"
      items={[{ label: 'Serif', value: 'serif' }]}
      defaultValue="serif"
    />,
  ),
  selectDropdown: selectDropdown(),
  publishedSelectDropdown: publishedSelectDropdown(),
  buttonVariants: button.variantMap,
  textVariants: text.variantMap,
  publishedVariants: publishedButton.variantMap,
  publishedSlots: publishedButton({ variant: 'primary', size: 'lg' }),
  consumerSlots: button({ variant: 'primary', size: 'lg' }),
  publishedIcon: renderToStaticMarkup(
    <IconButton
      variant="primary"
      size="lg"
      icon={<span>+</span>}
      isDisabled
      isLoading
    >
      Add item
    </IconButton>,
  ),
  compound: button({ variant: 'editorial', size: 'jumbo' }),
  plain: button({ variant: 'editorial', size: 'lg' }),
  knownCompound: button({ variant: 'primary', size: 'lg' }),
  published: renderToStaticMarkup(
    <Button variant="primary" size="lg">
      Published primary
    </Button>,
  ),
  local: renderToStaticMarkup(
    <RecipeButton variant="editorial" size="jumbo">
      Local compound
    </RecipeButton>,
  ),
  sibling: renderToStaticMarkup(
    <Card.Root>
      <Card.Body>Unchanged sibling</Card.Body>
    </Card.Root>,
  ),
};
