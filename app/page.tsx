import ContactSection from 'components/contact-section';
import { ThreeItemGrid } from 'components/grid/three-items';
import LandingHero from 'components/landing-hero';
import Image from 'next/image';
import { client } from '../lib/sanity/sanity-client';
import { urlForImage } from '../lib/sanity/sanity-image';

type HomepageFeaturedService = {
  _id: string;
  index: number;
  title: string;
  description: string;
  url: string;
  image: {
    asset: {
      _ref: string;
    };
    altText: string;
  };
  imageAltText: string;
};

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const homePageServices = await client.fetch<HomepageFeaturedService[]>(
    `*[_type == "homepageFeaturedServices"]`
  );

  return (
    <>
      <LandingHero />
      <h4 className="mx-auto mb-6 w-full max-w-screen-2xl px-4 text-4xl font-bold tracking-tight text-gray-800">
        Our Services
      </h4>
      <section className="mx-auto mb-10 grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
        {homePageServices
          .sort((a, b) => a.index - b.index) // Sort the array by index
          .map((service, index) => {
            const imageUrl = service.image.asset._ref
              ? urlForImage(service.image.asset._ref).height(1000).width(2000).url()
              : null;

            return (
              <a
                href="/services"
                key={index}
                className={`group relative flex h-40 w-full items-center justify-center rounded-lg hover:cursor-pointer focus:outline-none focus:ring focus:ring-emerald-300 md:h-60 lg:h-96`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex justify-center overflow-hidden rounded-lg bg-emerald-300 "
                >
                  {imageUrl ? (
                    <Image
                      className="h-full w-full rounded-lg border border-gray-800 object-cover transition-all ease-in-out group-hover:opacity-60 group-focus:opacity-60"
                      fill={true}
                      alt={service.imageAltText}
                      src={imageUrl}
                    />
                  ) : (
                    <div className="h-full w-full rounded-lg bg-neutral-400 " />
                  )}
                </div>
                <div className="relative mx-auto flex flex-col items-center justify-center text-center">
                  <div className="inline-block rounded-md border border-gray-800 bg-emerald-300/80 px-8 py-3 text-2xl font-medium text-black shadow backdrop-blur-sm transition-all ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-300 group-hover:bg-emerald-400 group-focus:bg-emerald-400 group-active:bg-emerald-500">
                    {service.title}
                  </div>
                </div>
              </a>
            );
          })}
      </section>

      <div className="mx-auto mb-20 flex w-full max-w-screen-2xl justify-center px-4 py-0">
        <a
          href="/services"
          className="rounded-lg border border-gray-800 bg-emerald-300/80 px-6 py-4 text-xl text-gray-800 transition-all ease-in-out hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400 active:bg-emerald-500"
        >
          View All Services
        </a>
      </div>

      <h4 className="mx-auto mb-6 w-full max-w-screen-2xl px-4 text-4xl font-bold tracking-tight text-gray-800">
        Online Store
      </h4>
      <ThreeItemGrid />

      <div className="mx-auto mb-20 flex w-full max-w-screen-2xl justify-center px-4">
        <a
          href="/shop"
          className="rounded-lg border border-gray-800 bg-emerald-300/80 px-6 py-4 text-xl text-gray-800 transition-all ease-in-out hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400 active:bg-emerald-500"
        >
          Shop All Products
        </a>
      </div>

      <h4 className="mx-auto mb-6 w-full max-w-screen-2xl px-4 text-4xl font-bold tracking-tight text-gray-800 md:mb-4">
        Contact
      </h4>
      <div className="mx-auto mb-20 flex w-full max-w-screen-2xl justify-center px-4">
        <ContactSection />
      </div>
    </>
  );
}
