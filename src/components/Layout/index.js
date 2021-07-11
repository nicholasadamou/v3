/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import 'carbon-components/scss/globals/scss/styles.scss';
import 'bulma/css/bulma.min.css';

import GlobalStyles from 'sass/GlobalStyles';

const favicon = (icon) =>
  `
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        ${icon}
      </text>
    </svg>
  `.trim();

const Layout = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const { title, description, author } = site.siteMetadata;

  return (
    <>
      <GlobalStyles />
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={title}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]}
      >
        <link rel="icon" href={`data:image/svg+xml,${favicon('👨🏼‍💻')}`} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {props.children}
    </>
  );
};

export default Layout;
