import { preset } from '@particles/preset';
import { TokenDictionary } from '@pandacss/token-dictionary';

const coreDictionnary = new TokenDictionary({
  tokens: preset.theme?.extend?.tokens,
  semanticTokens: preset.theme?.extend?.semanticTokens,
}).init();

const semanticDictionary = new TokenDictionary({
  semanticTokens: preset.theme?.extend?.semanticTokens,
}).init();

const omit = new Set(['black', 'white', 'transparent', 'current']);

export const defaultColors = Object.keys(
  preset.theme?.extend?.semanticTokens?.colors || {},
)
  .filter((key) => !omit.has(key))
  .map((key) => {
    const values = coreDictionnary.filter(
      ({ type, path }) => type === 'color' && path[1] === key,
    );
    return { key, values };
  });

export const defaultFonts = coreDictionnary.filter({
  extensions: { category: 'fonts' },
});

export const semanticFonts = semanticDictionary.filter({
  extensions: { category: 'fonts' },
});
