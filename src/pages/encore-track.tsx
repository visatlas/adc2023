import Layout from '@/components/layout';
import SEO from '@/components/seo';

export default function EncoreTrack() {
  return (<Layout>
    <SEO title="Encore Track" />
    <div className="px-5 md:px-8 lg:px-10">
      <small className="mt-10 mb-2 block font-medium text-gray-500 tracking-wide">Call for Papers:</small>
      <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Encore Track</h2>
      <article className="pb-10">
        <p className="mb-4">To keep up with the latest, important and relevant research in the community, we introduce the Encore Track to help disseminate interesting work in the field and foster interactions among researchers. In the Encore Track, researchers are welcome to submit an abstract, title and author information of their recent publications at prestigious venues for encore presentation at ADC. Specifically, submissions must have been published, in-press, or accepted for publication since June 1, 2022 in other well-known scholarly conferences (including but not limited to SIGMOD, VLDB, ICDE, EDBT, KDD and CIKM) and journals (including but not limited to IEEE TKDE, VLDB Journal, and ACM TODS).</p>
        <p>Authors of accepted submissions will be invited to present their work during the main conference via a poster session or a lightning talk session.</p>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Review Process</h3>
        <p>The acceptance decision upon an individual submission is based on both the quality and the topic of the submission and we hope the accepted submissions will bring additional diversity to the conference.</p>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Submissions</h3>
        <p>The review process will be carried out immediately after the submission. Please
          submit the information via this <a className="underline text-sky-700" href="https://forms.gle/cMymFUGNdjYmqYW4A" target="_blank" rel="noreferrer">Google Form</a>. Authors are required to submit a copy of the published paper in a PDF file-format, as well as the official URL to the publisher&lsquo;s copy. If the paper has only received the acceptance notice but not been officially published, please also submit evidence of the paper&lsquo;s acceptance (e.g., acceptance notification e-mail) in a PDF file-format.</p>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Important Dates</h3>
        <p className="mb-4">23:59 AoE time</p>
        <p>Submissions is <strong>continuous</strong> until Sep 1, 2023.</p>
        <p>Notification: within 14 days post-submission.</p>
        <h3 className="font-bold text-2xl text-orange-600 mt-10 mb-6">Enquiries</h3>
        <p>Contact us at <a className="underline text-sky-700" href="mailto:shixun.huang@rmit.edu.au" target="_blank" rel="noreferrer">shixun.huang@rmit.edu.au</a>.</p>
      </article>
    </div>
  </Layout>);
}
