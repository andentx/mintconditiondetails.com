import ContactSection from 'components/contact-section';
import { ThreeItemGrid } from 'components/grid/three-items';
import LandingHero from 'components/landing-hero';
import Image from 'next/image';
import Link from 'next/link';
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

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const homePageServices = await client.fetch<HomepageFeaturedService[]>(
    `*[_type == "homepageFeaturedServices"] | order(index asc)`
  );

  return (
    <>
      <LandingHero />
      <h3 className="mx-auto mb-6 w-full max-w-screen-2xl px-4 text-4xl font-bold tracking-tight text-gray-800">
        Our Services
      </h3>
      <section className="mx-auto mb-10 grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
        {homePageServices.map((service, index) => {
          const imageUrl = service.image.asset._ref
            ? urlForImage(service.image.asset._ref).height(1000).width(2000).url()
            : null;

          return (
            <Link
              href="/services"
              key={index}
              className="group relative grid h-40 w-full grid-cols-1 items-center justify-items-center overflow-hidden border border-neutral-500 bg-neutral-500 hover:cursor-pointer md:h-60 lg:h-96"
            >
              {imageUrl ? (
                <Image
                  className="col-start-1 row-start-1 h-full w-full object-cover transition-all ease-in-out group-hover:opacity-60 group-focus:opacity-60"
                  fill={true}
                  alt={service.imageAltText}
                  src={imageUrl}
                />
              ) : (
                <div className="h-full w-full bg-neutral-500 " />
              )}
              <div className="z-50 col-start-1 row-start-1 flex h-full w-full flex-col items-center justify-center text-center">
                <div className=" mintButton group-hover:bg-emerald-400/80 group-focus:bg-emerald-400/80 group-active:bg-emerald-500">
                  {service.title}
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      <div className="mx-auto mb-20 flex w-full max-w-screen-2xl justify-center px-4 py-0">
        <Link href="/services" className="mintButton">
          View All Services
        </Link>
      </div>

      <h3 className="mx-auto mb-6 w-full max-w-screen-2xl px-4 text-4xl font-bold tracking-tight text-gray-800">
        Online Store
      </h3>
      <ThreeItemGrid />

      <div className="mx-auto mb-20 flex w-full max-w-screen-2xl justify-center px-4">
        <Link href="/shop" className="mintButton">
          Shop All Products
        </Link>
      </div>

      <h3 className="mx-auto mb-6 w-full max-w-screen-2xl px-4 text-4xl font-bold tracking-tight text-gray-800 md:mb-4">
        Contact
      </h3>
      <div className="mx-auto mb-20 flex w-full max-w-screen-2xl justify-center px-4">
        <ContactSection />
      </div>
    </>
  );
}
