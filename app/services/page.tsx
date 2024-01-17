import { client } from '../../lib/sanity/sanity-client';

type ServicesMenuSection = {
  _id: string;
  index: number;
  title: string;
  subtitle: string;
};

export const runtime = 'edge';

export const metadata = {
  title: 'Services',
  description: 'View all services.'
};

export default async function ServicesPage() {
  const servicesMenuSection = await client.fetch<ServicesMenuSection[]>(
    `*[_type == "servicesMenuSection"]`
  );

  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl px-4 ">
        <h4 className="mb-6 w-full text-4xl font-bold tracking-tight text-gray-800">Services</h4>
        <div className="mx-auto mb-20 flex h-[30rem] w-full max-w-screen-2xl items-center justify-center rounded-lg bg-emerald-300">
          <p className="text-center">services section</p>
        </div>
      </div>
      <h4 className="mx-auto mb-6 max-w-screen-2xl px-4 text-4xl font-bold tracking-tight text-gray-800">
        Our Services
      </h4>

      <section className="mx-auto mb-10 grid max-w-screen-2xl grid-cols-1 gap-4 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
        {servicesMenuSection.map((service, index) => {
          return (
            <div key={index} className="bg-red-200">
              {service.title}
              {service.subtitle}
            </div>
          );
        })}
      </section>
    </>
  );
}
