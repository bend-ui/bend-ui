import { Button, Card, Heading, IconButton } from '@bend-ui/base-ui';
import { text } from '../../styled-system/recipes';
import { RecipeButton } from '../recipe-button';

export default function App() {
  return (
    <main style={{ maxWidth: 760, margin: '32px auto', padding: 24 }}>
      <Heading>Consumer recipe customization</Heading>
      <Card.Root>
        <Card.Body>
          <p className={text({ variant: 'billboard' })}>Local Text variant</p>
          <Button data-testid="published-button" variant="primary" size="lg">
            Published primary
          </Button>
          <IconButton
            data-testid="published-icon"
            variant="primary"
            size="lg"
            icon={<span aria-hidden="true">+</span>}
          >
            Add item
          </IconButton>
          <RecipeButton variant="primary" size="lg">
            Local primary compound
          </RecipeButton>
          <RecipeButton variant="editorial" size="jumbo">
            Local compound
          </RecipeButton>
          <RecipeButton variant="editorial" size="lg">
            Local plain
          </RecipeButton>
        </Card.Body>
      </Card.Root>
    </main>
  );
}
