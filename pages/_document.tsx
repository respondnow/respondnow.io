import { Html, Head, Main, NextScript } from 'next/document';
import Seo from '@scripts/NextSeo';
import TagScripts from '@scripts/TagScripts';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Seo />
      <TagScripts />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
