import React from 'react'

import './index.scss'

import SkeletonProject from './components/SkeletonProject/SkeletonProject'
import Project from './components/Project/Project'
import FooterText from "../../components/FooterText/FooterText"

import GitHub from 'github-api'

const github = new GitHub({
	username: 'nicholasadamou',
	token: process.env.REACT_APP_GITHUB_TOKEN
})

class Internships extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			projects: []
		}
	}

	componentDidMount() {
		github.getRepo('nicholasadamou', 'mack-media-group-internship-project').getDetails().then(response => {
			const { id, name, description, html_url } = response.data

			this.setState({
				projects: this.state.projects.concat({
					id,
					name,
					description,
					link: html_url,
					emoji: '📱',
					label: 'smart-phone'
				})
			})

			github.getRepo('nicholasadamou', 'down-to-network').getDetails().then(response => {
				const { id, name, description, html_url } = response.data

				this.setState({
					loading: false,
					projects: this.state.projects.concat({
						id,
						name,
						description,
						link: html_url,
						emoji: '🖇',
						label: 'two-paperclips'
					})
				})
			})
		})
	}

	render() {
		const { projects, loading } = this.state

		return (
			<section id="internships">
				<h2 className="title">Internships</h2>
				<p className="subtitle">Some companies where I've had the privilege to intern at in the past.</p>

				<div className="internships">
					<a
						href="https://ibm.com/"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						title="IBM"
					>
						<img
							src={
								require("../../assets/images/internships/ibm.png")
							}
							alt="IBM"
						/>
					</a>
					<a
						href="https://flyblackbird.com/"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						title="flyblackbird"
					>
						<img
							src={
								require("../../assets/images/internships/blackbird.png")
							}
							alt="flyblackbird"
						/>
					</a>
					<a
						href="https://mackmediagroup.com/"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						title="Mack Media Group"
					>
						<img
							src={
								require("../../assets/images/internships/mack-media-group.png")
							}
							alt="Mack Media Group"
						/>
					</a>
				</div>

				<h2
					className="title"
					style={{ fontSize: '1.5rem' }}
				>
					Internship Projects
				</h2>
				<p
					className="subtitle"
					style={{ fontSize: '1.1rem' }}
				>
					Various projects that I completed as an intern at these companies.
				</p>

				<div className="projects">
					{
						loading
							?
								projects.map((current, index) => {
									return SkeletonProject(index, "⏳", "hourglass")
								})
							:
								projects.map(project => {
									return Project(project)
								})
					}
				</div>

				{
					FooterText(
						"Read more about them on my ",
						"LinkedIn",
						"https://linkedin.com/in/nicholas-adamou/",
						"linkedin"
					)
				}
			</section>
		)
	}
}

export default Internships
