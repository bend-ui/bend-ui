/* Build-time source adapter deliberately reads the defining files for drift detection. */
/* eslint-disable @nx/enforce-module-boundaries */
import { render, screen, within } from '@testing-library/react';
import { componentContracts } from '../../../packages/preset-base/src/contracts/components';
import { buttonRecipe } from '../../../packages/preset/src/recipes/button';
import { themePersonalities } from '../../../packages/preset/src/themes/personalities';
import { namedThemeColors } from '../../../packages/preset/src/tokens/theme-colors';
import data from '../lib/generated-reference/data.json';
import {
  GeneratedComponent,
  GeneratedTokens,
} from '../lib/generated-reference/reference';

describe('generated reference', () => {
  it('reflects source contracts, recipes, palette, and resolved public types', () => {
    const button = data.components.find((c) => c.id === 'button')!;
    const select = data.components.find((c) => c.id === 'select')!;
    expect(button.contract.anatomy).toEqual(componentContracts.button.anatomy);
    expect(select.contract.anatomy).toEqual(componentContracts.select.anatomy);
    expect(
      button.recipes[0].variants.find((v) => v.axis === 'variant')?.values,
    ).toEqual(Object.keys(buttonRecipe.variants?.variant ?? {}));
    expect(data.tokens.palette.find((p) => p.shade === '500')?.value).toBe(
      namedThemeColors[themePersonalities.stratus.primary].scale['500'],
    );
    expect(
      data.tokens.aliases.find((a) => a.name === 'fill.primary')?.resolved,
    ).toBe(
      data.tokens.palette.find(
        (p) => p.shade === themePersonalities.stratus.primaryStates.default,
      )?.value,
    );
    for (const component of data.components) {
      expect(
        component.props.every((p) => 'type' in p && p.type !== 'any'),
      ).toBe(true);
      expect(
        component.recipes.flatMap((r) => r.variants).every((v) => !v.mismatch),
      ).toBe(true);
    }
    expect(select.props.find((p) => p.name === 'onValueChange')).toMatchObject({
      type: expect.stringContaining('string | null'),
    });
  });
  it('renders navigable anatomy, recipe states, aliases and props', () => {
    render(
      <>
        <GeneratedTokens />
        <GeneratedComponent name="select" />
      </>,
    );
    expect(
      within(
        screen.getByRole('region', { name: 'Stratus primary aliases' }),
      ).getByText('fill.primary'),
    ).toBeTruthy();
    expect(
      within(screen.getByRole('region', { name: 'Select anatomy' })).getByText(
        'trigger',
      ),
    ).toBeTruthy();
    expect(
      within(
        screen.getByRole('region', { name: 'selectDropdown states' }),
      ).getByText('open'),
    ).toBeTruthy();
    expect(
      within(
        screen.getByRole('region', { name: 'Select selected props' }),
      ).getByText('onValueChange'),
    ).toBeTruthy();
  });
});
