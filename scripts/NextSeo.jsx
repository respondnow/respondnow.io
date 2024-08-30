import Head from 'next/head';
import { NextSeo } from 'next-seo';

const keywords = ['respond', 'now', 'respond-now'];

const SEO = () => {
  return (
    <>
      <Head>
        <meta property="keywords" content={keywords} />
      </Head>
      <NextSeo
        title="RespondNow"
        description="The Open-Source Slack App for Managing Your Organization's Incidents"
        canonical="https://respondnow.io"
        openGraph={{
          url: ['https://respondnow.io'],
          title: ['RespondNow'],
          description: ["The Open-Source Slack App for Managing Your Organization's Incidents"],
          images: [
            {
              url: ['https://respondnow.io/seo.png'],
              width: '',
              height: '',
              alt: ''
            }
          ],
          site_name: 'RespondNow'
        }}
      />
    </>
  );
};

export default SEO;
