'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import {
  themes,
  type ExampleId,
} from '../../../lib/component-preview/registry';
import {
  initialState,
  parseState,
} from '../../../lib/component-preview/playground';
import { exampleComponents } from '../../../lib/component-preview/example-components';
import styles from './frame.module.css';

export function Frame({ id }: { id: ExampleId }) {
  const {
    button: ButtonExample,
    select: SelectExample,
    avatar: AvatarExample,
  } = exampleComponents;
  const [state, setState] = useState(() => initialState(id));
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
  useEffect(() => {
    function receive(event: MessageEvent) {
      if (
        event.origin !== window.location.origin ||
        event.source !== window.parent ||
        event.data?.type !== 'bend-preview-state' ||
        event.data?.id !== id
      )
        return;
      const next = parseState(id, event.data.state);
      if (next) setState(next);
    }
    window.addEventListener('message', receive);
    window.parent.postMessage(
      { type: 'bend-preview-ready', id },
      window.location.origin,
    );
    return () => window.removeEventListener('message', receive);
  }, [id]);
  return (
    <main className={styles.canvas}>
      {state?.kind === 'button' ? (
        <ButtonExample state={state} />
      ) : state?.kind === 'select' ? (
        <SelectExample
          state={state}
          onValueChange={(value) => {
            const next = { ...state, value };
            setState(next);
            window.parent.postMessage(
              { type: 'bend-preview-selection', id, state: next },
              window.location.origin,
            );
          }}
        />
      ) : (
        <AvatarExample />
      )}
    </main>
  );
}
