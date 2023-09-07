import Layout from '@/components/layout';
import SEO from '@/components/seo';

import Image from 'next/image';

export default function StudentTravelGrants() {
  return (
    <Layout>
      <SEO title="Student Travel Grants" />
      <div className="px-5 md:px-8 lg:px-10">
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Student Travel Grants</h2>
        <article className="pb-10">
          <h3 className="font-bold text-2xl text-gray-800 mb-6">ADC-23 &amp; CIRES PhD School Travel Grants</h3>
          <p className="mb-4">Up to <span className='font-semibold'>5 x ADC-PhD School Travel Grants</span> are available for Australian based students who live outside Melbourne, to subsidise travel and up to 5-nights accommodation to attend both the <a href="https://cires.org.au/wp-content/uploads/2023/07/PhD-School-2023-FINAL.pdf" className="underline font-semibold text-sky-700" target="_blank" rel="noreferrer">CIRES PhD School</a> and the <span className='font-semibold'>Australasian Database Conference</span>.</p>
          <p className="mb-4">The grants are worth up to a maximum of $1,500 and would be reimbursed based on receipts.</p>
          <h3 className="font-bold text-xl text-gray-600 mb-4 mt-8">&#9654;&nbsp;&nbsp;Selection Criteria</h3>
          <p className="mb-4">To be eligible, you must be a student author presenting at ADC, and proof of ADC registration will be required.</p>
          <h3 className="font-bold text-xl text-gray-600 mb-4 mt-8">&#9654;&nbsp;&nbsp;Application Procedure</h3>
          <p className="mb-4">You may indicate your interest to be considered for a Travel Grant via the <a href="https://forms.gle/3sRUK7L6ZHy61Xg19" className="underline font-semibold text-sky-700" target="_blank" rel="noreferrer">online application form</a>.</p>
          <p>Deadline for applications is <span className='font-semibold'>12 September 2023</span>.&nbsp;&nbsp;<span className="line-through text-gray-400">7 September 2023</span></p>
        </article>
      </div>

    </Layout>
  );
}
