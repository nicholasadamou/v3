import React from "react";

import Masonry from 'react-masonry-component';

import FooterText from "../../components/FooterText/FooterText";

import Reviews from "../../sass/Reviews";
import Review from "../../components/Review/Review";

import Article from "./components/Article/Article";

import styled from "styled-components";

import { device, until } from "../../utilities/mixins";
import Awards from "../../sass/Awards";
import AwardListing from "../../components/AwardListing/AwardListing";

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
			College Tennis{" "}
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

		<h2 className="title" style={{ fontSize: "1.5rem" }}>
			Awards and Recognition{" "}
			<span role="img" aria-label="trophy">
        🏆
      </span>
		</h2>
		<p className="subtitle" style={{ fontSize: "1.1rem" }}>
			Awards that I have received from my time as a student athlete.
		</p>

		<Awards>
			{AwardListing(
				require("../../assets/images/logos/cornell-rams.png"),
				"Cornell Rams",
				() => (
					<>
						➤ Team Nadal Award (Spring '19)
						<br />
						➤ Team Most Improved Player (Spring '20)
						<br />
						➤ <em>Midwest Conference Academic All-Conference</em> (Fall
						'18, Spring ‘19, Fall '19, Spring '20)
						<br />
						➤ <em>Intercollegiate Tennis Association Scholar-Athlete</em>{" "}
						(Fall '18, Spring ‘19, Fall '19, Spring '20)
					</>
				)
			)}
		</Awards>

		<h2 className="title" style={{ fontSize: "1.5rem" }}>
			Things my coach and teammates have said
		</h2>
		<p className="subtitle" style={{ fontSize: "1.1rem" }}>
			Things my friends and teammates have said about me.{" "}
			<span role="img" aria-label="thought-balloon">
			💭
		  	</span>
		</p>

		<Reviews>
			{Review(
				"Peter Dumas",
				"Head Tennis Coach, Cornell College",
				"I am in the unique position of having known Nick since he was a junior in high school. I recruited Nick to be a member of my men’s tennis team at Hartwick College starting 5 years ago. During this time, I have known Nick to be extremely diligent and proficient in his approach with everything that he does. Nick applied to Hartwick and received the top scholarship at that institution and joined our team.",
				require("../../assets/images/avatars/peter.jpg")
			)}
			{Review(
				"Peter Dumas",
				"Head Tennis Coach, Cornell College",
				"Nick is an incredibly gifted student and he chooses Cornell for many reasons, most of which because of our outstanding academic reputation. He has clearly succeeded at two liberal arts colleges and is an example of the best type of student that this environment can produce. He is active on campus and is a leader on our team.",
				require("../../assets/images/avatars/peter.jpg")
			)}
			{Review(
				"Amanda Dragon",
				"Teammate",
				"It has been so great to have Nick on the team the past 2 years. Watching him grow as a person and tennis player has been amazing. He has done so much not only in his time at Cornell, but also back in NY. He has had a big impact on this team and Cornell. He is going to do great things in the world with all of his crazy computer stuff (that he is really good at + really hard for everyone else). I believe with my whole heart that Nick will continue to have an impact on everyone and every thing he will do.",
				require("../../assets/images/avatars/amanda.jpg")
			)}
			{Review(
				"Abbey Nelson",
				"Teammate",
				"Nick has such a hard working drive that I admire. He works so hard for everything and with passion. He also has a very kind heart.",
				require("../../assets/images/avatars/abbey.jpg")
			)}
			{Review(
				"Natalie Brandt",
				"Teammate",
				"It was a pleasure to get to know Nick over the past year. He is so smart and a talented player - he will do big things after he leaves Cornell. I appreciated he friendship and he always made me feel welcomed on the team and at Cornell.",
				require("../../assets/images/avatars/natalie.jpg")
			)}
			{Review(
				"Ravi Parekh",
				"Teammate",
				"I am so glad I got the chance to get to know Nick these last 2 years. He was always there for me as a friend and teammate; he always listened to me when I was struggling mentally. I am sure he will do big things in life. #IBM",
				require("../../assets/images/avatars/ravi.jpg")
			)}
		</Reviews>

		{FooterText(
			"Read more about my collegiate tennis career at ",
			"Cornell Rams",
			"https://www.cornellrams.com/roster/18/8/5473",
			"cornell"
		)}
	</Container>
)

export default Tennis;
