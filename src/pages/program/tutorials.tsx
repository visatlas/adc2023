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
          <h3 className="font-bold text-2xl text-gray-800 mb-6">Detect Label Errors in Datasets</h3>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>
          <p className="px-0 md:px-7">With the rise of large AI models, data assets have gained increasing importance. Understanding how to identify and correct label errors in our datasets is crucial. This is primarily because label errors are pervasive in the era of big data, and rectifying them can significantly enhance our knowledge. Moreover, large AI models are susceptible to overfitting label errors, which hinders their ability to generalize effectively unless label noise is adequately addressed. In this tutorial, we will present typical approaches to handle label noise, such as extracting confident/non-confident examples (indicating likely correct/incorrect labels) using deep network properties and intuitions. Additionally, we will explore methods that focus on directly modelling the label noise, providing theoretical guarantees. By illustrating the intuitions behind state-of-the-art techniques, this tutorial aims to equip researchers and practitioners with valuable insights into effectively managing label noise in datasets.</p>
          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speaker</h3>
          <div className="flex w-[20em] sm:w-[25em] px-0 md:px-7">
            <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://tongliang-liu.github.io/" target="_blank" rel="noreferrer">
              <Image src={`/images/committee/tongliang-liu.jpg`} width={60} height={60} alt={``} />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gray-800 font-bold text-lg">Tongliang Liu</span>
              <span className="text-gray-600 text-sm">University of Sydney</span>
            </div>
          </div>
          <p className="mt-4 px-0 md:px-7">Tongliang Liu is the Director of Sydney AI Centre at the University of Sydney. He is broadly interested in the fields of trustworthy machine learning and its interdisciplinary applications, with a particular emphasis on learning with noisy labels, adversarial learning, transfer learning, unsupervised learning, and statistical deep learning theory. He has authored and co-authored more than 200 research articles including ICML, NeurIPS, ICLR, CVPR, AAAI, IJCAI, JMLR, and TPAMI. His monograph on machine learning with noisy labels will be published by MIT Press. He is/was a (senior-) meta reviewer for many conferences, such as ICML, NeurIPS, ICLR, UAI, AAAI, IJCAI, and KDD, and was a notable AC for ICLR. He is an Associate Editor of TMLR and is on the Editorial Boards of JMLR and MLJ. He is a recipient of the AI&rsquo;s 10 to Watch Award from IEEE in 2023, the Future Fellowship Award from Australian Research Council (ARC) in 2022, and the Discovery Early Career Researcher Award (DECRA) from ARC in 2018.</p>


          <div className="border-t-2 border-dotted mt-16 mb-8 bg-gray-400 mx-[-1em]"></div>
          <p className="text-orange-600 uppercase tracking-[0.2em] mb-2 font-semibold">TUTORIAL</p>
          
          <h3 className="font-bold text-2xl text-gray-800 mb-6">Data-centric Computer Vision: Problems, Good Practices and Preliminary Solutions</h3>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>
          <p className="px-0 md:px-7">As the demand for data-driven decision-making and artificial intelligence applications continues to rise, the importance of data cannot be understated. This tutorial will provide a comprehensive overview of the key principles, good practices, and challenges associated with data-centric computer vision problems. On the one hand, this tutorial gives a few examples of data properties, such as image-text alignment strength, test data difficulty and training data quality. On the other hand, we will discuss collecting, cleaning, organizing, and validating data to improve its reliability and relevance for specific applications. Through two representative cases, one in domain generalization and one in medical imaging data, this tutorial will demonstrate how to curate high-quality and useful datasets for future research.</p>
          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speakers</h3>

          <div className="px-0 md:px-7 flex gap-x-10 gap-y-5 flex-wrap">
          <div className="flex w-[20em] sm:w-[25em]">
            <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://sites.google.com/view/xinyus-homepage/Home" target="_blank" rel="noreferrer">
              <Image src={`/images/committee/xin-yu.png`} width={60} height={60} alt={``} />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gray-800 font-bold text-lg">Xin Yu</span>
              <span className="text-gray-600 text-sm">University of Queensland</span>
            </div>
          </div>

          <div className="flex w-[20em] sm:w-[25em]">
              <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://zheng-lab.cecs.anu.edu.au/" target="_blank" rel="noreferrer">
              <Image src={`/images/committee/liang-zheng.jpg`} width={60} height={60} alt={``} />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gray-800 font-bold text-lg">Liang Zheng</span>
              <span className="text-gray-600 text-sm">Australian National University</span>
            </div>
          </div>
          <div className="flex w-[20em] sm:w-[25em]">
              <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://scholar.google.com/citations?user=OfTXHvsAAAAJ&hl=en" target="_blank" rel="noreferrer">
              <Image src={`/images/committee/zijian-wang.png`} width={60} height={60} alt={``} />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gray-800 font-bold text-lg">Zijian Wang</span>
              <span className="text-gray-600 text-sm">University of Queensland</span>
            </div>
          </div>

          </div>
          <p className="mt-4 px-0 md:px-7">Dr Xin Yu is a Senior Lecturer at the University of Queensland (UQ) and is an ARC DECRA fellow. Previously, he was a research fellow at the Australian National University (ANU). He received PhD degrees from Tsinghua University and the Australian National University, respectively. His research interests cover a wide range of topics in Computer Vision and Machine Learning. He has published more than 70 papers on top-tier conference papers and journals, such as CVPR, ECCV, NeurIPS, ICLR, TPAMI, and IJCV. He also received Best Paper Honorable Mention Award in WACV 2020, and his paper was nominated for the Best Paper Award in CVPR 2020. He is a recipient of Google Research Scholar Award in 2021. He also won several Challenge championships in the workshops of CVPR, ACCV, etc.</p>
          <p className="mt-4 px-0 md:px-7">Dr Liang Zheng is a Senior Lecturer and was an ARC DECRA Fellow in the Australian National University. He is best known for his contributions in object re-identification, where he and his collaborators designed widely used datasets and algorithms such as Market-1501 (ICCV 2015), part-based convolutional baseline (ECCV 2018), random erasing (AAAI 2020) and joint detection and embedding (ECCV 2020). His recent research interest is data-centric computer vision, aiming at analysing and improving data rather than models themselves. He is a leading organizer of the Vision Datasets Understanding workshop series and the DataCV challenge at CVPR and serves as an Area Chair for leading conferences such as CVPR, ICCV, ECCV and NeurIPS. He received the Outstanding Young Author (Paper) Award from IEEE Transactions on Circuits and Systems for Video Technology and was named one of AI&rsquo;s 10 to Watch by IEEE Intelligent Systems and Australia&rsquo;s Early Achievers by The Australian. He received his B.S degree (2010) and Ph.D degree (2015) both from Tsinghua University, China.</p>
          <p className="mt-4 px-0 md:px-7">Zijian Wang is a Postdoctoral Research Fellow at the University of Queensland (UQ). His PhD thesis is mainly on domain adaptation and generalization in computer vision. He has published papers on top-tier conference papers and journals, such as ICCV, ICML, ICLR, MM, and TPAMI. Zijian has also been widely engaged in a number of cross-disciplinary research projects, spanning civil engineering and chemical engineering.</p>
        </article>
      </div>
    </Layout>
  );
}
