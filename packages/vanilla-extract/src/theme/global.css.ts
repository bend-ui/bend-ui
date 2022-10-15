import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
});

globalStyle('*, *::before, *::after', { boxSizing: 'border-box' });

globalStyle(':where([hidden])', {
  display: 'none',
});

globalStyle('code', {
  fontFamily:
    'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace',
});
