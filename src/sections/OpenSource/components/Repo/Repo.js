import React from 'react';

import './index.scss'

import moment from "moment"

import { SkeletonText } from 'carbon-components-react'

import CircularProgress from "@material-ui/core/CircularProgress";

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

class Repo extends React.Component {
	constructor(props) {
		super(props);

		const { link } = props;

		const fullName = link.split('/').slice(-2).join('/');

		this.state = {
			loading: true,
			repository: localStorage.getItem(`${fullName}`)
				?
					JSON.parse(localStorage.getItem(`${fullName}`))
				:
					{}
		}
	}

	componentDidMount() {
		this.fetchRepository()
	}

	fetchRepository = async () => {
		const { repository } = this.state;

		if (JSON.stringify(repository) !== "{}") {
			const now = moment(moment(new Date()).format("YYYY-MM-DD"));

			if (repository.fetched_on === now.format("YYYY-MM-DD")) {
				this.setState({
					loading: false
				});

				return;
			};
		}

		const fullName = this.props.link.split('/').slice(-2).join('/');

		await fetch(`https://api.github.com/repos/${fullName}`)
			.then(result => result.json())
			.then(data => {
				const repository = {
					...data,
					fetched_on: moment(new Date()).format("YYYY-MM-DD")
				};

				localStorage.setItem(`${fullName}`, JSON.stringify(repository));

				this.setState({
					repository,
					loading: false
				})
			})
	};

	render() {
		const { link, emoji, label } = this.props;

		const { repository, loading } = this.state;

		const { name, description, stargazers_count, forks_count } = repository;

		return (
			<article className="repo">
				<div className="top">
					<div className="left">
						<span
							className="emoji"
							role="img"
							aria-label={label}
						>
							{emoji}
						</span>
						{
							loading
								?
									<span className="repo-title">
										<CircularProgress />
									</span>
								:
									<a
										href={link}
										target="_blank"
										aria-hidden="true"
										rel="noopener noreferrer"
									>
										<span className="repo-title">
											{name.toLowerCase()}
										</span>
									</a>
						}
					</div>
					<div className="right">
						<a
							href={link}
							target="_blank"
							aria-hidden="true"
							aria-label={`${name} github stars`}
							title="star"
							rel="noopener noreferrer"
						>
						<span
							className="stars"
							role="img"
							aria-label="star"
						>
							<i className="fas fa-star"></i>
							{
								loading
									?
										<>
										{' '}<CircularProgress />
										</>
									:
										` ${round(stargazers_count)}`
							}
						</span>
						</a>
						<a
							href={`${link}/fork`}
							target="_blank"
							aria-hidden="true"
							aria-label={`fork ${name} on github`}
							title="fork"
							rel="noopener noreferrer"
						>
						<span
							className="forks"
							role="img"
							aria-label="branch"
						>
							<i className="fas fa-code-branch"></i>
							{
								loading
									?
										<>
											{' '}<CircularProgress />
										</>
									:
										` ${round(forks_count)}`
							}
						</span>
						</a>
					</div>
				</div>
				<div className="bottom">
				<span className="desc">
					{
						loading
							?
								<SkeletonText
									heading={false}
									lineCount={2}
									paragraph
									width="100%"
								/>
							:
								description
					}
				</span>
				</div>
			</article>
		)
	}
}

export default Repo
