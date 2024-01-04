import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between md:gap-0">
      <div className=" md:w-1/2 md:pr-8 md:pt-8">
        <p className="text-lg leading-8 text-gray-600">
          Our shop is located in Baltimore, MD. Visits are by appointment only.
        </p>
        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
          <div className="flex gap-x-2">
            <dt className="flex-none">
              <span className="sr-only">Address</span>
              <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
            </dt>
            <dd className="pl-2">Baltimore, MD</dd>
          </div>
          <div className="group flex gap-x-2">
            <dt className="flex-none ">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                className="h-7 w-6 text-gray-400 transition-colors ease-in-out group-hover:text-gray-900"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a
                className="rounded-md p-2 transition-colors ease-in-out focus:outline-none focus:ring focus:ring-emerald-400 active:text-black group-hover:text-gray-900 "
                href="mailto:hello@grizzlyguitar.com"
              >
                hello@mintconditiondetails.com
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <ContactForm />
    </div>
  );
}
