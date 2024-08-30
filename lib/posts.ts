import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export interface BlogPostProps {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    author: string;
    author_linkedin: string;
    author_image: string;
    author_email: string;
    tag: string;
    image: string;
    image_alt: string;
    summary: string;
  };
  body: string;
}

// Get all post slugs
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
    params: {
      slug: fileName.replace(/\.md$/, '')
    }
  }));
}

// Get post data by slug
export async function getPostData(slug: string): Promise<BlogPostProps> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse the markdown with gray-matter
  const { data: frontmatter, content: body } = matter(fileContents);

  // Combine the data with the slug
  return {
    slug,
    frontmatter: frontmatter as BlogPostProps['frontmatter'],
    body
  };
}
