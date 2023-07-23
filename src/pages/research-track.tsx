import Layout from '@/components/layout';
import SEO from '@/components/seo';

export default function ResearchTrack() {
  return (<Layout>
    <SEO title="Research Track" />
    <div className="px-5 md:px-8 lg:px-10">
      <small className="mt-10 mb-2 block font-medium text-gray-500 tracking-wide">Call for Papers:</small>
      <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Research Track</h2>
      <article className="pb-10">
        <h3 className="font-bold text-xl text-gray-600 mb-6">Relevant topics include, but are not limited to:</h3>
        <ul className="list-disc list-inside">
          <li>Artificial intelligence in big data</li>
          <li>Cloud, distributed, and parallel databases</li>
          <li>Data cleaning and integration</li>
          <li>Data preparation and discovery</li>
          <li>Data mining and data analytics</li>
          <li>Data platform internals</li>
          <li>Data warehousing</li>
          <li>Data market</li>
          <li>Database integration</li>
          <li>Database performance and tuning</li>
          <li>High-dimensional and temporal data</li>
          <li>Knowledge discovery</li>
          <li>Machine learning methods for management of data</li>
          <li>Mobile databases</li>
          <li>Multimedia databases</li>
          <li>Novel data management applications</li>
          <li>Privacy and security in databases</li>
          <li>Query processing and optimization</li>
          <li>Recommendation systems</li>
          <li>Network and graph data management</li>
          <li>Spatial data processing and management</li>
          <li>Stream and sensor data management</li>
          <li>Uncertain and probabilistic databases</li>
          <li>Web databases</li>
        </ul>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Instructions</h3>
        <ul className="list-disc list-inside space-y-3">
          <li>Submitted papers must be original contributions and cannot be under review for any other forum.
            The accepted papers will be published in the conference proceedings, which will form a volume in
            the Springer&rsquo;s Lecture Notes in Computer Science series.</li>
          <li>All submitted papers must be in English and conform to the formatting instructions for the Lecture
            Notes in Computer Science (LNCS) including references and figures.</li>
          <li>The format style files are available at <a className="underline text-sky-700" href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noreferrer">LNCS Authors Instructions Page</a>.</li>
          <li>Authors should consult Springer&rsquo;s authors&rsquo; guidelines and use their proceedings templates, either for LaTeX or for Word, for the preparation of their papers. Springer encourages authors to include their ORCIDs in their papers. In addition, the corresponding author of each paper, acting on behalf of all of the authors of that paper, must complete and sign a Consent-to-Publish form. The corresponding author signing the copyright form should match the corresponding author marked on the paper. Once the files have been sent to Springer, changes relating to the authorship of the papers cannot be made.</li>
          <li>Submitted files must be in PDF, where the following page limits apply: <span className="font-bold">12 pages for research full papers, or 4 pages for demonstration proposals. The references are counted within the page limit for both full papers and demo papers.</span></li>
          <li>Each paper will be judged on its originality, significance, technical quality, relevance to ADC, and presentation.</li>
          <li>ADC follows single blind review which means that authors&rsquo; information must be included in the submission.</li>
        </ul>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Important Dates</h3>
        {/* <p>23:59 AoE time</p> */}
        <ul className="list-disc list-inside mt-2">
          <li><strong className="font-semibold">Full Paper Deadline:</strong> &nbsp;1 Aug, 2023</li>
          <li><strong className="font-semibold">Author Notification:</strong> &nbsp;1 Sep, 2023</li>
          <li><strong className="font-semibold">Camera-Ready Deadline:</strong> &nbsp;15 Sep, 2023</li>
        </ul>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Submissions</h3>
        <ul className="list-disc list-inside space-y-3">
          <li>The submission of a paper should be regarded as an undertaking that, should the paper be accepted, at least one author will attend the conference in person to present the work.</li>
          <li>The submission page is: <a className="underline text-sky-700" href="https://cmt3.research.microsoft.com/ADC2023" target="_blank" rel="noreferrer">https://cmt3.research.microsoft.com/ADC2023</a></li>
        </ul>
      </article>
    </div>
  </Layout>);
}
