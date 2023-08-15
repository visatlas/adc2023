import Layout from '@/components/layout';
import SEO from '@/components/seo';

import Image from 'next/image';

export default function Registration() {
  return (
    <Layout>
      <SEO title="Registration" />
      <div className="px-5 md:px-8 lg:px-10">
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Registration</h2>
        <article className="pb-10">
          <ul className="list-disc ml-4 space-y-4">
            <li><span className="font-semibold">Author Registration</span> (For authors of accepted research track or shepherding track papers):<br />
              <a className="underline text-sky-700" href="https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-author-registration" target="_blank" rel="noreferrer">https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-author-registration</a>
            </li>
            <li><span className="font-semibold">In Person</span> (For attendees of ADC 2023):<br />
              <a className="underline text-sky-700" href="https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-in-person-registration" target="_blank" rel="noreferrer">https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-in-person-registration</a>
            </li>
            <li><span className="font-semibold">Encore Registration</span> (For authors of accepted encore track papers):<br />
              <a className="underline text-sky-700" href="https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-encore-track-registration" target="_blank" rel="noreferrer">https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-encore-track-registration</a>
            </li>
            <li><span className="font-semibold">PhD Workshop Registration</span>:<br />
              <a className="underline text-sky-700" href="https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-phd-workshop-registration" target="_blank" rel="noreferrer">https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-phd-workshop-registration</a>
              <p className="mt-2">PhD workshop registration is for students only. It covers accesses to the tutorials and encore track sessions.</p>
            </li>
          </ul>
        </article>
      </div>
    </Layout>
  );
}
