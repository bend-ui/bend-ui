'use client';

import { useState } from 'react';
import { examples, themes, type ExampleId } from './registry';
import styles from './preview.module.css';

export function Preview({ id, source }: { id: ExampleId; source: string }) {
  const [theme, setTheme] = useState('stratus');
  const [mode, setMode] = useState('light');
  const [width, setWidth] = useState('fluid');
  const [revision, setRevision] = useState(0);
  const [status, setStatus] = useState('');
  const src = `/component-preview/${id}?theme=${encodeURIComponent(theme)}&mode=${mode}`;
  async function copy() {
    try {
      await navigator.clipboard.writeText(source);
      setStatus('Source copied.');
    } catch {
      setStatus('Copy failed. Select the source and copy it manually.');
    }
  }
  function reset() {
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
      <div
        className={styles.frameWrap}
        style={{ maxWidth: width === 'fluid' ? '100%' : `${width}px` }}
      >
        <iframe
          key={revision}
          title={`${examples[id].title} live example`}
          className={styles.frame}
          src={src}
        />
      </div>
      <div className={styles.sourceHeading}>
        <strong>Source</strong>
        <button type="button" onClick={copy}>
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
