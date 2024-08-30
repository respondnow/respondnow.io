import Link from 'next/link';
import { BlogPostProps, getAllPostSlugs, getPostData } from '@lib/posts';
import { BoundedContainer } from '@layouts';
import css from './Blog.module.scss';
import Image from 'next/image';

type HomeProps = {
  posts: {
    slug: string;
    frontmatter: BlogPostProps['frontmatter'];
  }[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <BoundedContainer className={css.blogListMainContainer}>
      <h1 className="text-4xl font-bold">Blog Posts</h1>
      <div className="mt-8">
        <p className="text-[#6B6D85] font-semibold text-xl">Featured</p>
        <div className={css.blogList}>
          {posts.map(({ slug, frontmatter }) => (
            <Link key={slug} href={`/blogs/${slug}`} legacyBehavior>
              <div className={css.blogCard}>
                <Image
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  width={450}
                  height={270}
                  className="w-full h-auto"
                />
                <div className="flex items-center justify-between gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Image src={frontmatter.author_image} alt={frontmatter.author} width={20} height={20} />
                    <Link href={frontmatter.author_linkedin} target="_blank" rel="noopener noreferrer">
                      <p className="font-medium text-xs text-[#7D28DE]">{frontmatter.author}</p>
                    </Link>
                  </div>
                  <p className="font-medium text-xs text-[#525252]">{frontmatter.date}</p>
                </div>
                <div className="py-3">
                  <p className="text-sm font-semibold">{frontmatter.title}</p>
                  <p className="text-xs text-[#737373] mt-2">{frontmatter.summary}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-xs text-[#7D28DE]">Learn More</p>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.75 10H15.25"
                      stroke="#7D28DE"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 4.75L15.25 10L10 15.25"
                      stroke="#7D28DE"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BoundedContainer>
  );
}

export async function getStaticProps() {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async ({ params: { slug } }) => {
      const postData = await getPostData(slug);
      return { slug, frontmatter: postData.frontmatter };
    })
  );

  return {
    props: {
      posts
    }
  };
}
