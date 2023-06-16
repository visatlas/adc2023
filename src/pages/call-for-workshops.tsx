import Layout from '@/components/layout';
import SEO from '@/components/seo';

export default function CallForWorkshops() {
  return (
    <Layout>
      <SEO title="Call for Workshops" />
      <div className="px-5 md:px-8 lg:px-10 pb-4">
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Call for Workshops</h2>
        <article className="pb-10">
          <p className="mb-4">We invite proposals for workshops to be collocated with the ADC 2023 conference. The organisers of accepted workshops are required to announce the workshop and call for papers, solicit submissions, and conduct the reviewing process.</p>
          <p className="mb-4"><strong className="font-semibold">Submission Deadline:</strong> May 1, 2023, 23:59 AoE Time</p>
          <p><strong className="font-semibold">Notification Date:</strong> May 7, 2023</p>
          <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Submission Guidelines</h3>
          <p className="mb-4">Workshop proposals should be submitted via e-mail to Workshop Track Chair. Proposals must be in pdf and include the following (in the order given):</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Workshop title.</li>
            <li>Organisers.</li>
            <li>Contact information.</li>
            <li>A description of the workshop&lsquo;s topic and its goals.</li>
            <li>Desired workshop format, including preferred date and duration.</li>
            <li>A description of the submission review process, including key dates and coverage of how conflicts of interest are handled.</li>
            <li>Plans for publicity.</li>
            <li>Potential (or accepted) program committee members.</li>
            <li>Potential (or accepted) speakers or keynotes.</li>
            <li>Historical information about each of the most recent previous editions of the workshop (if this is not its first edition).</li>
          </ul>
          <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-4">Contact</h3>
          <p className="mb-4">For questions regarding the submission, please email the workshop chair:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Hui Luo</strong> (<a className="underline text-sky-700" href="mailto:huil@uow.edu.au" target="_blank" rel="noreferrer">huil@uow.edu.au</a>, University of Wollongong)</li>
          </ul>
        </article>
      </div>
    </Layout>
  );
}
