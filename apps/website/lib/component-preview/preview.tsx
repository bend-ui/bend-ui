'use client';

import { useEffect, useRef, useState } from 'react';
import { initialState, parseState, schemaFor, usage } from './playground';
import { examples, themes, type ExampleId } from './registry';
import styles from './preview.module.css';

export function Preview({ id, source }: { id: ExampleId; source: string }) {
  const [state, setState] = useState(() => initialState(id));
  const frameRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const send = () =>
      frameRef.current?.contentWindow?.postMessage(
        { type: 'bend-preview-state', id, state },
        window.location.origin,
      );
    function receive(event: MessageEvent) {
      if (
        event.origin !== window.location.origin ||
        event.source !== frameRef.current?.contentWindow ||
        event.data?.id !== id
      )
        return;
      if (event.data?.type === 'bend-preview-ready') send();
      if (event.data?.type === 'bend-preview-selection') {
        const next = parseState(id, event.data.state);
        if (next?.kind === 'select')
          setState((current) =>
            current?.kind === 'select'
              ? { ...current, value: next.value }
              : current,
          );
      }
    }
    window.addEventListener('message', receive);
    return () => window.removeEventListener('message', receive);
  }, [id, state]);
  useEffect(() => {
    frameRef.current?.contentWindow?.postMessage(
      { type: 'bend-preview-state', id, state },
      window.location.origin,
    );
  }, [id, state]);
  const schema = schemaFor(id);
  const [theme, setTheme] = useState('stratus');
  const [mode, setMode] = useState('light');
  const [width, setWidth] = useState('fluid');
  const [revision, setRevision] = useState(0);
  const [status, setStatus] = useState('');
  const src = `/component-preview/${id}?theme=${encodeURIComponent(theme)}&mode=${mode}`;
  async function copy(text: string, name: string) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(`${name} copied.`);
    } catch {
      setStatus('Copy failed. Select the source and copy it manually.');
    }
  }
  function reset() {
    setState(initialState(id));
    setTheme('stratus');
    setMode('light');
    setWidth('fluid');
    setRevision((value) => value + 1);
    setStatus('Preview reset.');
  }
  return (
    <section
      className={styles.preview}
      aria-label={`${examples[id].title} component preview`}
    >
      <div className={styles.controls}>
        <label>
          Theme{' '}
          <select
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
              setStatus('');
            }}
          >
            {themes.map((value) => (
              <option key={value} value={value}>
                {value[0].toUpperCase() + value.slice(1)}
              </option>
            ))}
          </select>
        </label>
        <label>
          Color mode{' '}
          <select
            value={mode}
            onChange={(e) => {
              setMode(e.target.value);
              setStatus('');
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label>
          Preview width{' '}
          <select
            value={width}
            onChange={(e) => {
              setWidth(e.target.value);
              setStatus('');
            }}
          >
            <option value="fluid">Available width</option>
            <option value="320">320 pixels</option>
            <option value="480">480 pixels</option>
          </select>
        </label>
        <button type="button" onClick={reset}>
          Reset preview
        </button>
      </div>
      {state && schema && (
        <fieldset className={styles.props}>
          <legend>Component props</legend>
          {schema.fields.map((field) => {
            const value = (
              state as unknown as Record<string, string | boolean>
            )[field.key];
            const change = (nextValue: string | boolean) => {
              const next = parseState(id, { ...state, [field.key]: nextValue });
              if (next) {
                setState(next);
                setStatus('');
              }
            };
            return (
              <label key={field.key}>
                {field.label}{' '}
                {field.type === 'boolean' ? (
                  <input
                    type="checkbox"
                    checked={value === true}
                    onChange={(e) => change(e.target.checked)}
                  />
                ) : field.type === 'text' ? (
                  <input
                    value={String(value)}
                    maxLength={field.maxLength}
                    onChange={(e) => change(e.target.value)}
                  />
                ) : (
                  <select
                    value={String(value)}
                    onChange={(e) => change(e.target.value)}
                  >
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </label>
            );
          })}
        </fieldset>
      )}
      <div
        className={styles.frameWrap}
        style={{ maxWidth: width === 'fluid' ? '100%' : `${width}px` }}
      >
        <iframe
          ref={frameRef}
          key={revision}
          title={`${examples[id].title} live example`}
          className={styles.frame}
          src={src}
        />
      </div>
      {state && (
        <>
          <div className={styles.sourceHeading}>
            <strong>Generated usage</strong>
            <button
              type="button"
              onClick={() => copy(usage(state, source), 'Usage')}
            >
              Copy usage
            </button>
          </div>
          <pre className={styles.source}>
            <code>{usage(state, source)}</code>
          </pre>
        </>
      )}
      <div className={styles.sourceHeading}>
        <strong>Full example source</strong>
        <button type="button" onClick={() => copy(source, 'Source')}>
          Copy source
        </button>
      </div>
      <p className={styles.status} role="status">
        {status}
      </p>
      <pre className={styles.source}>
        <code>{source}</code>
      </pre>
    </section>
  );
}
