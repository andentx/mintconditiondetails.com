import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

export default async function Footer() {
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 ';
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className="w-full max-w-screen-2xl text-sm text-neutral-500 ">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 border-t px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm ">
        <div className="mx-auto flex w-full max-w-7xl flex-col  items-center justify-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>built by andrew</p>
        </div>
      </div>
    </footer>
  );
}
