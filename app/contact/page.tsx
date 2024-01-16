export const runtime = 'edge';

export const metadata = {
  title: 'Contact',
  description: 'Contact description'
};

export default async function ContactPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl px-4 ">
        <h4 className="mb-6 w-full text-4xl font-bold tracking-tight text-gray-800">Contact</h4>
        <div className="mx-auto mb-20 flex h-[30rem] w-full max-w-screen-2xl items-center justify-center rounded-lg bg-emerald-300">
          <p className="text-center">contact section</p>
        </div>
      </div>
    </>
  );
}
