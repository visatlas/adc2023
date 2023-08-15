import Layout from '@/components/layout';
import SEO from '@/components/seo';

import Image from 'next/image';

export default function KeynoteTalks() {

  return (
    <Layout>
      <SEO title="Keynote Talks" />
      <div className="px-5 md:px-8 lg:px-10">
        {/* <small className="mt-10 mb-2 block font-medium text-gray-500 tracking-wide">Program:</small>     */}
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Keynote Talks</h2>

        <article className="pb-16">

          <h3 className="font-bold text-2xl text-gray-800 mb-6">Large Language Models: Risks and Benefits</h3>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>
          <p className="px-0 md:px-7">Large Language Models have made extraordinary advances in recent times. ChatGPT is one of the fastest growing app of all time, with over 100 million users. On the back of its spectacular success, many voices have been forecasting doomsday outcomes whereby AI systems may subjugate humanity. This talk will give a high level overview of Large Language Models and present my thoughts on the potential benefits and likely risks of AI and what we should be doing about them.</p>
          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speaker</h3>
          <div className="flex w-[20em] sm:w-[25em] px-0 md:px-7">
            <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://i.giwebb.com/" target="_blank" rel="noreferrer">
              <Image src={`/images/committee/geoff-webb.jpg`} width={60} height={60} alt={``} />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gray-800 font-bold text-lg">Geoff Webb</span>
              <span className="text-gray-600 text-sm">Monash University</span>
            </div>
          </div>
          <p className="mt-4 px-0 md:px-7">Professor Geoff Webb is an eminent and highly-cited data scientist. He was editor in chief of the Data Mining and Knowledge Discovery journal, from 2005 to 2014. He has been Program Committee Chair of both ACM SIGKDD and IEEE ICDM, as well as General Chair of ICDM and member of the ACM SIGKDD Executive. He is a Technical Advisor to machine learning as a service startup BigML Inc and to recommender systems startup FROOMLE. He developed many of the key mechanisms of support-confidence association discovery in the 1980s. His OPUS search algorithm remains the state-of-the-art in rule search. He pioneered multiple research areas as diverse as black-box user modelling, interactive data analytics and statistically-sound pattern discovery. He has developed many useful machine learning algorithms that are widely deployed. His many awards include IEEE Fellow, the inaugural Eureka Prize for Excellence in Data Science (2017) and the Pacific-Asia Conference on Knowledge Discovery and Data Mining Distinguished Research Contributions Award (2022).</p>
        
        </article>
      </div>
    </Layout>
  );
}
