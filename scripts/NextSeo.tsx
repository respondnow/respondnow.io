import Head from 'next/head';
import { NextSeo } from 'next-seo';

interface BlogSEOProps {
  slug: string;
  seoImage: string;
  tag: string[];
}

const SEOKeywords = ({ blog }: { blog?: BlogSEOProps }) => {
  const keywords = ['respond', 'now', 'respond-now'];
  if (blog?.tag) {
    blog.tag.map(tag => keywords.push(tag));
  }

  return (
    <Head>
      <meta property="keywords" content={keywords.join(', ')} />
    </Head>
  );
};

const SEO = ({ blog, page }: { blog?: BlogSEOProps; page: string }) => {
  return (
    <>
      <SEOKeywords blog={blog} />
      <NextSeo
        title={blog ? page : `RespondNow`}
        description="The Open-Source Slack App for Managing Your Organization's Incidents"
        canonical={blog ? `https://respondnow.io/blog/${blog.slug}` : 'https://respondnow.io'}
        openGraph={{
          url: blog ? `https://respondnow.io/blog/${blog.slug}` : 'https://respondnow.io',
          title: 'RespondNow',
          description: "The Open-Source Slack App for Managing Your Organization's Incidents",
          siteName: 'RespondNow',
          images: [
            {
              url: blog ? blog.seoImage : 'https://respondnow.io/seo.png',
              width: 700,
              height: 350,
              alt: 'RespondNow'
            }
          ],
          site_name: 'RespondNow'
        }}
      />
    </>
  );
};

export default SEO;
