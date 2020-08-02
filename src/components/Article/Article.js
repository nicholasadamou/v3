import React from "react";

import styled from "styled-components";

import { parseURL } from "../../utilities/utilities";

import { device, until } from "../../utilities/mixins";

const Container = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 25px;

	.masthead {
		width: 180px;

		border-radius: 8px;

		${until(
    device.iPhone(),
    () => `
			display: none;
	`
  )}
	}

	.article-details {
		width: 70%;

		.link {
			text-decoration: none;

			h4 {
				font-size: 1.25rem;
				font-weight: bold;

				margin-bottom: 5px;
			}
		}

		div {
			display: flex;
			align-items: center;

			margin-bottom: 5px;

			img {
				margin-right: 10px;

				width: 15px;
				height: 15px;
			}

			p {
				color: var(--light-grey);
			}
		}
	}

  ${until(
    device.iPhone(),
    () => `
			flex-direction: column;
	`
  )}
`;

const Article = (title, description, image, link) => {
	const URL = parseURL(link);

	return (
		<Container>
			<div class="article-details">
				<div>
					<img src={URL.favicon} alt={`${URL.parts[1]}'s favicon`} />
					<p>{URL.parts[1]}</p>
				</div>
				<a href={link} class="link" target="_blank" rel="noopener noreferrer">
					<h4>{title}</h4>
				</a>
				<p>{description}</p>
			</div>
			<img src={image} class="masthead" alt="article masthead" />
		</Container>
	)
}

export default Article;
