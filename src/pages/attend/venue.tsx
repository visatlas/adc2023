import Layout from '@/components/layout';
import SEO from '@/components/seo';

import Image from 'next/image';

export default function Venue() {
  return (
    <Layout>
      <SEO title="Venue" />
      <div className="px-5 md:px-8 lg:px-10">
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Conference Venue</h2>
        <article className="pb-10">
          <p className="mb-1 font-semibold text-xl leading-8">Level 7, Manhari Room<br/>Melbourne Connect</p>
          <p className="mb-8">700 Swanston St, Carlton, VIC 3053, Australia</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.9576404262866!2d144.9627901421517!3d-37.800516735414845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64354a5744ae3%3A0xddc00c0dca7ffa97!2sMelbourne%20Connect!5e0!3m2!1sen!2sau!4v1696921927056!5m2!1sen!2sau" height="450" className="border-0 bg-gray-200 w-full" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </article>
      </div>
    </Layout>
  );
}
