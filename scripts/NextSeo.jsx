import Head from 'next/head';
import { NextSeo } from 'next-seo';

const keywords = ['respond', 'now', 'respond-now'];

const SEO = () => {
  return (
    <>
      <Head>
        <meta property="keywords" content={keywords} />
      </Head>
      <NextSeo title="RespondNow" description="The Open-Source Slack App for Managing Your Organization's Incidents" />
    </>
  );
};

export default SEO;
