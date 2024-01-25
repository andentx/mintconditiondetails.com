import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search from './search';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative mx-auto flex w-full max-w-screen-2xl items-center justify-between border-neutral-200 p-4">
      <div className="mr-4 block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex grow justify-center gap-4 md:justify-start">
          <Link
            href="/"
            className="flex w-auto items-center justify-center rounded-lg px-2 md:w-auto"
          >
            <LogoSquare />
            <div className="mr-1 hidden flex-none sm:block sm:text-base md:block">
              <span className="font-bold text-gray-800 ">Mint</span>
              <span className="font-light text-gray-800 ">Condition</span>
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-4 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="rounded px-1 py-1 text-neutral-500 underline-offset-4 hover:text-black hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="mr-4 hidden justify-center lg:flex">
          <Search />
        </div>
        <div className="flex justify-end">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
