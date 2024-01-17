export function MenuSection({ title, subtitle }: { title: string; subtitle: string }) {
  const sectionTitle = title;
  const sectionSubtitle = subtitle;

  return (
    <>
      <div className="bg-blue-200">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-gray-500">{sectionSubtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
