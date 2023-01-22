import Head from 'next/head';
import { useRouter } from 'next/router';
import metadata from '@/data/metadata.json';

interface PageProps {
  title?: string;
  description?: string;
}

const SEO = ({ title, description }: PageProps) => {
  const router = useRouter();
  const pageSEO = {
    title: title || metadata.title,
    fullTitle: router.asPath === "/" ? metadata.longTitle : `${title} | ${metadata.title}`,
    description: description || metadata.description,
    thumbnail: metadata.thumbnail,
    pageUrl: `${metadata.url}${router.asPath || ""}`,
    author: {
      name: metadata.author.name,
    },
  };

  return (
    <Head>
      <title>{pageSEO.fullTitle}</title>
      <meta name="description" content={pageSEO.description} />
      <meta property="og:title" content={pageSEO.fullTitle} />
      <meta property="og:description" content={pageSEO.description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="2023 " />
      <meta property="og:image" content={pageSEO.thumbnail} />
      <meta property="og:url" content={pageSEO.pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSEO.fullTitle} />
      <meta name="twitter:description" content={pageSEO.description} />
      <meta name="twitter:creator" content={pageSEO.author.name} />
      <meta name="twitter:image" content={pageSEO.thumbnail} />
      <meta name="robots" content="follow, index" />
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="canonical" href={`https://adc2023.github.io${router.asPath}`} /> */}
    </Head>
  );
};

export default SEO;
