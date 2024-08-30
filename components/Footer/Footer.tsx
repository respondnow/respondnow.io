import React from 'react';
import Link from 'next/link';
import css from './Footer.module.scss';
import { BoundedContainer, ContainerFluid } from '@layouts';
import logo from '@public/respondNow.svg';
import Image from 'next/image';
import footerData from './Footer.data';

const Footer = () => {
  return (
    <ContainerFluid className={css.footerFluidCont}>
      <BoundedContainer className={css.footerCont}>
        <div className={css.companyDetCont}>
          <Link href="/">
            <Image src={logo} alt="Respond Now" height={30} />
          </Link>
          <p className="mb-4 mt-2 text-sm text-[#6B6D85]">Copyright © 2024 RespondNow Authors. All rights reserved</p>
          <p className="text-xs text-[#6B6D85]">
            The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux
            Foundation, please see our{' '}
            <Link href="https://www.linuxfoundation.org/trademark-usage/" className="text-[#7D28DE]">
              Trademark Usage page
            </Link>
            .
          </p>
        </div>
        <div className={css.linkContainer}>
          {footerData.map(row => (
            <div key={row.heading}>
              <h2>{row.heading}</h2>
              <ul
                className={row.heading != 'Join the Community' ? '' : 'flex flex-wrap gap-x-3 sm:max-w-xs md:max-w-sm'}
              >
                {row.links.map(link => (
                  <li key={link.text}>
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
                  href="https://github.com/respondnow/respond"
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
    </ContainerFluid>
  );
};

export default Footer;
