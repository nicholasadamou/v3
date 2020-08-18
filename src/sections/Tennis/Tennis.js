import React from "react";

import Masonry from 'react-masonry-component';

import FooterText from "../../components/FooterText/FooterText";

import Article from "./components/Article/Article";

import styled from "styled-components";

import { device, until } from "../../utilities/mixins";

const Container = styled.section`
  a.cornell {
	color: var(--cornell);
	text-decoration: underline;

	&:before {
	  background-color: var(--cornell);
	}
  }
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	width: 100%;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	width: 100%;

	${until(device.iPhone(), () => `
		flex-direction: column-reverse;
	`)}
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const Articles = styled.div`
	margin: 0 30px;

	text-align: left;

	${until(device.iPhone(), () => `
		margin: 0 20px;
	`)}
`;

const Photos = styled.div`
	margin-right: 30px;

	.grid-item {
		width: 50%;

		overflow: hidden;
	}

	${until(device.iPhone(), () => `
		margin: 0 20px;
	`)}
`;

const masonryOptions = {
	fitWidth: true,
	originLeft: false
};

const Tennis = (props) => (
	<Container>
		<h2 className="title">
			Tennis{" "}
			<span role="img" aria-label="tennis ball">🎾</span>
		</h2>
		<p className="subtitle">
			My time as a tennis player at{" "}
			<a
				className="cornell"
				href="https://www.cornellcollege.edu/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				Cornell College
			</a>{"."}
		</p>

		<Content>
			<Row>
				<Column>
					<Articles>
						{Article(
							"Tight wins bump Cornell's record-tying start to 10-2",
							"Cornell's sterling 10-2 start to the men's tennis season has not gone without several close calls in the win column. And the Rams have taken them all.",
							"March 1, 2020",
							"https://www.cornellrams.com/article/3679"
						)}
						{Article(
							"Red-hot Rams rally at Wartburg, climb to 8-1 in duals",
							" Shoma Kishimoto (SR/Rancho Palos Verdes, Calif.) and Alejandro Colorado (SO/Antiguo Cuscatlan, El Salvador) both prevailed in pivotal third-set singles tiebreakers Sunday, helping Cornell's surging men's tennis team to a 5-4 comeback win at Wartburg.",
							"February 23, 2020",
							"https://www.cornellrams.com/article/3666"
						)}
						{Article(
							"Cornell sweeps Dubuque, climbs to 4-0 in dual play",
							"Cornell's men's tennis team kept its undefeated dual season intact with a 9-0 shutout at the University of Dubuque Sunday morning.",
							"February 9, 2020",
							"https://www.cornellrams.com/article/3640"
						)}
						{Article(
							"Adamou wins twice at Midwest Open Championships",
							"Cornell senior Nick Adamou (SR/New Milford, Conn.) came away with two victories this weekend in his first appearance at the Midwest Open Men's Tennis Championships hosted by Gustavus Adolphus College.",
							"September 29, 2019",
							"https://www.cornellrams.com/article/3485"
						)}
					</Articles>
				</Column>
				<Column>
					<Photos>
						<Masonry
							className="grid"
							options={
								masonryOptions
							}
						>
							<div className="grid-item">
								<img src={require(`../../assets/images/tennis/simpson-college-2019.jpg`)} alt="Nicholas Adamou's serve" />
							</div>
							<div className="grid-item">
								<img src={require(`../../assets/images/tennis/home-match-indoor-spring-2019.jpg`)} alt="Nicholas Adamou prepping for a forehand shot" />
							</div>
							<div className="grid-item">
								<img src={require(`../../assets/images/tennis/hilton-head-doubles.jpg`)} alt="Nicholas Adamou serving in a doubles match in HH, SC" />
							</div>
							<div className="grid-item">
								<img src={require(`../../assets/images/tennis/team-photo.jpg`)} alt="Cornell Men's Tennis at HH, SC during their Spring break trip in 2020" />
							</div>
							<div className="grid-item">
								<img src={require(`../../assets/images/tennis/home-match-spring-2019.jpg`)} alt="Nicholas Adamou bouncing ball during double's match" />
							</div>
							<div className="grid-item">
								<img src={require(`../../assets/images/tennis/nicholas-adamou-forehand-shot.jpg`)} alt="Nicholas Adamou on-the-run forehand" />
							</div>
						</Masonry>
					</Photos>
				</Column>
			</Row>
		</Content>

		{FooterText(
			"Read more about my collegiate tennis career at ",
			"Cornell Rams",
			"https://www.cornellrams.com/roster/18/8/5473",
			"cornell"
		)}
	</Container>
)

export default Tennis;
