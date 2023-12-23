import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './ComboBox.stories';

const { Base } = composeStories(stories);

describe('ComboBox', () => {
  it('should reuses args from composed story', () => {
    render(<Base />);

    const element = screen.getByText('ComboBox');

    expect(element).not.toBeNull();
  });
});
