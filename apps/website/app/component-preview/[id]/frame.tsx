'use client';

import { useLayoutEffect } from 'react';
import {
  themes,
  type ExampleId,
} from '../../../lib/component-preview/registry';
import { exampleComponents } from '../../../lib/component-preview/example-components';
import styles from './frame.module.css';

export function Frame({ id }: { id: ExampleId }) {
  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedTheme = params.get('theme');
    const theme = themes.find((item) => item === requestedTheme) ?? 'stratus';
    const mode = params.get('mode') === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.pandaTheme = theme;
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.documentElement.classList.toggle('light', mode === 'light');
    document.documentElement.style.colorScheme = mode;
  }, []);
  const Example = exampleComponents[id];
  return (
    <main className={styles.canvas}>
      <Example />
    </main>
  );
}
