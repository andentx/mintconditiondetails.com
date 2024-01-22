import { PortableText } from '@portabletext/react';
import { MenuSectionProps } from 'lib/sanity/types';

export function MenuSection({ title, subtitle, menuItems, images }: MenuSectionProps) {
  return (
    <>
      <div className="">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-gray-500">{subtitle}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {menuItems.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex flex-col border-t-2 border-solid border-gray-200 pt-4 "
                  >
                    <dt className="font-medium text-gray-900">{item.title}</dt>
                    <dd className="mb-2 mt-2 text-sm text-gray-500 ">
                      <span className="portableText">
                        <PortableText value={item.description} />
                      </span>
                    </dd>
                    <dd className="mt-2 text-sm text-gray-900 ">{item.price}</dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:mt-4 sm:gap-6 lg:mt-14 lg:gap-8">
            {images.map((image, idx) => (
              <div key={idx} className="h-64 w-64 rounded-lg bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
