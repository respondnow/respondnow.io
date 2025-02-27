import React from 'react';
import Link from 'next/link';
import css from './Footer.module.scss';
import { BoundedContainer, ContainerFluid } from '@layouts';
import logo from '@public/respondNow.svg';
import Image from 'next/image';
import harnessLogo from '@public/harnessLogo.svg';
import footerData from './Footer.data';
import { HeartSVG } from '@components/SVG/FooterSVG';

const Footer = () => {
  return (
    <ContainerFluid className={css.footerFluidCont}>
      <BoundedContainer className={css.footerCont}>
        <div className={css.companyDetCont}>
          <Link href="/">
            <Image src={logo} alt="Respond Now" height={30} />
          </Link>
          <p className="mb-4 mt-2 text-sm text-[#6B6D85]">Copyright © 2024 Harness Inc. All rights reserved</p>
          <p className="text-xs text-[#6B6D85]">
            Harness Inc registered trademarks. For a list of trademarks of Harness Inc, please see our{' '}
            <Link href="https://www.harness.io/legal/trademark" className="text-[#7D28DE]">
              Trademark Usage page
            </Link>
            .
          </p>
        </div>
        <div className={css.linkContainer}>
          {footerData.map((row, index) => (
            <div key={`${row.heading}-${index}`}>
              <h2>{row.heading}</h2>
              <ul
                className={row.heading != 'Join the Community' ? '' : 'flex flex-wrap gap-x-3 sm:max-w-xs md:max-w-sm'}
              >
                {row.links.map((link, index) => (
                  <li key={`${link.text}-${index}`}>
                    <Link
                      href={link.linkTo}
                      target={link.external ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-1 justify-start"
                    >
                      {link.svg}
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              {row.heading != 'Join the Community' ? (
                ''
              ) : (
                <Link
                  target="_blank"
                  href="https://respondnow.github.io/respondnow/getting-started/deploy-rn-server-with-helm/"
                  rel="noopener noreferrer"
                  className={css.linkButton}
                >
                  Get started with RespondNow
                </Link>
              )}
            </div>
          ))}
        </div>
      </BoundedContainer>
      <ContainerFluid className="py-4 bg-[#1B2E49] flex justify-center items-center gap-1">
        <p className="text-xs text-white">Created with</p>
        <HeartSVG />
        <p className="text-xs text-white">by</p>
        <Link href="https://www.harness.io/" target="_blank" rel="noopener noreferrer">
          <Image src={harnessLogo} alt="Harness" height={16} width={75} />
        </Link>
      </ContainerFluid>
    </ContainerFluid>
  );
};

export default Footer;
