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

import Work from 'sections/Work';
import Contact from 'sections/Contact';
import Footer from 'sections/Footer';

import Layout from 'components/Layout';
import Dust from 'components/Dust';
import ScrollToTopButton from 'components/ScrollToTopButton';

library.add(fab, faHeart, faStar, faCodeBranch, faArrowUp, faFileCode);

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Dust dust={data.dust.edges} height="100vh">
		<h1>Hello World.</h1>
      </Dust>
      {/* <PageWrapper>
      <Container>
       <></>
      </Container>
      <Footer />
      <ScrollToTopButton />
    </PageWrapper> */}
    </Layout>
  );
};

export const query = graphql`
  query {
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
    badges: allFile(filter: { relativeDirectory: { eq: "badges" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              width: 36
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
    dust: allFile(filter: { relativeDirectory: { eq: "dust" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
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
