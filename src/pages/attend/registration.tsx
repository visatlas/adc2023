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

          <h4 className="font-semibold text-xl">Author Registration</h4>
          <ul className="list-disc ml-6 mt-2">
            <li>For authors of accepted research track or shepherding track papers.</li>
            <li>Covers all ADC 2023 events, including the PhD Workshop.</li>
            <li className="mt-2"><span className="font-medium">Registration Link: </span><br/><a className="underline text-sky-700" href="https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-author-registration" target="_blank" rel="noreferrer">https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-author-registration</a></li>
          </ul>

          <h4 className="font-semibold text-xl mt-10">In Person</h4>
          <ul className="list-disc ml-6 mt-2">
            <li>For attendees of ADC 2023.</li>
            <li>Covers all ADC 2023 events, including the PhD Workshop.</li>
            <li className="mt-2"><span className="font-medium">Registration Link: </span><br /><a className="underline text-sky-700" href="https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-in-person-registration" target="_blank" rel="noreferrer">https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-in-person-registration</a></li>
          </ul>

          <h4 className="font-semibold text-xl mt-10">Encore Registration</h4>
          <ul className="list-disc ml-6 mt-2">
            <li>For authors of accepted encore track papers.</li>
            <li>Covers all ADC 2023 events, including the PhD Workshop.</li>
            <li className="mt-2"><span className="font-medium">Registration Link: </span><br /><a className="underline text-sky-700" href="https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-encore-track-registration" target="_blank" rel="noreferrer">https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-encore-track-registration</a></li>
          </ul>

          <h4 className="font-semibold text-xl mt-10">PhD Workshop Registration</h4>
          <ul className="list-disc ml-6 mt-2">
            <li>PhD workshop registration is for students only.</li>
            <li>Covers accesses to the tutorials and encore track sessions.</li>
            <li className="mt-2"><span className="font-medium">Registration Link: </span><br /><a className="underline text-sky-700" href="https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-phd-workshop-registration" target="_blank" rel="noreferrer">https://ecommerce.unimelb.edu.au/australasian-database-conference-adc-2023-phd-workshop-registration</a></li>
          </ul>
        </article>
      </div>
    </Layout>
  );
}
