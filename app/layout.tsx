import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { GeistSans } from 'geist/font';
import { ensureStartsWith } from 'lib/utils';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
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
