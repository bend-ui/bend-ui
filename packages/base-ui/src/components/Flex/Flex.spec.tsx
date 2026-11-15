import { render, screen } from '@testing-library/react';
import { styled as styledFactory } from '@bend-ui/styled-system/jsx';
import { Flex, styled } from '../../index';

describe('Flex', () => {
  it('renders a div with the flex pattern classes from its props', () => {
    render(
      <Flex data-testid="flex" direction="column" align="center" wrap="wrap">
        <span>Child</span>
      </Flex>,
    );

    const element = screen.getByTestId('flex');
    expect(element.tagName).toBe('DIV');
    expect(element.textContent).toBe('Child');
    expect(element.className).toContain('d_flex');
    expect(element.className).toContain('flex-d_column');
    expect(element.className).toContain('ai_center');
    expect(element.className).toContain('flex-wrap_wrap');
  });

  it('merges a consumer className and forwards other props', () => {
    render(
      <Flex
        className="consumer-class"
        data-testid="flex"
        aria-label="Toolbar row"
        justify="space-between"
      />,
    );

    const element = screen.getByTestId('flex');
    expect(element.className).toContain('consumer-class');
    expect(element.className).toContain('jc_space-between');
    expect(element.getAttribute('aria-label')).toBe('Toolbar row');
    expect(element.getAttribute('justify')).toBeNull();
  });
});

describe('styled', () => {
  it('re-exports the Panda styled factory from the package root', () => {
    expect(styled).toBe(styledFactory);

    render(<styled.section data-testid="section" />);
    expect(screen.getByTestId('section').tagName).toBe('SECTION');
  });
});
