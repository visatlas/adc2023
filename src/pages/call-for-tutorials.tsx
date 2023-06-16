import Layout from '@/components/layout';
import SEO from '@/components/seo';

export default function CallForTutorials() {
  return (
    <Layout>
      <SEO title="Call for Tutorials" />
      <div className="px-5 md:px-8 lg:px-10 pb-4">
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Call for Tutorials</h2>
        <article className="pb-10">
          <p className="mb-8">We invite submissions for tutorial proposals on all topics covered by the conference, as listed in the CFP of the research track. Tutorial proposals should cover state-of-the-art research, development, and applications in specific data management related areas, and stimulate and facilitate future work.</p>
          <p className="mb-4">We welcome tutorials in different types, depending on the area covered, for instance:</p>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li><strong className="font-semibold">Survey:</strong> an in-depth survey of the chosen topic with the option of describing particular pieces of work in detail.</li>
            <li><strong className="font-semibold">Hands-on lecture style:</strong>  in-depth hands-on training on cutting-edge systems and tools of relevance to the database community.</li>
            <li><strong className="font-semibold">Primer:</strong> a more fundamental introduction to an area less familiar to the database community that has potential impact on database research or could benefit from database support.</li>
          </ul>
          <p className="mb-4"><strong className="font-semibold">Submission Deadline:</strong> Sep 1, 2023 (23:59 AoE Time)</p>
          <p><strong className="font-semibold">Notification Date:</strong> Sep 7, 2023</p>
          <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Submission Guidelines</h3>
          <p className="mb-4">Tutorial submissions should be submitted electronically via e-mail to the Tutorial Chair.</p>
          <p className="mb-8">Submissions should be formatted using the <a className="underline text-sky-700" href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noreferrer">LNCS style</a>, with <strong className="font-semibold">a maximum length of 4 pages</strong>, inclusive of ALL material.</p>
          <p className="mb-4 font-semibold">Proposals should include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Title of the tutorial and an abstract.</li>
            <li>Brief professional biographies of presenters, with a note on their background in the area of the tutorial.</li>
            <li>Target audience and assumed background.</li>
            <li>Scope and structure: enough detail to provide a sense of both the scope of material to be covered and the depth to which it will be covered.</li>
            <li>Intended length of the tutorial (one session of 1.5 hours, or two sessions with a total of 3 hours on the same day). If the tutorial can be of either length, please identify which sections are included for each option.</li>
            <li>A comprehensive bibliography for the proposed tutorial.</li>
            <li>Identification of any other venues in which all or part of the tutorial has been or will be presented.</li>
            <li>Hands-on Tutorial: a list of hardware/software requirements and instructions to attendees.</li>
          </ul>
          <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-4">Contact</h3>
          <p className="mb-4">For questions regarding the submission, please email the tutorial chair:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Hui Luo</strong> (<a className="underline text-sky-700" href="mailto:huil@uow.edu.au" target="_blank" rel="noreferrer">huil@uow.edu.au</a>, University of Wollongong)</li>
          </ul>
        </article>
      </div>
    </Layout>
  );
}
