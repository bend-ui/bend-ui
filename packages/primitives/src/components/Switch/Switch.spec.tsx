import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Switch.stories';

const { Base } = composeStories(stories);

describe('Switch', () => {
  it('should reuses args from composed story', () => {
    render(<Base />);

    const element = screen.getByText('Switch');

    expect(element).not.toBeNull();
  });
});
