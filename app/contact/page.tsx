export const runtime = 'edge';

export const metadata = {
  title: 'Contact',
  description: 'Contact description'
};

export default async function ContactPage() {
  return (
    <>
      <h4 className="mx-auto mb-6 max-w-screen-2xl px-4 text-2xl lg:text-4xl">Contact Page</h4>
      <div className="mx-auto mb-20 flex h-[30rem] w-full max-w-screen-2xl items-center justify-center rounded-lg bg-emerald-300">
        <p className="text-center">contact section</p>
      </div>
    </>
  );
}
