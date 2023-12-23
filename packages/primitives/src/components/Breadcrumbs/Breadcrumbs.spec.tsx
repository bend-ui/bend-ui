import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Breadcrumbs.stories';

const { Base } = composeStories(stories);

describe('Breadcrumbs', () => {
  it('should reuses args from composed story', () => {
    render(<Base />);

    const element = screen.getByRole('navigation');

    expect(element).not.toBeNull();
  });
});
