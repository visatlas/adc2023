import Layout from '@/components/layout';
import SEO from '@/components/seo';

export default function ShepherdingTrack() {
  return (<Layout>
    <SEO title="Shepherding Track" />
    <div className="px-5 md:px-8 lg:px-10">
      <small className="mt-10 mb-2 block font-medium text-gray-500 tracking-wide">Call for Papers:</small>
      <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Shepherding Track</h2>
      <article className="pb-10">
        <p className="mb-4"><strong>Purpose.</strong> The Shepherding Track serves as a novel venue for high-quality publications of research conducted by pre/early-PhDs and honours/master students. This track aims to enrich the academic training and experience of junior students by selecting early-career researchers as shepherd mentors to provide actionable instructions on students’ preliminary submission and results. After going through one or more rounds of the shepherding process, if the submission’s research contribution and quality meets the expectation, the submission will be accepted into the main conference.</p>
        <p className="mb-4"><strong>Relationship to ADC.</strong> Submissions to the track will be part of the main ADC conference, presented alongside the main conference research track papers. Accepted papers will be published in the ADC proceedings. We will maintain a page on the ADC website with all accepted submissions.</p>
        <p className="mb-4"><strong>Criteria.</strong> We are aiming for an equally stringent review as that of the research track but tailored to cater towards a (multi-round) shepherding process. Submissions to this track will be reviewed by the selected shepherd mentors.</p>
        <p>Relevant Topics. Please refer to those in the CFP of the research track.</p>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Instructions</h3>
        <p className="mb-4"><strong>Submission format.</strong></p>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li>All submitted papers must be in English and conform to the formatting instructions for the Lecture Notes in Computer Science (LNCS) including references and figures.</li>
          <li>The format style files are available at <a className="underline text-sky-700" href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noreferrer">LNCS Authors Instructions Page</a>.</li>
          <li>Authors should consult Springer&lsquo;s authors&lsquo; guidelines and use their proceedings templates, either for LaTeX or for Word, for the preparation of their papers. Springer encourages authors to include their ORCIDs in their papers. In addition, the corresponding author of each paper, acting on behalf of all of the authors of that paper, must complete and sign a Consent-to-Publish form. The corresponding author signing the copyright form should match the corresponding author marked on the paper. Once the files have been sent to Springer, changes relating to the authorship of the papers cannot be made.</li>
          <li>The length of the initial submission should be <strong>at least 8 pages but not exceed 12 pages,</strong> presenting most of the components (e.g., main ideas, algorithms, experiments) of a full paper for shepherding. Paper format is consistent with the research track. Please refer to the CFP of research track for details on paper format.</li>
        </ul>
        <p><strong>Shepherd assignment.</strong> When a submission to this track is received, two shepherds from the ADC Shepherding Committee will be assigned to the paper. The shepherds will follow up with the corresponding author to provide guidance on improving the paper and to review the paper. Authors will receive email notifications of their delegated shepherds one week after the submission is received. Note that shepherds are not expected to be listed as a co-author of the paper. They act as mentors.</p>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Important Dates</h3>
        <p className="mb-4">23:59 AoE time</p>
        <p className="mb-4"><strong>Submission deadline.</strong> <strong>Continuous</strong> until 15 June, 2023. The shepherding process will be carried out at any time when a submission is received until 15 June, 2023. Authors considering this track are encouraged to submit their preliminary work as early as possible for timely feedback from the delegated mentors/shepherds.</p>
        <p className="mb-4"><strong>Author notification.</strong> It depends on the time taken by the shepherd in providing instructions and comments, as well as that taken by the authors in revising the work. The whole process takes at most two and a half months and the whole process will be coordinated by the PC Chair of the shepherd track.</p>
        <p className="mb-4">The procedure will loosely follow a two-round shepherding: (1) 1st round review: 3 weeks post-submission; 1st round revision: 6 weeks post-submission; (2) 2nd round review (if needed): 8 weeks post-submission; 2nd round revision: 10 weeks post-submission; final notification: 11 weeks post-submission.</p>
        <p><strong>Camera-ready deadline.</strong> 15 September, 2023. When preparing the camera-ready version, authors are required to include a “Shepherding Process” section to describe briefly what has been changed after each round of the shepherding.</p>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Submissions</h3>
        <ul className="list-disc list-inside space-y-3">
          <li>The submission of a paper should be regarded as an undertaking that, should the paper be accepted, at least one author will attend the conference in person to present the work.</li>
          <li>The submission page is: <a className="underline text-sky-700" href="https://cmt3.research.microsoft.com/ADC2023" target="_blank" rel="noreferrer">https://cmt3.research.microsoft.com/ADC2023</a></li>
        </ul>
      </article>
    </div>
  </Layout>);
}
