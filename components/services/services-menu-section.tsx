type MenuSectionProps = {
  title: string;
  subtitle: string;
  menuItems: MenuItem[];
};

type MenuItem = {
  title: string;
  id: string;
  description: { children: Array<{ text: string }> }[];
  descriptionBulleted: { children: Array<{ text: string }> }[];
  price: string;
};

export function MenuSection({ title, subtitle, menuItems }: MenuSectionProps) {
  const sectionTitle = title;
  const sectionSubtitle = subtitle;
  const items = menuItems;

  console.log(items);
  return (
    <>
      <div className="bg-blue-200">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-gray-500">{sectionSubtitle}</p>

            {/* <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {items.map((feature) => {
                return (
                  <div
                    key={feature.id}
                    className="flex flex-col pt-4 border-t-2 border-gray-200 border-solid "
                  >
                    <dt className="font-medium text-gray-900">{feature.title}</dt>

                    <dd className="mt-2 text-sm text-gray-900 font-montserratBold">
                      {feature.price}
                    </dd>
                  </div>
                );
              })}
            </dl> */}
          </div>
        </div>
      </div>
    </>
  );
}
