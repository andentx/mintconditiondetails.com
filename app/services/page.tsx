import { MenuSection } from 'components/services/services-menu-section';
import { client } from '../../lib/sanity/sanity-client';

type ServicesMenuSection = {
  _id: string;
  index: number;
  title: string;
  subtitle: string;
};

export const runtime = 'edge';

export const dynamic = 'force-dynamic';

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

        {servicesMenuSection.map((service, index) => {
          return <MenuSection key={index} title={service.title} subtitle={service.subtitle} />;
        })}
      </div>
    </>
  );
}
