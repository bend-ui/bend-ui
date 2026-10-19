import { renderToStaticMarkup } from 'react-dom/server';
import { Button, Card } from '@bend-ui/base-ui';
import { button as publishedButton } from '@bend-ui/base-ui/recipes';
import { button, text } from '../styled-system/recipes';
import { RecipeButton } from './recipe-button';

export const contract = {
  buttonVariants: button.variantMap,
  textVariants: text.variantMap,
  publishedVariants: publishedButton.variantMap,
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
