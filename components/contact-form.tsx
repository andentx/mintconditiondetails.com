'use client';

import { ValidationError, useForm } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID as string);

  return (
    <form onSubmit={handleSubmit} method="POST" className="w-full md:w-1/2">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border border-black bg-gray-300 px-3.5 py-2 text-black focus:outline-none  focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                style={{ WebkitAppearance: 'none' }}
              />
              <ValidationError prefix="FirstName" field="first-name" errors={state.errors} />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border border-black bg-gray-300 px-3.5 py-2 text-black focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                style={{ WebkitAppearance: 'none' }}
              />
              <ValidationError prefix="LastName" field="last-name" errors={state.errors} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="ocus:outline-none block w-full rounded-md border border-black bg-gray-300 px-3.5 py-2 text-black focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                style={{ WebkitAppearance: 'none' }}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="ocus:outline-none block w-full rounded-md border border-black bg-gray-300 px-3.5 py-2 text-black focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                style={{ WebkitAppearance: 'none' }}
              />
              <ValidationError prefix="PhoneNumber" field="phone-number" errors={state.errors} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900 "
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border border-black bg-gray-300 px-3.5 py-2 text-black focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                defaultValue={''}
                style={{ WebkitAppearance: 'none' }}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={state.submitting || state.succeeded}
            className={`rounded-lg border border-gray-800 bg-emerald-300/80 px-6 py-4 text-center text-lg text-gray-800 transition-all ease-in-out hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400 active:bg-emerald-500 ${
              state.succeeded ? 'bg-emerald-500' : ''
            }`}
          >
            {state.succeeded ? 'Message Sent!' : 'Send message'}
          </button>
        </div>
      </div>
    </form>
  );
}
