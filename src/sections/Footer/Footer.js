import moment from 'moment';

import Logo from '../../components/Logo/Logo';
import SocialMediaButton from '../../components/SocialMediaButton/SocialMediaButton';

import useGitHub from "../../hooks/useGithub";

import {device, until} from '../../utilities/mixins';

import styled from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {SkeletonText} from "carbon-components-react";

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
		cursor: inherit;

		opacity: 0.25;
	}

	p {
		margin-bottom: 0.5rem;

		font-size: 1.05rem;

		${until(
			device.iPhone(),
			() => `
				font-size: 1rem;
			`,
		)}

		& > div {
			display: inline;

			#heart {
				-webkit-animation-iteration-count: infinite;
				animation-iteration-count: infinite;
			}
		}
	}
`;

const Footer = () => {
	const repository = useGitHub("nicholasadamou", "nicholasadamou.com")

	return (
		<Container>
			<Logo/>

			<span>
				<SocialMediaButton
					href="#"
					icon="github"
				/>
				<SocialMediaButton
					href="#"
					icon="codepen"
				/>
				<SocialMediaButton
					href="#"
					icon="linkedin"
				/>
			</span>

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
						<SkeletonText heading={false} lineCount={1} paragraph width="100%"/>
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
