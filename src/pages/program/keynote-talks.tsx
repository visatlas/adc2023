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
        
          <div className="border-t-2 border-dotted mt-16 mb-8 bg-gray-400 mx-[-1em]"></div>
          <p className="text-orange-600 uppercase tracking-[0.2em] mb-2 font-semibold">KEYNOTE TALK</p>

          <h3 className="font-bold text-2xl text-gray-800 mb-6">Empowering Database Systems with Machine Learning</h3>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>
          <p className="px-0 md:px-7">The database community has actively explored how machine learning (ML) can be leveraged to address challenges in database systems (ML4DB) for the past several years. The talk will briefly cover several selected ML4DB tasks, and then focus on our perceptions on two topics. First, query plan is used as input in several ML4DB tasks, and most studies usually focus on one task and develop a new design to represent query plans along with a ML4DB framework. This talk will present a different approach to these tasks by abstracting the query plan representation as a common component for multiple ML4DB tasks. Second, learned indexes are proposed to learn a ML model to replace the classic indexes. This talk will present a different way of using ML for indexes, namely enhancing the classic indexes with ML, rather than replacing them.</p>
          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speaker</h3>
          <div className="flex w-[20em] sm:w-[25em] px-0 md:px-7">
            <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://personal.ntu.edu.sg/gaocong/" target="_blank" rel="noreferrer">
              <Image src={`/images/committee/gao-cong.jpg`} width={60} height={60} alt={``} />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gray-800 font-bold text-lg">Gao Cong</span>
              <span className="text-gray-600 text-sm">Nanyang Technological University</span>
            </div>
          </div>
          <p className="mt-4 px-0 md:px-7">Gao Cong is currently a Professor in the School of Computer Science and Engineering at Nanyang Technological University (NTU), and a co-director for Singtel Cognitive and Artificial Intelligence Lab for Enterprises@NTU. Before joining NTU, he was an Assistant professor at Aalborg University, Denmark. Before that, he worked as a researcher at Microsoft Research Asia, and as a postdoc at the University of Edinburgh. He received his Ph.D. in Computer Science from the National University of Singapore in 2004. His current research interests include geospatial+X data management, machine learning for databases, geospatial data mining, and recommendation systems. His work has been published in reputable journals (e.g., VLDB Journal, TODS, TKDE) and conferences (e.g., SIGMOD, VLDB, ICDE, KDD, WSDM, SIGIR, WWW). He received the best paper runner-up awards at the WSDM&rsquo;20 and WSDM&rsquo;22 conferences for two of his research papers. His citation in Google Scholar was over 16000 with H-index 67. He served as a PC co-chair for ICDE&rsquo;2022, the associate general chair of KDD&rsquo;21, a PC co-chair for E&amp;A track of VLDB 2014, and a PC vice-Chair for ICDE&rsquo;18. He is an associate editor for ACM Transactions on Database Systems (TODS) and the vice Chair of ACM KDD Singapore chapter.</p>

          <div className="border-t-2 border-dotted mt-16 mb-8 bg-gray-400 mx-[-1em]"></div>
          <p className="text-orange-600 uppercase tracking-[0.2em] mb-2 font-semibold">KEYNOTE TALK</p>

          <h3 className="font-bold text-2xl text-gray-800 mb-6">Coming Soon</h3>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>
          <p className="px-0 md:px-7">Coming Soon.</p>
          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speaker</h3>
          <div className="flex w-[20em] sm:w-[25em] px-0 md:px-7">
            <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://profiles.uts.edu.au/Ling.Chen" target="_blank" rel="noreferrer">
              <Image src={`/images/committee/ling-chen.jpg`} width={60} height={60} alt={``} />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gray-800 font-bold text-lg">Ling Chen</span>
              <span className="text-gray-600 text-sm">University of Technology Sydney</span>
            </div>
          </div>
          {/* <p className="mt-4 px-0 md:px-7">Coming Soon.</p> */}
      
        </article>
      </div>
    </Layout>
  );
}
