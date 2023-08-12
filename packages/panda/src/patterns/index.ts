import { definePattern } from '@pandacss/dev';

// export const scrollable = definePattern({
//   description: 'A container that allows for scrolling',
//   properties: {
//     // The direction of the scroll
//     direction: { type: 'enum', value: ['horizontal', 'vertical'] },
//     // Whether to hide the scrollbar
//     hideScrollbar: { type: 'boolean' },
//   },
//   // disallow the `overflow` property (in TypeScript)
//   blocklist: ['overflow'],
//   transform(props) {
//     const { direction, hideScrollbar, ...rest } = props;
//     return {
//       overflow: 'auto',
//       height: direction === 'horizontal' ? '100%' : 'auto',
//       width: direction === 'vertical' ? '100%' : 'auto',
//       scrollbarWidth: hideScrollbar ? 'none' : 'auto',
//       WebkitOverflowScrolling: 'touch',
//       '&::-webkit-scrollbar': {
//         display: hideScrollbar ? 'none' : 'auto',
//       },
//       ...rest,
//     };
//   },
// });

export const level = definePattern({
  description: 'The level styles',
  transform(props) {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      ...props,
    };
  },
});
