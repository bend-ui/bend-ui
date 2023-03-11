import '@fontsource/inter';
import { createTheme, theme as defaultTheme } from '@particles/theme';
import { DocsContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import {
  ToastProvider,
  ToastsContainer,
} from '../src/components/ToastProvider/ToastProvider';
import { ParticlesProvider } from '../src/theme/ParticlesProvider';
import { themeDark, themeLight } from './themes';
import type { ReactNode } from 'react';
import type { DocsContainerProps } from '@storybook/addon-docs';
import type { DecoratorFn } from '@storybook/react';

export const globalTypes = {
  theme: {
    title: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      items: ['default', 'modern'],
      name: true,
      dynamicTitle: true,
    },
  },
};

const modernTheme = createTheme({
  colors: {
    primary: 'rebeccapurple',
  },
});

const getTheme = (themeName) =>
  ({
    default: { theme: defaultTheme, defaultProps: {} },
    modern: {
      theme: modernTheme,
      defaultProps: {
        Button: {
          isRounded: true,
        },
      },
    },
  }[themeName]);

type ContainerProps = DocsContainerProps & {
  children?: ReactNode;
};

const Container = ({ children, context }: ContainerProps) => {
  const isDark = useDarkMode();

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
                theme: isDark ? themes.dark : themes.light,
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

const AppDecorator: DecoratorFn = (Story, context) => {
  const { theme, defaultProps } = getTheme(context.globals.theme);
  return (
    <ParticlesProvider theme={theme} defaultProps={defaultProps}>
      <ToastProvider>
        <Story />
        <ToastsContainer />
      </ToastProvider>
    </ParticlesProvider>
  );
};

export const decorators = [AppDecorator];

export const argTypes = {
  sx: {
    control: {
      type: null,
    },
  },
  as: {
    control: {
      type: null,
    },
  },
};

export const parameters = {
  controls: { sort: 'requiredFirst', exclude: ['sx', 'as'] },
  darkMode: {
    dark: themeDark,
    light: themeLight,
  },
  docs: {
    container: Container,
  },
};
