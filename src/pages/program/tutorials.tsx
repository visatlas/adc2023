import Layout from '@/components/layout';
import SEO from '@/components/seo';

import Image from 'next/image';

export default function Tutorials() {

  return (
    <Layout>
      <SEO title="Tutorials" />
      <div className="px-5 md:px-8 lg:px-10">
        {/* <small className="mt-10 mb-2 block font-medium text-gray-500 tracking-wide">Program:</small>     */}
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Tutorials</h2>
        <article className="pb-10">
          <h3 className="font-bold text-2xl text-gray-700 mb-6">Detect Label Errors in Datasets</h3>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>

          <p className="px-0 md:px-7">With the rise of large AI models, data assets have gained increasing importance. Understanding how to identify and correct label errors in our datasets is crucial. This is primarily because label errors are pervasive in the era of big data, and rectifying them can significantly enhance our knowledge. Moreover, large AI models are susceptible to overfitting label errors, which hinders their ability to generalize effectively unless label noise is adequately addressed. In this tutorial, we will present typical approaches to handle label noise, such as extracting confident/non-confident examples (indicating likely correct/incorrect labels) using deep network properties and intuitions. Additionally, we will explore methods that focus on directly modelling the label noise, providing theoretical guarantees. By illustrating the intuitions behind state-of-the-art techniques, this tutorial aims to equip researchers and practitioners with valuable insights into effectively managing label noise in datasets.</p>


          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speaker</h3>

          <div className="flex w-[20em] sm:w-[25em] px-0 md:px-7">
            <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://tongliang-liu.github.io/" target="_blank" rel="noreferrer">
              <Image src={`/images/committee/tongliang-liu.jpg`}
                width={60}
                height={60}
                alt={``}
              // placeholder="blur"
              />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gray-800 font-bold text-lg">Tongliang Liu</span>
              <span className="text-gray-600 text-sm">University of Sydney</span>
            </div>
          </div>

          <p className="mt-4 px-0 md:px-7">
            Tongliang Liu is the Director of Sydney AI Centre at the University of Sydney. He is broadly interested in the fields of trustworthy machine learning and its interdisciplinary applications, with a particular emphasis on learning with noisy labels, adversarial learning, transfer learning, unsupervised learning, and statistical deep learning theory. He has authored and co-authored more than 200 research articles including ICML, NeurIPS, ICLR, CVPR, AAAI, IJCAI, JMLR, and TPAMI. His monograph on machine learning with noisy labels will be published by MIT Press. He is/was a (senior-) meta reviewer for many conferences, such as ICML, NeurIPS, ICLR, UAI, AAAI, IJCAI, and KDD, and was a notable AC for ICLR. He is an Associate Editor of TMLR and is on the Editorial Boards of JMLR and MLJ. He is a recipient of the AI&rsquo;s 10 to Watch Award from IEEE in 2023, the Future Fellowship Award from Australian Research Council (ARC) in 2022, and the Discovery Early Career Researcher Award (DECRA) from ARC in 2018.
          </p>
        </article>
      </div>
    </Layout>
  );
}
