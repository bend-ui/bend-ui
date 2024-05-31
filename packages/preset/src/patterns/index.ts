import { definePattern } from '@pandacss/dev';

export const scrollable = definePattern({
  description: 'A container that allows for scrolling',
  properties: {
    // The direction of the scroll
    direction: { type: 'enum', value: ['horizontal', 'vertical'] },
    // Whether to hide the scrollbar
    hideScrollbar: { type: 'boolean' },
  },
  // disallow the `overflow` property (in TypeScript)
  blocklist: ['overflow'],
  transform(props) {
    const { direction = 'vertical', hideScrollbar = 'false', ...rest } = props;
    return {
      overflow: 'auto',
      height: direction === 'horizontal' ? '100%' : 'auto',
      width: direction === 'vertical' ? '100%' : 'auto',
      scrollbarWidth: hideScrollbar ? 'none' : 'auto',
      WebkitOverflowScrolling: 'touch',
      '&::-webkit-scrollbar': {
        display: hideScrollbar ? 'none' : 'auto',
      },
      ...rest,
    };
  },
});

export const splitLayout = definePattern({
  description: 'Fullscreen split layout',
  transform() {
    return {
      width: 'screen',
      height: 'screen',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    };
  },
});

export const tiles = definePattern({
  description: '',
  properties: {
    columns: { type: 'number' },
    gap: { type: 'token', property: 'gap', value: 'spacing' },
  },
  transform(props) {
    const { columns = 3, gap = 'md', ...rest } = props;
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(150px, 1fr))`,
      gap,
      rest,
    };
  },
});
