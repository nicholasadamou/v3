import React from 'react';

import Repo from "./components/Repo/Repo";
import SkeletonRepo from "./components/SkeletonRepo/SkeletonRepo";

import './index.scss'

import FooterText from "../../components/FooterText/FooterText";

import GitHub from 'github-api'

const gh = new GitHub({
	username: 'nicholasadamou',
	token: process.env.REACT_APP_GITHUB_TOKEN
})

class OpenSource extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			repositories: [
				{}, {}, {}
			]
		}
	}

	componentDidMount() {
		gh.getUser().listRepos().then(response => {
			let repositories = response.data.map(repository => {
				return {
					key: repository.id,
					name: repository.name,
					description: repository.description,
					link: repository.html_url,
					stars: repository.stargazers_count,
					forks: repository.forks_count
				}
			})

			repositories.sort((a, b) => {
				if (a.stars < b.stars) return 1;
				if (a.stars > b.stars) return -1;
				return 0;
			})

			repositories = repositories.slice(0, 3)

			this.setState({
				loading: false,
				repositories
			})
		})
	}

	render() {
		const { repositories, loading } = this.state

		return (
			<section id="open-source">
				<h2 className="title">
					Open Source{' '}
					<i className="fab fa-git-alt"></i>
				</h2>
				<p className="subtitle">
					I am an{' '}
					<a
						href="http://git-awards.com/users/nicholasadamou"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						className="link"
					>
						avid open-sourcer
					</a>
					{' '}and I have{' '}
					<a
						href="https://github.com/nicholasadamou"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						className="link"
					>
						many repositories
					</a>
					{' '}. Take a <span role="img" aria-label="eyes">👀</span>.
				</p>

				<div className="repositories">
					{
						loading
							?
								repositories.map(() => {
									return SkeletonRepo("🛠️", "hammer-and-wrench")
								})
							:
								repositories.map(repository => {
									return Repo(repository, "🛠️", "hammer-and-wrench")
								})
					}
				</div>

				{
					FooterText(
						"More can be found on my ",
						"GitHub",
						"https://github.com/nicholasadamou",
						"github"
					)
				}
			</section>
		)
	}
}

export default OpenSource;
