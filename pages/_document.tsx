import { Html, Head, Main, NextScript } from 'next/document';
import Seo from '@scripts/NextSeo';
import TagScripts from '@scripts/TagScripts';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Seo page="Index" />
      <TagScripts />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
