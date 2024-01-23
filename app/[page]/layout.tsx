import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-full px-4">
        <Suspense>{children}</Suspense>
      </div>
    </Suspense>
  );
}
