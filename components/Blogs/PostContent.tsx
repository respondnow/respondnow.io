import React from 'react';
import { BoundedContainer } from '@layouts';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkHtml from 'remark-html';
import { BlogPostProps } from '@lib/posts';

const PostContent = ({ body, frontmatter }: BlogPostProps) => {
  return (
    <BoundedContainer className="pt-10 pb-14">
      <article className="relative prose max-w-none text-[#525252] mt-4">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkHtml]}>
          {body}
        </ReactMarkdown>
      </article>
    </BoundedContainer>
  );
};

export default PostContent;
