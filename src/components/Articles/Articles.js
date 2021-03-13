/* eslint-disable import/no-unresolved */
import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

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
  const { allMarkdownRemark } = useStaticQuery(
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
            image={image !== '' ? `articles/${image}` : undefined}
            link={link}
            key={id}
          />
        );
      })}
    </Container>
  );
};

export default Articles;
