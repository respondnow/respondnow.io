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
        linkTo: 'https://respondnow.github.io/respond',
        external: true
      },
      {
        text: 'Community',
        linkTo: 'https://app.slack.com/client/T08PSQ7BQ/C07K7TBH4P3',
        external: true
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
      // {
      //   svg: <LinkedInSVG />,
      //   linkTo: '#',
      //   external: true
      // },
      {
        svg: <SlackSVG />,
        linkTo: 'https://app.slack.com/client/T08PSQ7BQ/C07K7TBH4P3',
        external: true
      },
      {
        svg: <GithubFooterSVG />,
        linkTo: 'https://github.com/respondnow/respond',
        external: true
      }
      // {
      //   svg: <TwitterSVG />,
      //   linkTo: '#',
      //   external: true
      // },
      // {
      //   svg: <DevSVG />,
      //   linkTo: '#',
      //   external: true
      // }
    ]
  }
];

export default footerData;
