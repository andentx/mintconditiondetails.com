import Image from 'next/image';

export const metadata = {
  title: 'About'
};

export default async function AboutPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl px-4 ">
        <h1 className="mb-6 w-full text-4xl font-bold tracking-tight text-gray-800">About</h1>
        <div className="mx-auto mb-20 flex h-[30rem] w-full flex-col  md:flex-row">
          <div className="text-md flex flex-col pb-10 md:mb-0 md:w-1/2 md:pr-10">
            <p className="mb-6 ">
              <span className="font-bold">Hi, I&apos;m Andrew. </span> I&apos;m a detailer
              specializing in paint correction and ceramic coatings. I also make web-based projects,
              and this is one of them.
            </p>
            <p className="mb-6">
              After a decade of detailing experience, I&apos;ve developed preferences and processes
              that help me achieve extraordinary results. This website is a place for me to offer
              services as well as share my knowledge in hopes of helping you achieve exceptional
              results as well.
            </p>
          </div>
          <div className="flex flex-col md:w-1/2">
            <Image
              src="https://res.cloudinary.com/dsz45zrla/image/upload/v1706566284/IMG_1685_1_cviiyf.jpg"
              alt="Andrew polishing paint at a detailing event"
              className="w-full max-w-screen-2xl rounded-md border border-gray-800 object-contain"
              height="1200"
              width="1600"
            />
          </div>
        </div>
      </div>
    </>
  );
}
