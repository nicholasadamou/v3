/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import * as React from 'react';

import {graphql} from 'gatsby';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faArrowUp, faBookOpen, faCodeBranch, faFileCode, faHeart, faStar, faBars} from '@fortawesome/free-solid-svg-icons';

import PageWrapper from 'sass/PageWrapper';

import Hero from 'sections/Hero';

import Layout from 'components/Layout';

library.add(fab, faHeart, faStar, faCodeBranch, faArrowUp, faFileCode, faBookOpen, faBars);

const IndexPage = ({data}) => {
	console.log(data);
	return (
		<Layout>
			<PageWrapper>
				<Hero dust={data.dust.edges}/>
			</PageWrapper>
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
