/* eslint-disable import/no-unresolved */
import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { getImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

import Article from 'components/Article/Article';

import { device, until } from 'utilities/mixins';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  text-align: left;

  overflow: hidden;

  margin: auto 10px 20px;

  ${until(
    '1200px',
    () => `
		margin: auto 10px 20px;
	`
  )}

  ${until(
    device.iPad(),
    () => `
		margin: auto 0 20px;
	`
  )}
`;

const Articles = () => {
  const { allMarkdownRemark, allFile } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                title
                description
                date
                image
                link
              }
              id
            }
          }
        }
        allFile(filter: { relativeDirectory: { eq: "articles" } }) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 280
                  quality: 100
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    `
  );

  const sortedArticlesByDate = allMarkdownRemark.edges.sort(
    (a, b) =>
      new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  );

  sortedArticlesByDate.forEach((a) => {
    allFile.edges.forEach((b) => {
      const { image } = a.node.frontmatter;
      const { src } = b.node.childImageSharp.gatsbyImageData.images.fallback;

      if (image !== '' && src.includes(image)) {
        a.node.frontmatter.image = getImage(b.node);
      }
    });
  });

  return (
    <Container>
      {sortedArticlesByDate.map((edge) => {
        const { title, description, date, image, link } = edge.node.frontmatter;
        const { id } = edge.node;

        return (
          <Article
            title={title}
            description={description}
            date={date}
            image={getImage(image)}
            link={link}
            key={id}
          />
        );
      })}
    </Container>
  );
};

export default Articles;
