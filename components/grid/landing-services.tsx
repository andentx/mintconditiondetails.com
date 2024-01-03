export async function LandingServicesGrid() {
  const services = [
    { link: '1', text: 'detailing' },
    { link: '2', text: 'paint correction' },
    { link: '3', text: 'ceramic coatings' }
  ];

  return (
    <>
      <section className="mx-auto mb-20 grid max-w-screen-2xl grid-cols-1 gap-4 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex h-40 w-full items-center justify-center rounded-lg bg-emerald-300 md:h-60 lg:h-96`}
          >
            <p>{service.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
