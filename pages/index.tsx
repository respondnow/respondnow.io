import SEO from '@scripts/NextSeo';
import Hero from '@sections/landing/Hero';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <>
      <SEO page="Home" />
      <Hero />
    </>
  );
}
