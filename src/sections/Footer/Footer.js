import React from 'react';

import moment from 'moment';

import Logo from '../../components/Logo/Logo';

import useGitHub from "../../hooks/useGithub";

import { device, until } from '../../utilities/mixins';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SkeletonText } from "carbon-components-react";

const Container = styled.footer`
  display: grid !important;
  place-content: center;

  margin: 7rem 0 !important;

  text-align: center;

  .footer--loading {
	width: 100%;
	margin: 0 auto;

	${until(
		'956px',
		() => `
		width: 45%;
		`
	)}

	${until(
    device.iPhone(),
    () => `
		width: 80%;
	`,
  )}
  }

  .footer--loading > div {
  	margin: 0 80px;

  	.bx--skeleton__text {
  		width: 100% !important;
  	}
  }

  div:first-child {
    margin-bottom: 2rem;

    cursor: inherit;

    opacity: 0.25;
  }

  p {
    margin-bottom: 0.5rem;

    font-size: 0.9rem;

    & > div {
      display: inline;

      #heart {
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }
    }
  }
`;

const Social = styled.div`
  list-style-type: none;

  margin-bottom: 1rem;

  a {
    text-decoration: none;

    li {
      display: inline-block;

      margin: 0 10px;

      font-size: 1.5rem;
      color: var(--copy);

      -webkit-transition: all 0.25s ease-in-out;

      transition: all 0.25s ease-in-out;

      &.twitter {
        color: var(--twitter);
      }

      &.linkedin {
        color: var(--linkedin);
      }

      &.instagram {
        color: var(--instagram);
      }

      &:hover {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  }
`;

const Footer = () => {
	const repository = useGitHub("nicholasadamou", "nicholasadamou.com")

	return (
		<Container>
			<Logo/>

			<Social>
				<ul>
					<a
						href="https://codepen.io/nicholasadamou"
						target="_blank"
						aria-hidden="true"
						aria-label="CodePen"
						title="CodePen"
						rel="noopener noreferrer"
					>
						<li>
							<FontAwesomeIcon icon={['fab', 'codepen']}/>
						</li>
					</a>
					<a
						href="https://github.com/nicholasadamou"
						target="_blank"
						aria-hidden="true"
						aria-label="GitHub"
						title="GitHub"
						rel="noopener noreferrer"
					>
						<li>
							<FontAwesomeIcon icon={['fab', 'github']}/>
						</li>
					</a>
					<a
						href="https://linkedin.com/in/nicholas-adamou/"
						target="_blank"
						aria-hidden="true"
						aria-label="LinkedIn"
						title="LinkedIn"
						rel="noopener noreferrer"
					>
						<li className="linkedin">
							<FontAwesomeIcon icon={['fab', 'linkedin']}/>
						</li>
					</a>
				</ul>
			</Social>

			<p>
				Handcrafted with{' '}
				<FontAwesomeIcon icon={['fas', 'heart']} style={{color: 'red'}}/> by
				myself. Copyright &copy; {moment(Date.now()).year()}.
			</p>
			<p>
				Source code available on{' '}
				<a
					href="https://github.com/nicholasadamou/nicholasadamou.com"
					target="_blank"
					aria-hidden="true"
					rel="noopener noreferrer"
					className="link"
				>
					GitHub
				</a>
				.
			</p>
			{
				JSON.stringify(repository) === '{}'
					?
						<div className="footer--loading">
							<SkeletonText heading={false} lineCount={1} paragraph width="100%" />
						</div>
					:
						<p>
							Last updated{" "}
							<a
								href={repository.commit.link}
								target="_blank"
								aria-hidden="true"
								rel="noopener noreferrer"
								className="link"
							>
								{
									moment(new Date(repository.lastUpdated)).fromNow()
								}
							</a>
							{"."}
						</p>
			}
		</Container>
	)
};

export default Footer;
