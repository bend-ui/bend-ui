import '../src/styles.css';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer } from '@storybook/addon-docs';
import { themeDark, themeLight } from './themes';

const Container = ({ children, context }) => {
  const dark = useDarkMode();

  return (
    <DocsContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? themeDark : themeLight,
              },
            },
          };
        },
      }}
    >
      {children}
    </DocsContainer>
  );
};

export const parameters = {
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
    stylePreview: true,
    dark: themeDark,
    light: themeLight,
  },
  docs: {
    container: Container,
  },
};
