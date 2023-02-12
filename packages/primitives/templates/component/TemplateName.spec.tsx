import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './TemplateName.stories';

const { Base } = composeStories(stories);

describe('TemplateName', () => {
  it('should reuses args from composed story', () => {
    render(<Base />);

    const element = screen.getByText('TemplateName');

    expect(element).not.toBeNull();
  });
});
