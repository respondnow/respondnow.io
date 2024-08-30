import React from 'react';
import { BoundedContainer, Container, ContainerFluid } from '@layouts';
import logo from '@public/respondNow.svg';
import menu from '@public/menu.svg';
import Image from 'next/image';
import css from './Navbar.module.scss';
import Link from 'next/link';
import { GithubFooterSVG, StarSVG } from '../SVG/FooterSVG';

const NavLink = ({ href, text, isExternal = false }: { href: string; text: string; isExternal?: boolean }) => {
  return (
    <Link href={href} target={isExternal ? '_blank' : '_self'} className={css.navLink}>
      {text}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [gitHub, setGitHub] = React.useState({
    stars: ''
  });

  React.useEffect(() => {
    (async () => {
      const url = 'https://api.github.com/repos/respondnow/respond';
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          setGitHub({
            stars: data.stargazers_count
          });
        });
    })();
  }, []);

  const GitHubStars = ({ count, href }: { count: string; href: string }) => {
    return (
      <div className="flex items-center">
        <span className="inline-block scale-[0.70] mb-[1px]">
          <GithubFooterSVG />
        </span>
        <Link href={href} target="_blank" className="flex items-center gap-1">
          <div className="flex items-center bg-white border border-[rgba(217, 218, 229, 1)] rounded-md">
            <div className="flex items-center text-xs gap-1 px-2 py-1">
              <StarSVG />
              <p className="text-[#00041882]">Star</p>
            </div>
            <div className="px-2 border-l text-xs font-semibold text-[#00041882`]">
              {count ? (parseInt(count) > 999 ? (parseInt(count) / 1000).toFixed(1) + 'k' : count) : '0'}
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <ContainerFluid>
      <BoundedContainer className={css.navbarContainer}>
        <div className="flex items-center justify-start gap-4">
          <Link href="/">
            <Image src={logo} alt="Respond Now" height={20} />
          </Link>
          <GitHubStars count={gitHub.stars} href="https://github.com/respondnow/respond" />
        </div>
        <Container className={css.navLinkContainer}>
          <NavLink href="https://respondnow.github.io/respondnow" text="Documentation" isExternal={true} />
          <NavLink href="https://app.slack.com/client/T08PSQ7BQ/C07K7TBH4P3" text="Community" isExternal={true} />
          <NavLink href="/blogs" text="Blogs" />
        </Container>
        <Image
          src={menu}
          alt="menu"
          className={css.mobileMenuIcon}
          height={20}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </BoundedContainer>
      {isMobileMenuOpen && (
        <ContainerFluid className={css.mobileNavLinkContainerFluid}>
          <BoundedContainer className={css.mobileNavLinkContainer}>
            <NavLink href="https://respondnow.github.io/respondnow" text="Documentation" isExternal={true} />
            <NavLink href="https://app.slack.com/client/T08PSQ7BQ/C07K7TBH4P3" text="Community" isExternal={true} />
            <NavLink href="/blogs" text="Blogs" />
          </BoundedContainer>
        </ContainerFluid>
      )}
    </ContainerFluid>
  );
};

export default Navbar;
