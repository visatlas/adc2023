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
        <article className="pb-16">

 
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Towards Data-centric Graph Machine Learning</h3>
          <p className="text-sm mb-6">Wed 1 Nov 2023 10:30 AEDT (UTC+11)</p>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>
          <p className="px-0 md:px-7">Graph-structured data, constituted by discrete nodes connected by independent edges within a non-Euclidean space, serves as the foundational data type for depicting and capturing complex interdependencies among massive diverse entities in the real world. In the context of Data-centric AI, this tutorial will provide an introduction of the recent advances in Data-centric Graph Machine Learning (DC-GML). Concretely, this tutorial will cover the systematic framework of DC-GML that encompasses all stages of the graph data lifecycle, including graph data collection, exploration, improvement, exploitation, and maintenance. Three critical graph-centric questions will be answered covering: (1) how to enhance graph data availability and quality; (2) how to learn from graph data with limited-availability and low-quality; (3) how to build graph MLOps systems from the graph data-centric view. Lastly, this tutorial will offer a forward-looking outlook to navigate future advancements and applications of the DC-GML domain.</p>
          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speakers</h3>
          <div className="px-0 md:px-7 flex gap-x-10 gap-y-5 flex-wrap">
            <div className="flex w-[20em] sm:w-[25em]">
              <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://shiruipan.github.io/" target="_blank" rel="noreferrer">
                <Image src={`/images/committee/shirui-pan.jpg`} width={60} height={60} alt={``} />
              </a>
              <div className="flex flex-col justify-center">
                <span className="text-gray-800 font-bold text-lg">Shirui Pan</span>
                <span className="text-gray-600 text-sm">Griffith University</span>
              </div>
            </div>
            <div className="flex w-[20em] sm:w-[25em]">
              <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://shiruipan.github.io/authors/xin-zheng/" target="_blank" rel="noreferrer">
                <Image src={`/images/committee/xin-zheng.jpg`} width={60} height={60} alt={``} />
              </a>
              <div className="flex flex-col justify-center">
                <span className="text-gray-800 font-bold text-lg">Xin Zheng</span>
                <span className="text-gray-600 text-sm">Monash University</span>
              </div>
            </div>
          </div>
          <p className="mt-4 px-0 md:px-7">Shirui Pan is a Professor and an ARC Future Fellow with the School of Information and Communication Technology, Griffith University, Australia. He received his Ph.D degree in computer science from University of Technology Sydney (UTS), Australia. He is a Senior Member of IEEE and ACM, and a Fellow of Queensland Academy of Arts and Sciences (FQA). Shirui&rsquo;s research focuses on artificial intelligence, with a focus on graph machine learning. His research has been published in top conferences and journals including NeurIPS, ICML, KDD, TPAMI, TNNLS, and TKDE. His research received the 2024 IEEE CIS TNNLS Outstanding Paper Award and the IEEE ICDM Best Student Paper Award.</p>
          <p className="mt-4 px-0 md:px-7">Xin Zheng is a final year Ph.D. student at Monash University, Australia. She received her B.S degree (2017) and Master degree (2020) both from Dalian University of Technology, China. Her research interests mainly on the study of automated graph machine learning operations (MLOps) workflow, specifically within the automated GNN design and graph data-centric learning. She has published papers on top-tier journals and conference papers, such as IJCV, PR, ICDM, WWW, MM.</p>

          <div className="border-t-2 border-dotted mt-16 mb-8 bg-gray-400 mx-[-1em]"></div>
          <p className="text-orange-600 uppercase tracking-[0.2em] mb-2 font-semibold">TUTORIAL</p>
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Detect Label Errors in Datasets</h3>
          <p className="text-sm mb-6">Wed 1 Nov 2023 13:00 AEDT (UTC+11)</p>
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
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Data-centric Computer Vision: Problems, Good Practices and Preliminary Solutions</h3>
          <p className="text-sm mb-6">Wed 1 Nov 2023 15:30 AEDT (UTC+11)</p>
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

          <div className="border-t-2 border-dotted mt-16 mb-8 bg-gray-400 mx-[-1em]"></div>
          <p className="text-orange-600 uppercase tracking-[0.2em] mb-2 font-semibold">TUTORIAL</p>
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Towards Trustworthy Data Markets: Recent Advances and Open Problems</h3>
          <p className="text-sm mb-6">Thu 2 Nov 2023 10:30 AEDT (UTC+11)</p>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>
          <p className="px-0 md:px-7">Data is the new oil. The value of data is rapidly increasing, with companies like Google and Facebook surpassing traditional oil companies in market capitalization and ranking on the Fortune 500 list. As the data science community explores ways to determine, transfer, and allocate the value of data, new technical challenges arise when considering the economic constraints in the data science pipeline, including data collection, cleaning, sharing, and analysis. One of the biggest hurdles in data markets is exchanging sensitive data related to individuals, such as social networks, spatiotemporal trajectories, and healthcare information. In this tutorial, I will discuss recent studies on creating a trustworthy data market that enables private, secure, and fair data trading. We will also examine areas for further research and opportunities to improve the current state of the data market.</p>
          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speaker</h3>
          <div className="px-0 md:px-7 flex gap-x-10 gap-y-5 flex-wrap">
            <div className="flex w-[20em] sm:w-[25em]">
              <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200 flex justify-center" href="https://yangcao88.github.io/" target="_blank" rel="noreferrer">
                <Image src={`/images/committee/yang-cao.jpg`} width={44.63} height={60} alt={``} />
              </a>
              <div className="flex flex-col justify-center">
                <span className="text-gray-800 font-bold text-lg">Yang Cao</span>
                <span className="text-gray-600 text-sm">Hokkaido University</span>
              </div>
            </div>
          </div>
          <p className="mt-4 px-0 md:px-7">Yang Cao is an Associate Professor at Hokkaido University. He earned his Ph.D. in Informatics from Kyoto University in 2017. His research areas include security and privacy, data markets, data management, and trustworthy machine learning. His work has been published in esteemed conferences and journals such as VLDB, SIGMOD, ICDE, KDD, AAAI, and USENIX Security. Three of his papers were finalists for best papers in ICDE 2017, ICME 2020, and BigData 2022. He has received several awards, including the IEEE Computer Society Japan Chapter Young Author Award in 2019 and the Database Society of Japan Kambayashi Young Researcher Award in 2021. His research projects have been supported by various organizations, including JSPS, JST, MSRA, KDDI, LINE, and WeBank.</p>

          <div className="border-t-2 border-dotted mt-16 mb-8 bg-gray-400 mx-[-1em]"></div>
          <p className="text-orange-600 uppercase tracking-[0.2em] mb-2 font-semibold">TUTORIAL</p>
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Privacy Challenges in Graph Neural Networks in MLaaS</h3>
          <p className="text-sm mb-6">Thu 2 Nov 2023 13:00 AEDT (UTC+11)</p>
          <h3 className="font-bold text-xl text-gray-600 mb-4">&#9654;&nbsp;&nbsp;Abstract</h3>
          <p className="px-0 md:px-7">Graph Neural Networks (GNNs) have established themselves as influential graph learning tools with applications spanning from common utilities such as recommendation systems and advanced domains like drug discovery. As the adoption of GNNs in data-sensitive areas increases, their privacy considerations have garnered more focus. Recent research indicates that GNN models might be susceptible to privacy risks, emphasising the need to ensure the privacy of sensitive data, including model parameters and graph information. Two primary challenges in GNN privacy are: (1) the protection of diverse objectives like nodes, edges, graphs, and models, each with its unique requirements; and (2) the delicate balance between privacy and model utilities. In this tutorial, we aim to offer a comprehensive overview of existing GNN privacy methodologies and to shed light on unresolved challenges and emerging trends.</p>
          <h3 className="mt-7 font-bold text-xl text-gray-600 mb-5">&#9654;&nbsp;&nbsp;Speakers</h3>
          <div className="px-0 md:px-7 flex gap-x-10 gap-y-5 flex-wrap">
            <div className="flex w-[20em] sm:w-[25em]">
              <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://shiruipan.github.io/authors/bang-wu/" target="_blank" rel="noreferrer">
                <Image src={`/images/committee/bang-wu.jpg`} width={60} height={60} alt={``} />
              </a>
              <div className="flex flex-col justify-center">
                <span className="text-gray-800 font-bold text-lg">Bang Wu</span>
                <span className="text-gray-600 text-sm">CSIRO - Data61</span>
              </div>
            </div>
            <div className="flex w-[20em] sm:w-[25em]">
              <a className="border rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href="https://shiruipan.github.io/authors/he-zhang/" target="_blank" rel="noreferrer">
                <Image src={`/images/committee/he-zhang.jpg`} width={60} height={60} alt={``} />
              </a>
              <div className="flex flex-col justify-center">
                <span className="text-gray-800 font-bold text-lg">He Zhang</span>
                <span className="text-gray-600 text-sm">Monash University</span>
              </div>
            </div>
          </div>
          <p className="mt-4 px-0 md:px-7">Bang Wu currently holds CSIRO Early Research Career (CERC) Postdoctoral Fellowship at CSIRO&rsquo;s DATA61, Australia. His PhD thesis is mainly on securing graph neural networks in machine learning as a service. He has authored research papers featured in top-tier conferences and journals spanning multiple domains, including ICDM, ICML, AsiaCCS, TIFS, and TDSC. His research interests include trustworthy graph-based machine learning, trustworthy machine learning on multimodal systems, and various facets of security and privacy in machine learning across different domains.</p>
          <p className="mt-4 px-0 md:px-7">He Zhang is a final year Ph.D. candidate at the Faculty of Information Technology, Monash University, Australia. He has a profound interest in GNNs and the development of trustworthy AI systems. His research in trustworthy GNNs has led to several academic publications in top conferences like ICML and CIKM, as well as top journals like IEEE TKDE. Currently, He Zhang is exploring the navigation in multiple objectives (e.g., privacy, fairness, and utility) with the aim of comprehensively building trustworthy GNNs.</p>


        </article>
      </div>
    </Layout>
  );
}
