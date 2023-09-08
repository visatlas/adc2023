import Layout from '@/components/layout';
import SEO from '@/components/seo';
import papers from '@/data/papers.json';

export default function AcceptedPapers() {
  // const researchPapers = papers.filter(paper => paper.track === 'research')[0].papers.sort((a, b) => a.title.localeCompare(b.title));
  const researchPapers = papers.filter(paper => paper.track === 'research')[0].papers;
  const encorePapers = papers.filter(paper => paper.track === 'encore')[0].papers;
  const shepherdingPapers = papers.filter(paper => paper.track === 'shepherding')[0].papers;

  return (
    <Layout>
      <SEO title="Accepted Papers" />
      <div className="px-5 md:px-8 lg:px-10">
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Accepted Papers</h2>
        <article className="pb-10">
          <div className="flex text-2xl text-gray-600 space-x-3 mb-6">
            <span>&#9654;</span>
            <div>
              <h3 className="font-bold tracking-wide">Research Papers</h3>
              <p className="text-sm text-gray-600">(*Primary Contact)</p>
            </div>
          </div>

          {researchPapers.map(paper => (
            <div key={paper.title} className="mb-4 flex flex-start space-x-4">
              <p className="font-semibold text-gray-800 w-5 text-right shrink-0">{paper.id}</p>
              <div className="">
                <h4 className="font-semibold text-gray-800">{paper.title}</h4>
                <p className="text-sm text-gray-600">{paper.authors}</p>
              </div>
            </div>
          ))}

          <div className="flex text-2xl text-gray-600 space-x-3 mb-6 mt-14">
            <span>&#9654;</span>
            <div>
              <h3 className="font-bold tracking-wide">Encore Papers</h3>
            </div>
          </div>
          {encorePapers.map((paper: any) => (
            <div key={paper.title} className="mb-4 flex flex-start space-x-4">
              <p className="font-semibold text-gray-800 w-5 text-right pt-6 shrink-0">{paper.id}</p>
              <div className="">
                {/* <small className="text-gray-800"><span className="font-medium">[{paper.venue}]</span>&nbsp;Submitted by {paper.submitAuthor} ({paper.affiliations})</small> */}
                <small className="text-gray-800"><span className="font-medium">[{paper.venue}]</span>&nbsp;Submitted by {paper.submitAuthor}</small>
                <h4 className="font-semibold text-gray-800">{paper.title}</h4>
                <p className="text-sm text-gray-600">{paper.authors}</p>
              </div>
            </div>
          ))}

          <div className="flex text-2xl text-gray-600 space-x-3 mb-6 mt-14">
            <span>&#9654;</span>
            <div>
              <h3 className="font-bold tracking-wide">Shepherding Papers</h3>
              <p className="text-sm text-gray-600">(*Primary Contact)</p>
            </div>
          </div>

          {shepherdingPapers.map(paper => (
            <div key={paper.title} className="mb-4 flex flex-start space-x-4">
              <p className="font-semibold text-gray-800 w-5 text-right shrink-0">{paper.id}</p>
              <div className="">
                <h4 className="font-semibold text-gray-800">{paper.title}</h4>
                <p className="text-sm text-gray-600">{paper.authors}</p>
              </div>
            </div>
          ))}

        </article>
      </div>
    </Layout>
  );
}
