import { MenuSection } from 'components/services/services-menu-section';
import { client } from '../../lib/sanity/sanity-client';

type ServicesMenuSection = {
  title: string;
  subtitle: string;
  menuItems: MenuItem[];
};

type MenuItem = {
  title: string;
  index: string;
  description: { children: Array<{ text: string }> }[];
  price: string;
};

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
      description[]{
        children[]{
          text
        }
      },
      price
    }
  }`;

  const servicesMenuSection = await client.fetch<ServicesMenuSection[]>(query);

  // const servicesMenuSection = await client.fetch<ServicesMenuSection[]>(
  //   `*[_type == "servicesMenuSection"]`
  // );

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
          />
        ))}
      </div>
    </>
  );
}
