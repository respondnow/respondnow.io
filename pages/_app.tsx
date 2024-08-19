import Navbar from '@/components/Navbar';
import TagScripts from '@/scripts/TagScripts';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TagScripts />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
