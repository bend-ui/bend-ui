import { notFound } from 'next/navigation';
import { examples, isExampleId } from '../../../lib/component-preview/registry';
import { Frame } from './frame';

export function generateStaticParams() {
  return Object.keys(examples).map((id) => ({ id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!isExampleId(id)) notFound();
  return <Frame id={id} />;
}
