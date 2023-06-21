import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './ListBox.stories';

const { Base } = composeStories(stories);

describe('ListBox', () => {
  it('should reuses args from composed story', () => {
    render(<Base />);

    const element = screen.getByText('ListBox');

    expect(element).not.toBeNull();
  });
});
