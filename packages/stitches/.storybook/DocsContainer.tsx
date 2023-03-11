import { DocsContainer as BaseContainer } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode';
import { themeDark, themeLight } from './themes';
import type { ReactNode } from 'react';
import type { DocsContainerProps } from '@storybook/addon-docs';

type ContainerProps = DocsContainerProps & {
  children?: ReactNode;
};

export const DocsContainer = ({ children, context }: ContainerProps) => {
  const dark = useDarkMode();

  return (
    <BaseContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.['docs'],
                theme: dark ? themeDark : themeLight,
              },
            },
          };
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};
