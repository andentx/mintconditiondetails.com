import Image from 'next/image';

export default function LandingHero() {
  return (
    <div className="relative mx-auto mb-20 w-full max-w-screen-2xl">
      <div aria-hidden="true" className="absolute inset-0 flex justify-center overflow-hidden px-4">
        <Image
          src="https://res.cloudinary.com/dsz45zrla/image/upload/v1703008119/Image_1_dtzv0k.jpg"
          alt="A guitar on a workbench"
          className="h-full w-full max-w-screen-2xl rounded-md border border-gray-800 object-cover object-center"
          height="1200"
          width="1600"
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-44 pt-24 text-center sm:pb-60 lg:pb-96 1280px:pb-[32rem]">
        <h1 className="mb-4 w-full max-w-xs rounded-md border border-gray-800 bg-white/80 py-4 text-xl backdrop-blur-sm sm:max-w-lg sm:text-4xl md:max-w-2xl md:text-5xl lg:mb-12 lg:max-w-3xl lg:text-6xl">
          <span className="font-bold text-gray-800 ">Mint</span>
          <span className="mr-[0.5ch] font-light text-gray-800">Condition</span>
          <span className="font-bold text-gray-800">Detailing</span>
        </h1>
        <p className="mb-12 w-full max-w-xs rounded-md border border-gray-800 bg-white/80 px-6 py-4 text-base text-black backdrop-blur-sm sm:max-w-lg sm:text-lg lg:text-xl ">
          A boutique detailing shop specializing in paint correction and ceramic coatings.
        </p>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-28">
          <a href="/services" className="mintButton">
            View Services
          </a>
          <a href="/shop" className="mintButton">
            View Store
          </a>
        </div>
      </div>
    </div>
  );
}
