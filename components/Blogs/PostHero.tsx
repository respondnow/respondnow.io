import React from 'react';
import { BlogPostProps } from '@lib/posts';
import { BoundedContainer } from '@layouts';
import Link from 'next/link';
import Image from 'next/image';

const PostHero = ({ frontmatter }: Pick<BlogPostProps, 'frontmatter'>) => {
  return (
    <BoundedContainer className="pt-14">
      <Link href="/blogs">
        <div className="text-xs font-medium text-hint flex items-center gap-1">
          <span className="leading-none text-[#22222a]">&lt;</span>
          <span className="leading-none text-[#22222a]">Blog Posts</span>
        </div>
      </Link>
      <Image src={frontmatter.image} alt={frontmatter.title} width={500} height={250} className="w-full h-auto mt-8" />
      <div className="flex items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-2">
          <Image src={frontmatter.author_image} alt={frontmatter.author} width={30} height={30} />
          <Link href={frontmatter.author_linkedin} target="_blank" rel="noopener noreferrer">
            <p className="font-medium text-sm md:text-sm text-[#7D28DE]">{frontmatter.author}</p>
          </Link>
        </div>
        <p className="font-medium text-xs md:text-sm text-[#525252]">{frontmatter.date}</p>
      </div>
    </BoundedContainer>
  );
};

export default PostHero;
