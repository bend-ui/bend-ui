import { applyMdxPreset, defineDocs } from 'fumadocs-mdx/config';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    mdxOptions: applyMdxPreset({
      rehypeCodeOptions: {
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
        defaultColor: false,
      },
    }),
  },
});
