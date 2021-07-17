import React from 'react';

import styled from 'styled-components';

const Container = styled.p`
	margin-top: 2rem;

	font-size: 1rem;
	color: ${props => props.theme === 'dark' ? 'var(--white)' : 'var(--black)'};

	text-align: center;

	a {
		text-decoration: underline;

		color: ${props => props.theme === 'dark' ? 'var(--white)' : 'var(--black)'};

		&.linkedin {
			color: var(--linkedin);
		}

		&.github {
			color: ${props => props.theme === 'dark' ? 'var(--white)' : 'var(--github)'};
		}

		&.codepen {
			color: ${props => props.theme === 'dark' ? 'var(--white)' : 'var(--codepen)'};
		}

		&:hover {
			color: var(--light-grey);
		}
	}
`;

const FooterText = (content, linkBody, link, linkClassName, theme = 'dark') => (
	<Container theme={theme}>
		{content}
		<a
			href={link}
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			className={`link ${linkClassName}`}
		>
			{linkBody}
		</a>
		{'.'}
	</Container>
);

export default FooterText;
