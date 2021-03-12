import React from "react";

import { useStaticQuery, graphql } from 'gatsby';

import AwardListing from '../../components/AwardListing/AwardListing';
import Experience from '../../components/Experience/Experience';
import Repository from '../../components/Repository/Repository';
import Article from '../../components/Article/Article';
import FooterText from '../../components/FooterText/FooterText';

import Awards from '../../sass/Awards';
import Projects from '../../sass/Projects';
import Articles from '../../sass/Articles';

import styled from 'styled-components';

import {device, until} from '../../utilities/mixins';
import {findImageByName} from '../../utilities/utilities';

const Container = styled.section`
	padding: 0 25px;

	${until(
		device.iPhone(),
		() => `
		padding: 0 16px;
	`,
	)};

	a.cornell {
		color: var(--cornell);
		text-decoration: underline;
	}

	.reviews {
		width: 95%;

		${until(
			device.iPhone(),
			() => `
		width: 100%;

		.react-masonry-column {
			width: 100% !important;
		}
	`,
		)};

		blockquote {
			padding: 10px;

			${until(
				device.iPhone(),
				() => `
			padding: 0;
  		`,
			)};
		}
	}
`;

const Education = (props) => {
	const { news } = useStaticQuery(
		graphql`
			query {
				news: allFile(filter: {relativeDirectory: {eq: "news"}}) {
						edges {
							node {
							childImageSharp {
								gatsbyImageData(
									layout: FIXED,
									width: 200,
									quality: 100,
									placeholder: BLURRED,
									formats: [AUTO, WEBP]
								)
							}
						}
					}
				}
			}
		`
	)

	return (
		<Container>
			<h2 className="title">
				Education
			</h2>
			<p className="subtitle">
				Schools where I learned all that I know about software engineering.
			</p>

			<>
				{/* {Experience(
					'Georgia Tech',
					'Master\'s of Science, Computer Science',
					'Atlanta, Georgia',
					'August 2021 - May 2023',
					() => (
						<>
							Incoming graduate student.
					</>
					),
					findImageByName('georgia-tech.jpg', props.logos),
				)} */}
				{Experience(
					'Cornell College',
					'Bachelors of Arts, Computer Science',
					'Mt. Vernon, IA',
					'August 2018 - May 2020',
					() => (
						<>
							<em>Graduated </em> <strong>Summa Cum Laude</strong>
							{'.'}
							<br/>
							<em>Cumulative GPA:</em>
							{' 3.98 out of 4.0.'}
							<br/>
							<em>Overall</em>
							{' Class Rank: 6/261 ('}
							<em>2.29%</em>
							{').'}
						</>
					),
					findImageByName('cornell-college.png', props.logos),
				)}
				{Experience(
					'Hartwick College',
					'Transferred; Computer Science Major',
					'Oneonta, NY',
					'August 2016 - May 2018',
					() => (
						<>
							<em>Cumulative GPA:</em>
							{' 3.96 out of 4.0.'}
						</>
					),
					findImageByName('hartwick-college.jpg', props.logos),
				)}
			</>

			<h2 className="title" style={{fontSize: '1.5rem'}}>
				Computer Science Projects
			</h2>
			<p className="subtitle" style={{fontSize: '1.1rem'}}>
				Various projects that I've completed as an computer science student.
			</p>

			<Projects>
				{Repository('nicholasadamou', 'distributed-load-balancer')}
				{Repository('nicholasadamou', 'producer-consumer-simulator')}
				{Repository('nicholasadamou', 'python-udp-chat-client')}
				{Repository('nicholasadamou', 'python-dynamic-web-server')}
				{Repository('nicholasadamou', 'python-proxy')}
				{Repository('nicholasadamou', 'cpu-cache-simulator')}
				{Repository('nicholasadamou', 'project-management-capstone-project')}
			</Projects>

			<h2 className="title" style={{fontSize: '1.5rem'}}>
				Campus News
			</h2>

			<Articles>
				<Article
					title={"Cornell College shares this week's senior profile on Nicholas Adamou"}
					description={"This week's senior profile is Nicholas Adamou '20. Congrats on your many accomplishments, Nicholas!"}
					date={"June 18, 2020"}
					link={"https://www.instagram.com/p/CBlTkx2FFIA"}
				/>
				<Article
					title={"Passion for computer science leads to job at IBM for Adamou"}
					description={"An interest in the classic video game Asteroids for Windows 98 spawned a passion for computer science at a young age for Nicholas Adamou ՚20."}
					date={"June 17, 2020"}
					image={findImageByName('nicholas-1.png', news.edges, 'fixed')}
					link={"https://news.cornellcollege.edu/2020/06/passion-computer-science-leads-job-ibm-adamou-՚20/"}
				/>
				<Article
					title={"Adamou wins twice at Midwest Open Championships"}
					description={"Cornell senior Nick Adamou (SR/New Milford, Conn.) came away with two victories this weekend in his first appearance at the Midwest Open Men's Tennis Championships hosted by Gustavus Adolphus College."}
					date={"September 29, 2019"}
					image={findImageByName('nicholas-2.jpg', news.edges, 'fixed')}
					link={"https://www.cornellrams.com/article/3485"}
				/>
				<Article
					title={"Nick Adamou shares insights and knowledge following his computer science internship"}
					description={"Nick Adamou (pictured on the left) started his senior year with new insights and knowledge following his computer science internship. He spent his summer as a software engineering intern at IBM under IBM’s Finance and Operations Department in Southbury, Connecticut. Way to go Nick!"}
					date={"August 29, 2019"}
					link={"https://www.instagram.com/p/B1v-gCHHAer"}
				/>
				<Article
					title={"Adamou holds computer science internship at IBM"}
					description={"Nick Adamou will start his senior year with new insights and knowledge following his computer science internship."}
					date={"August 27, 2019"}
					image={findImageByName('nicholas-3.jpg', news.edges, 'fixed')}
					link={"https://news.cornellcollege.edu/2019/08/adamou-holds-computer-science-internship-ibm/"}
				/>
			</Articles>

			<h2 className="title" style={{fontSize: '1.5rem'}}>
				Awards and Recognition
			</h2>

			<Awards>
				{AwardListing(
					findImageByName('cornell-college.png', props.logos),
					'Cornell College',
					() => (
						<>
							➤ <em>High Honors Dean's List</em> (Fall ‘18)
							<br/>
							➤ <em>Highest Honors Dean's List</em> (Spring ‘19, Fall '19,
							Spring '20)
						</>
					),
				)}
				{AwardListing(
					findImageByName('cornell-rams.png', props.logos),
					'Cornell Rams',
					() => (
						<>
							➤ Team Nadal Award (Spring '19)
							<br/>
							➤ Team Most Improved Player (Spring '20)
							<br/>
							➤ <em>Midwest Conference Academic All-Conference</em> (Fall
							'18, Spring ‘19, Fall '19, Spring '20)
							<br/>
							➤ <em>
							Intercollegiate Tennis Association Scholar-Athlete
						</em>{' '}
							(Fall '18, Spring ‘19, Fall '19, Spring '20)
						</>
					),
				)}
				{AwardListing(
					findImageByName('hartwick-college.jpg', props.logos),
					'Hartwick College',
					() => (
						<>
							➤ <em>Dean's List</em> (Fall ‘16, ‘17), (Spring ‘17, ‘18)
							<br/>
							➤ <em>Presidents List</em> (Fall '16, '17), (Spring ‘17, ‘18)
							<br/>
							➤ <em>Summer Entrepreneurship Award</em> (2017)
							<br/>
							➤{' '}
							<em>
								The Departmental Award for Excellence in Computer Science
							</em>{' '}
							(2018)
						</>
					),
				)}
				{AwardListing(
					findImageByName('hartwick-hawks.png', props.logos),
					'Hartwick Hawks',
					() => (
						<>
							➤ <em>Empire8 Sportsman of the Year</em> (2017)
							<br/>
							➤{' '}
							<em>
								The Philip S. Wilder Jr. Award for Academic Distinction
							</em>{' '}
							(2017, 2018)
						</>
					),
				)}
			</Awards>

			{FooterText(
				'Read more about my education on my ',
				'LinkedIn',
				'https://linkedin.com/in/nicholas-adamou/',
				'linkedin',
			)}
		</Container>
	)
};

export default Education;
