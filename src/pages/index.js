/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import * as React from 'react';

import { graphql } from 'gatsby';

import { getImage } from 'gatsby-plugin-image';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUp,
  faCodeBranch,
  faHeart,
  faStar,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';

import PageWrapper from 'sass/PageWrapper';
import Container from 'sass/Container';

import AboutMe from 'sections/AboutMe/AboutMe';
import Education from 'sections/Education/Education';
import Work from 'sections/Work/Work';
import OpenSource from 'sections/OpenSource/OpenSource';
import Prototypes from 'sections/Prototypes/Prototypes';
import Contact from 'sections/Contact/Contact';

import Footer from 'sections/Footer/Footer';

import Layout from 'components/Layout/Layout';
import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTopButton';

library.add(fab, faHeart, faStar, faCodeBranch, faArrowUp, faFileCode);

const IndexPage = ({ data }) => (
  // console.log(data);
  <Layout>
    <PageWrapper>
      <Container>
        <AboutMe avatar={getImage(data.avatar)} />
        <hr />
        <Work logos={data.logos.edges} />
        <hr />
        {/* <Education logos={data.logos.edges} />
        <hr /> */}
        <OpenSource />
        <hr />
        <Prototypes />
        <hr />
        <Contact />
      </Container>
      <Footer avatar={data.avatar} />
      <ScrollToTopButton />
    </PageWrapper>
  </Layout>
);

export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatars/nicholas.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          quality: 90
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    logos: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              width: 50
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
