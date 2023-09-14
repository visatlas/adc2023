import Layout from '@/components/layout';
import SEO from '@/components/seo';

import Image from 'next/image';

export default function InvitationLetter() {
  return (
    <Layout>
      <SEO title="Invitation Letter" />
      <div className="px-5 md:px-8 lg:px-10">
        <h2 className="mt-10 md:mt-14 uppercase text-3xl font-bold text-orange-600 tracking-wide mb-8">Invitation Letter</h2>
        <article className="pb-10">
          For attendees outside Australia, after complete your registration, you can contact Dr. Hui Luo (<a className="underline" href="mailto:huil@uow.edu.au" target="_blank" rel="noreferrer">huil@uow.edu.au</a>) to request for an invitation letter (please provide your registration evidence) for your visa application.
        </article>
      </div>
    </Layout>
  );
}
