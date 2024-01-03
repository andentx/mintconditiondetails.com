export const runtime = 'edge';

export const metadata = {
  title: 'Book an Appointment',
  description: 'Book an Appointment.'
};

export default async function AppointmentPage() {
  return (
    <>
      <h4 className="mx-auto mb-6 max-w-screen-2xl px-4 text-2xl lg:text-4xl">
        Book an Appointment
      </h4>
      <div className="mx-auto mb-20 flex h-[30rem] w-full max-w-screen-2xl items-center justify-center rounded-lg bg-emerald-300">
        <p className="text-center">book an appointment section</p>
      </div>
    </>
  );
}
