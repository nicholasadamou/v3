/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import * as React from 'react';

import {graphql} from 'gatsby';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faArrowUp, faBookOpen, faCodeBranch, faFileCode, faHeart, faStar, faBars} from '@fortawesome/free-solid-svg-icons';

import NavigationProvider from "providers/NavigationProvider";

import Hero from 'sections/Hero';
import Work from 'sections/Work';
import Projects from 'sections/Projects';
import Contact from 'sections/Contact';
import Footer from 'sections/Footer';

import Layout from 'components/Layout';
import ScrollToTopButton from 'components/ScrollToTopButton';

library.add(fab, faHeart, faStar, faCodeBranch, faArrowUp, faFileCode, faBookOpen, faBars);

const IndexPage = ({data}) => {
	console.log(data);

	const dust = data.dust.edges;
	const logos = data.logos.edges;
	const badges = data.badges.edges;

	return (
		<Layout>
				<NavigationProvider>
					<Hero dust={dust} />
				</NavigationProvider>
				<Work logos={logos} badges={badges} />
				<Projects />
				<Contact />
				<Footer />
				<ScrollToTopButton />
		</Layout>
	);
}

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
              width: 40
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
