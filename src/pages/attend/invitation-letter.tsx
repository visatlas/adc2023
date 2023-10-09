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
          <p className="mb-4">For attendees outside Australia, after complete your registration, you can contact Dr. Hui Luo (<a className="underline" href="mailto:huil@uow.edu.au" target="_blank" rel="noreferrer">huil@uow.edu.au</a>) to request for an invitation letter (please provide your registration evidence) for your visa application.</p>
          <p>Authors of accepted papers, after completing the registration, can contact Hui Luo (<a className="underline" href="mailto:huil@uow.edu.au" target="_blank" rel="noreferrer">huil@uow.edu.au</a>) to seek an invitation letter (if needed). Please attach your registration completion evidence to facilitate the process.</p>
        </article>
      </div>
    </Layout>
  );
}
