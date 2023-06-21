import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Image.stories';

const { Base } = composeStories(stories);

describe('Image', () => {
  it('should reuses args from composed story', () => {
    render(<Base />);

    const element = screen.getByText('Image');

    expect(element).not.toBeNull();
  });
});
