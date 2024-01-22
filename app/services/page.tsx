import { MenuSection } from 'components/services/services-menu-section';
import { client } from '../../lib/sanity/sanity-client';
import { ServicesMenuSection } from '../../lib/sanity/types';

export const runtime = 'edge';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Services',
  description: 'View all services.'
};

export default async function ServicesPage() {
  const query = `*[_type == "servicesMenuSection"]{
    title,
    subtitle,
    "menuItems": menuItems[]->{
      title,
      index,
      description[]{..., children[]{...}},
      price
    },
    images[]{
      asset->{
        _ref
      }
    }
  }`;

  const servicesMenuSection = await client.fetch<ServicesMenuSection[]>(query);

  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl px-4 ">
        <h4 className="mb-6 w-full text-4xl font-bold tracking-tight text-gray-800">Services</h4>

        {servicesMenuSection.map((service, index) => (
          <MenuSection
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            menuItems={service.menuItems}
            images={service.images}
          />
        ))}
      </div>
    </>
  );
}
