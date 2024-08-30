import React from 'react';
import { DevSVG, GithubFooterSVG, LinkedInSVG, SlackSVG, TwitterSVG } from '@components/SVG/FooterSVG';

interface FooterDataType {
  heading: string;
  links: {
    svg?: React.ReactNode;
    text?: string;
    linkTo: string;
    external?: boolean;
  }[];
}

const footerData: FooterDataType[] = [
  {
    heading: 'Site map',
    links: [
      {
        text: 'Documentation',
        linkTo: '/documentation'
      },
      {
        text: 'Community',
        linkTo: '/community'
      },
      {
        text: 'Blogs',
        linkTo: '/blogs'
      }
    ]
  },
  {
    heading: 'Join the Community',
    links: [
      {
        svg: <LinkedInSVG />,
        linkTo: '#',
        external: true
      },
      {
        svg: <SlackSVG />,
        linkTo: '#',
        external: true
      },
      {
        svg: <GithubFooterSVG />,
        linkTo: '#',
        external: true
      },
      {
        svg: <TwitterSVG />,
        linkTo: '#',
        external: true
      },
      {
        svg: <DevSVG />,
        linkTo: '#',
        external: true
      }
    ]
  }
];

export default footerData;
