import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL('https://www.mintconditiondetails.com'),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  openGraph: {
    images: '/opengraph-image.png',
    type: 'website',
    siteName: 'Mint Condition Detailing',
    locale: 'en_US'
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`flex min-h-full flex-col ${GeistSans.variable}`}>
      <body className="flex grow flex-col items-center bg-neutral-50 text-black selection:bg-emerald-300">
        <Navbar />
        <Suspense>
          <main className="flex w-full max-w-screen-2xl grow flex-col items-center pb-20 pt-4 lg:pt-10">
            {children}
          </main>
        </Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
