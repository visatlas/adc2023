import Layout from '@/components/layout';
import SEO from '@/components/seo';
import Image from 'next/image';

export default function Organisation() {
  return (<Layout>
    <SEO title="Organisation" />
    <div className="px-5 md:px-8 lg:px-10 w-full">
      <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 pt-10">Organisation</h2>
      <article className="pb-5">
        {committee.map((item) => (
          <div className="mt-6 mb-12" key={item.type}>
            <h3 className="font-bold text-xl text-gray-600 mb-6">{item.type}</h3>
            <ul className="flex gap-x-10 gap-y-5 mx-6 flex-wrap">
              {item.items.map((person) => (
                <li className="flex w-[20em] sm:w-[25em]" key={person.name}>
                  {person.image ? (
                    <div className="rounded-lg overflow-hidden mr-3 min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-gray-200">
                      <Image src={`/images/committee/${person.image}`}
                        width={300}
                        height={300}
                        alt={`${person.name} at ${person.affiliation}`}
                        className="w-[60px] h-[60px]"
                      // placeholder="blur"
                      />
                    </div>
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
  }[];
}[];

const committee: Committee = [
  {
    "type": "General Chair",
    "items": [
      { "name": "Xiaofang Zhou", "affiliation": "Hong Kong University of Science and Technology", "image": "xiaofang-zhou.jpg" },
      { "name": "Gill Dobbie", "affiliation": "University of Auckland", "image": "gill-dobbie.jpg" },
    ]
  },
  {
    "type": "Program Chair - Research Track",
    "items": [
      { "name": "Renata Borovica-Gajic", "affiliation": "University of Melbourne", "image": "renata-borovica-gajic.jpg" },
      { "name": "Zhifeng Bao", "affiliation": "RMIT", "image": "zhifeng-bao.jpg" },
    ]
  },
  {
    "type": "Program Chair - Encore Track", "items": [
      { "name": "Junhao Gan", "affiliation": "University of Melbourne", "image": "junhao-gan.jpeg" },
      { "name": "Shixun Huang", "affiliation": "RMIT", "image": "shixun-huang.jpeg" },
    ]
  },
  {
    "type": "Program Chair - Shepherding Track", "items": [
      { "name": "Ruihong Qiu", "affiliation": "University of Queensland", "image": "ruihong-qiu.png" },
    ]
  },
  {
    "type": "Publicity Chair", "items": [
      { "name": "Anh Dinh", "affiliation": "Deakin University", "image": "anh-dinh.jpeg" },
      { "name": "Kaiqi Zhao", "affiliation": "University of Auckland", "image": "kaiqi-zhao.png" },
    ]
  },
  {
    "type": "Proceedings Chair", "items": [
      { "name": "Farhana Choudhury", "affiliation": "University of Melbourne", "image": "farhana-choudhury.jpeg" },
      { "name": "Zhengyi Yang", "affiliation": "University of New South Wales", "image": "zhengyi-yang.jpeg" },
    ]
  },
  {
    "type": "Local Chair", "items": [
      { "name": "Jianzhong Qi", "affiliation": "University of Melbourne", "image": "jianzhong-qi.jpeg" },
      { "name": "Aamir Cheema", "affiliation": "Monash University", "image": "aamir-cheema.jpeg" },
      { "name": "Jianxin Li", "affiliation": "Deakin University", "image": "jianxin-li.jpg" },
    ]
  },
  {
    "type": "Sponsorship Chair", "items": [
      { "name": "Shazia Sadiq", "affiliation": "University of Queensland", "image": "shazia-sadiq.jpg" },
    ]
  },
  {
    "type": "Web Chair", "items": [
      { "name": "Yiyun Zhang", "affiliation": "University of Queensland", "image": "yiyun-zhang.jpg" },
    ]
  },
];
