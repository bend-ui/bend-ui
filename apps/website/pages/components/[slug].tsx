import { join } from 'path';
import { readdirSync } from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getParsedFileContentBySlug } from '../../lib/markdown';
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

const COMPONENTS_PATH = join(process.cwd(), 'apps/website/content/components');

export default function ComponentsPage({
  frontMatter,
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <pre>{frontMatter.import}</pre>
      <MDXRemote {...mdxSource} />
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { content, frontMatter } = getParsedFileContentBySlug(
    context.params.slug as string,
    COMPONENTS_PATH
  );

  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paths = readdirSync(COMPONENTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
