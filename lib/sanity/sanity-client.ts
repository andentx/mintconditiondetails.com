import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
