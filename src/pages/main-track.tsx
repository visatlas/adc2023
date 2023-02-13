import Layout from '@/components/layout';
import SEO from '@/components/seo';

export default function MainTrack() {
  return (<Layout>
    <SEO title="Main Track" />
    <div className="px-5">
      <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 pt-10">Main Track</h2>
      <article className="pb-5">
        Coming Soon.
      </article>
    </div>
  </Layout>);
}
