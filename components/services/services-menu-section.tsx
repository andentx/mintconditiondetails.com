type MenuSectionProps = {
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

export function MenuSection({ title, subtitle, menuItems }: MenuSectionProps) {
  return (
    <>
      <div className="bg-blue-200">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-gray-500">{subtitle}</p>
            <div className="mt-4 bg-purple-200 text-gray-500">
              {menuItems.map((item) => {
                return (
                  <div key={item.index} className="bg-green-200">
                    <h3>{item.title}</h3>
                    <dd className="mb-2 mt-2 text-sm text-gray-500 ">
                      {item.description.map((descriptionElement, index) => (
                        <p key={index}>{descriptionElement.children[0]?.text}</p>
                      ))}
                    </dd>
                    <p className="font-montserratBold mt-2 text-sm text-gray-900">{item.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
