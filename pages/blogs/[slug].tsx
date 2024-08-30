import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostSlugs, getPostData, BlogPostProps } from '@lib/posts';
import PostContent from '@components/Blogs/PostContent';
import PostHero from '@components/Blogs/PostHero';
import SEO from '@scripts/NextSeo';

export default function BlogPost({ postData }: { postData: BlogPostProps }) {
  return (
    <>
      <SEO />
      <PostHero frontmatter={postData.frontmatter} />
      <PostContent {...postData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      postData
    }
  };
};
