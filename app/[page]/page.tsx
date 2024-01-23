import type { Metadata } from 'next';

import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return (
    <>
      <div className="flex w-full flex-col items-center ">
        <h4 className="mb-6 w-full text-4xl font-bold tracking-tight text-gray-800">
          {page.title}
        </h4>

        <Prose className="mb-40" html={page.body as string} />
        <p className="w-full text-center text-sm italic ">
          {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).format(new Date(page.updatedAt))}.`}
        </p>
      </div>
    </>
  );
}
