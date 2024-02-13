import ContactSection from 'components/contact-section';

export const metadata = {
  title: 'Contact'
};

export default async function ContactPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl px-4 ">
        <h1 className="mb-6 w-full text-4xl font-bold tracking-tight text-gray-800">Contact</h1>
        <ContactSection />
      </div>
    </>
  );
}
