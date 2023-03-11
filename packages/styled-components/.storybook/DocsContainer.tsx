import { DocsContainer as BaseContainer } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import type { DocsContainerProps } from '@storybook/addon-docs';
import type { ReactNode } from 'react';

type ContainerProps = DocsContainerProps & {
  children?: ReactNode;
};

export const DocsContainer = ({ children, context }: ContainerProps) => {
  const isDark = useDarkMode();

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
                theme: isDark ? themes.dark : themes.light,
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
