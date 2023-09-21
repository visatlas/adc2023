import Layout from '@/components/layout';
import SEO from '@/components/seo';
import Image from 'next/image';

export default function Organisation() {
  return (<Layout>
    <SEO title="Organisation" />
    <div className="px-5 md:px-8 lg:px-10 w-full">
      <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-10 md:mt-14">Organisation</h2>
      <article className="pb-5">
        {committee.map((item) => (
          <div className="mt-6 mb-12" key={item.type}>
            <h3 className="font-bold text-xl text-gray-600 mb-6">{item.type}</h3>
            <ul className="flex gap-x-10 gap-y-5 mx-6 flex-wrap">
              {item.items.map((person) => (
                <li className="flex w-[20em] sm:w-[25em]" key={person.name}>
                  {person.image ? (
                    <a className="rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200" href={person.url} target="_blank" rel="noreferrer">
                      <Image src={`/images/committee/${person.image}`}
                        width={300}
                        height={300}
                        alt={`${person.name} at ${person.affiliation}`}
                        className="w-[60px] h-[60px]"
                      // placeholder="blur"
                      />
                    </a>
                  ) : (
                    <div className="rounded-lg overflow-hidden mr-3">
                      <Image src={`/images/committee/default.png`}
                        width={60}
                        height={60}
                        alt={`${person.name} at ${person.affiliation}`}
                      // placeholder="blur"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center">
                    <span className="text-gray-800 font-bold text-lg">{person.name}</span>
                    <span className="text-gray-600 text-sm">{person.affiliation}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </div>
  </Layout>);
}

type Committee = {
  type: string;
  items: {
    name: string;
    affiliation: string;
    image: string | null;
    url?: string;
  }[];
}[];

const committee: Committee = [
  {
    "type": "General Chair",
    "items": [
      { "name": "Xiaofang Zhou", "affiliation": "Hong Kong University of Science and Technology", "image": "xiaofang-zhou.jpg", "url": "https://sites.google.com/view/xiaofang-zhou" },
      { "name": "Gill Dobbie", "affiliation": "University of Auckland", "image": "gill-dobbie.jpg", "url": "https://profiles.auckland.ac.nz/g-dobbie" },
    ]
  },
  {
    "type": "Program Chair - Research Track",
    "items": [
      { "name": "Renata Borovica-Gajic", "affiliation": "University of Melbourne", "image": "renata-borovica-gajic.jpg", "url": "http://renata.borovica-gajic.com" },
      { "name": "Zhifeng Bao", "affiliation": "RMIT", "image": "zhifeng-bao.jpg", "url": "https://baozhifeng.net" },
    ]
  },
  {
    "type": "Program Chair - Encore Track", "items": [
      { "name": "Junhao Gan", "affiliation": "University of Melbourne", "image": "junhao-gan.jpeg", "url": "https://sites.google.com/site/junhogan" },
      { "name": "Shixun Huang", "affiliation": "University of Wollongong", "image": "shixun-huang.jpeg", "url": "http://shixunh.io" },
    ]
  },
  {
    "type": "Program Chair - Shepherding Track", "items": [
      { "name": "Ruihong Qiu", "affiliation": "University of Queensland", "image": "ruihong-qiu.png", "url": "https://ruihongqiu.github.io" },
    ]
  },
  {
    "type": "PhD Workshop & Tutorial Chair", "items": [
      { "name": "Hui Luo", "affiliation": "University of Wollongong", "image": "hui-luo.png", "url": "https://scholars.uow.edu.au/hui-luo" },
    ]
  },
  {
    "type": "Publicity Chair", "items": [
      { "name": "Anh Dinh", "affiliation": "Deakin University", "image": "anh-dinh.jpeg", "url": "https://dinhtta.github.io" },
      { "name": "Kaiqi Zhao", "affiliation": "University of Auckland", "image": "kaiqi-zhao.png", "url": "https://kaiqi.blogs.auckland.ac.nz" },
    ]
  },
  {
    "type": "Proceedings Chair", "items": [
      { "name": "Farhana Choudhury", "affiliation": "University of Melbourne", "image": "farhana-choudhury.jpeg", "url": "https://sites.google.com/site/farhanamc" },
      { "name": "Zhengyi Yang", "affiliation": "University of New South Wales", "image": "zhengyi-yang.jpeg", "url": "http://www.zhengyi.one" },
    ]
  },
  {
    "type": "Local Chair", "items": [
      { "name": "Jianzhong Qi", "affiliation": "University of Melbourne", "image": "jianzhong-qi.jpeg", "url": "https://people.eng.unimelb.edu.au/jianzhongq" },
      { "name": "Aamir Cheema", "affiliation": "Monash University", "image": "aamir-cheema.jpeg", "url": "http://www.aamircheema.com" },
      { "name": "Jianxin Li", "affiliation": "Deakin University", "image": "jianxin-li.jpg", "url": "https://www.deakin.edu.au/about-deakin/people/jianxin-li" },
    ]
  },
  {
    "type": "Sponsorship Chair", "items": [
      { "name": "Shazia Sadiq", "affiliation": "University of Queensland", "image": "shazia-sadiq.jpg", "url": "https://eecs.uq.edu.au/profile/1844/shazia-sadiq" },
    ]
  },
  {
    "type": "Web Chair", "items": [
      { "name": "Yiyun Zhang", "affiliation": "University of Queensland", "image": "yiyun-zhang.jpg", "url": "https://www.yiyun.dev" },
    ]
  },
];
