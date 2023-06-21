import fs from 'fs';
import { join } from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import DocsLayout from '../../components/DocsLayout';
import { getParsedFileContentBySlug } from '../../lib/markdown';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

const DOCS_PATH = join(process.cwd(), 'apps/website/content/docs');

export function Docs({
  frontMatter,
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DocsLayout>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} />
    </DocsLayout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { content, frontMatter } = getParsedFileContentBySlug(
    context.params.slug as string,
    DOCS_PATH
  );

  const mdxSource = await serialize(content);

  return {
    props: {
      slug: context.params.slug,
      frontMatter,
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs
    .readdirSync(DOCS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Docs;
