import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Avatar.stories';

const { Base } = composeStories(stories);

describe('Avatar', () => {
  it('should reuses args from composed story', () => {
    render(<Base />);

    const element = screen.getByText('Avatar');

    expect(element).not.toBeNull();
  });
});
