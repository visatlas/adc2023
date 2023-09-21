import Layout from '@/components/layout';
import SEO from '@/components/seo';

import committee from '@/data/pclist.json';

export default function ProgramCommittee() {
  return (<Layout>
    <SEO title="Program Committee" />
    <div className="px-5 md:px-8 lg:px-10 w-full">
      <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-10 md:mt-14">Program Committee</h2>
      <article className="pb-5">
        <ul className="flex gap-x-10 gap-y-5 flex-wrap mt-8 mb-12">
          {committee.map((person) => (
            <li className="flex w-[20em] sm:w-[28em]" key={person.name}>
              <div className="flex flex-col justify-center">
                <span className="text-gray-800 font-bold text-lg">{person.name}</span>
                <span className="text-gray-600 text-sm">{person.affiliation}</span>
              </div>
            </li>
          ))}
        </ul> 
      </article>
    </div>
  </Layout>);
}
