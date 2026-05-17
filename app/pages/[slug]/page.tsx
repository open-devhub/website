import { notFound } from 'next/navigation';
import { getPage, getAdjacentPages, PageContent } from '@/lib/pages.config';
import PageClient from './PageClient';

interface Props {
  params: { slug: string };
}

export default function PageRoute({ params }: Props) {
  const page = getPage(params.slug);
  if (!page) notFound();

  const { prev, next } = getAdjacentPages(params.slug);

  return <PageClient page={page} prev={prev} next={next} />;
}

export async function generateStaticParams() {
  const { pages } = await import('@/lib/pages.config');
  return pages.map((page) => ({ slug: page.slug }));
}
