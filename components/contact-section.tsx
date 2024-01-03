import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <div className="relative isolate w-full">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 pt-24 sm:pt-32 lg:grid-cols-2 lg:py-48">
        <div className="relative px-6 pb-20 lg:static lg:px-8 ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
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
                    className="rounded-md p-2 transition-colors ease-in-out focus:outline-none focus:ring focus:ring-amber-400 active:text-black group-hover:text-gray-900 "
                    href="mailto:hello@grizzlyguitar.com"
                  >
                    hello@mintconditiondetails.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
