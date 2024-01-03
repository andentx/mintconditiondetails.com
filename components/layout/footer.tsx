import LogoSquare from 'components/logo-square';
import Link from 'next/link';

export default async function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-screen-2xl items-center justify-center p-4">
      <Link href="/" className="mr-2 flex w-full items-center justify-center ">
        <LogoSquare />
        <div className="flex-none text-base">
          <span className="font-bold text-gray-800 ">Mint</span>
          <span className="font-light text-gray-800 ">Condition</span>
        </div>
      </Link>
    </footer>
  );
}
