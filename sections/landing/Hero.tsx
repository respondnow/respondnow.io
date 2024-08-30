import React from 'react';
import { BoundedContainer, Container } from '@layouts';
import lottie from 'lottie-web';
import css from './Landing.module.scss';
import Link from 'next/link';

const Hero = (): React.ReactElement => {
  const animationContainer = React.useRef(null);

  React.useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./heroAnimation.json')
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <BoundedContainer className={css.heroContainer}>
      <Container className={css.heroTextContainer}>
        <h1 className={css.heroText}>The Open source Slack App for Managing Your Organisation&apos;s Incidents</h1>
        <h2 className={css.heroSubText}>Free. Open Source. All from Slack.</h2>
        <h3 className={css.heroDescription}>
          A simple and free solution to enable your operations teams and developers to create, manage and respond to
          your incidents directly from your slack workspace.
        </h3>
        <Link
          href="https://github.com/respondnow/respond"
          className={css.heroLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Get Started
        </Link>
      </Container>
      <div ref={animationContainer} className={css.heroGIFContainer} />
    </BoundedContainer>
  );
};

export default Hero;
