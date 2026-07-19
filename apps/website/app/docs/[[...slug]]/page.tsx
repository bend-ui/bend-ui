import { notFound } from 'next/navigation';
import { mdxComponents } from '../../../lib/mdx-components';
import { source } from '../../../lib/source';
import { DocsPage } from '../../../src/layouts/docs-layout';
// import { metadataImage } from '@/lib/metadata';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  // Type assertion needed due to type inference issue with toFumadocsSource
  const pageData = page.data as any;
  const MDX = pageData.body as React.ComponentType<any>;

  return (
    <DocsPage
      title={pageData.title}
      description={pageData.description}
      toc={pageData.toc}
      tree={source.pageTree}
      url={page.url}
    >
      <MDX components={mdxComponents} />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const pageData = page.data as any;

  return {
    title: pageData.title,
    description: pageData.description,
  };
}
