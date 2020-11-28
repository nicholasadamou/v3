import React from 'react';

import Masonry from '@nicholasadamou/react-masonry';

import AwardListing from '../../components/AwardListing/AwardListing';
import Experience from '../../components/Experience/Experience';
import Review from '../../components/Review/Review';
import Repository from '../../components/Repository/Repository';
import Article from '../../components/Article/Article';
import FooterText from '../../components/FooterText/FooterText';

import Awards from '../../sass/Awards';
import Projects from '../../sass/Projects';
import Articles from '../../sass/Articles';

import styled from 'styled-components';

import { device, until } from '../../utilities/mixins';

const Container = styled.section`
	padding: 0 25px;

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

const Experiences = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  ${until(
    device.iPhone(),
    () => `
		grid-template-columns: 1fr;
		grid-gap: initial;

		margin: 0;
	`,
  )}
`;

const Education = () => (
  <Container>
    <h2 className="title">
      Education{' '}
      <span role="img" aria-label="graduate">
        👨🏼‍🎓
      </span>
    </h2>
    <p className="subtitle">
      Schools where I learned all that I know about software engineering.
    </p>

		<Experiences>
			{Experience(
				'Cornell College',
				'Bachelors of Arts, Computer Science',
				'Mt. Vernon, IA',
				'August 2018 - May 2020',
				() => (
					<>
						<em>Graduated </em> <strong>Summa Cum Laude</strong>
						{' and '}
						<strong>with honors</strong>
						{' in '}
						<em>Computer Science</em>{'.'}
						<br />
						<em>Cumulative GPA:</em>
						{' 3.98 out of 4.0'}
						<br />
						<em>Overall</em>
						{' Class Rank: 6/261 ('}
						<em>2.29%</em>
						{')'}
					</>
				),
				require('../../assets/images/logos/cornell-college.png'),
			)}

			{Experience(
				'Hartwick College',
				'Transferred; Computer Science Major',
				'Oneonta, NY',
				'August 2016 - May 2018',
				() => (
					<>
						<em>Cumulative GPA:</em>
						{' 3.96 out of 4.0'}
					</>
				),
				require('../../assets/images/logos/hartwick-college.png'),
			)}
		</Experiences>

    <h2 className="title" style={{ fontSize: '1.5rem' }}>
      Computer Science Projects{' '}
			<span role="img" aria-label="toolbox">🧰</span>
    </h2>
    <p className="subtitle" style={{ fontSize: '1.1rem' }}>
      Various projects that I've completed as an computer science student.
    </p>

    <Projects>
      {Repository('distributed-load-balancer')}
      {Repository('producer-consumer-simulator')}
      {Repository('python-udp-chat-client')}
      {Repository('python-dynamic-web-server')}
      {Repository('python-proxy')}
      {Repository('cpu-cache-simulator')}
      {Repository('project-management-capstone-project')}
    </Projects>

		<h2 className="title" style={{ fontSize: '1.5rem' }}>
      Campus News{' '}
      <span role="img" aria-label="rolled-up-newspaper">
        🗞️
      </span>
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
				image={require('../../assets/images/news/nicholas-1.png')}
				link={"https://news.cornellcollege.edu/2020/06/passion-computer-science-leads-job-ibm-adamou-՚20/"}
			/>
			<Article
				title={"Adamou wins twice at Midwest Open Championships"}
				description={"Cornell senior Nick Adamou (SR/New Milford, Conn.) came away with two victories this weekend in his first appearance at the Midwest Open Men's Tennis Championships hosted by Gustavus Adolphus College."}
				date={"September 29, 2019"}
				image={require('../../assets/images/news/nicholas-3.jpg')}
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
				image={require('../../assets/images/news/nicholas-2.jpg')}
				link={"https://news.cornellcollege.edu/2019/08/adamou-holds-computer-science-internship-ibm/"}
			/>
    </Articles>

		<h2 className="title" style={{ fontSize: '1.5rem' }}>
      Awards and Recognition{' '}
      <span role="img" aria-label="trophy">
        🏆
      </span>
    </h2>

    <Awards>
      {AwardListing(
        require('../../assets/images/logos/cornell-college.png'),
        'Cornell College',
        () => (
          <>
            ➤ <em>High Honors Dean's List</em> (Fall ‘18)
            <br />
						➤ <em>Highest Honors Dean's List</em> (Spring ‘19, Fall '19,
            Spring '20)
          </>
        ),
      )}
			{AwardListing(
        require('../../assets/images/logos/cornell-rams.png'),
        'Cornell Rams',
        () => (
          <>
            ➤ Team Nadal Award (Spring '19)
            <br />
            ➤ Team Most Improved Player (Spring '20)
            <br />
						➤ <em>Midwest Conference Academic All-Conference</em> (Fall
            '18, Spring ‘19, Fall '19, Spring '20)
            <br />
						➤ <em>
              Intercollegiate Tennis Association Scholar-Athlete
            </em>{' '}
            (Fall '18, Spring ‘19, Fall '19, Spring '20)
          </>
        ),
      )}
      {AwardListing(
        require('../../assets/images/logos/hartwick-college.png'),
        'Hartwick College',
        () => (
          <>
            ➤ <em>Dean's List</em> (Fall ‘16, ‘17), (Spring ‘17, ‘18)
            <br />
						➤ <em>Presidents List</em> (Fall '16, '17), (Spring ‘17, ‘18)
            <br />
						➤ <em>Empire8 Sportsman of the Year</em> (2017)
            <br />
						➤{' '}
            <em>
              The Philip S. Wilder Jr. Award for Academic Distinction
            </em>{' '}
            (2017, 2018)
            <br />
						➤ <em>Summer Entrepreneurship Award</em> (2017)
            <br />
						➤{' '}
            <em>
              The Departmental Award for Excellence in Computer Science
            </em>{' '}
            (2018)
          </>
        ),
      )}
    </Awards>

		<h2 className="title" style={{ fontSize: '1.5rem' }}>
      Thoughts from my Professors, Coaches, and Teammates{' '}
			<span role="img" aria-label="thought-balloon">
        💭
      </span>
    </h2>

    <Masonry className="reviews" columns={2}>
			{Review(
        'Leon Tabak',
        'Professor of Computer Science, Cornell College',
        'Nick’s classmates saw his initiative and responded with their own ideas and energy. Nick organized activities for his classmates like those in which he had participated during two great internships. He shared enthusiasm and skills gained in Silicon Valley and at IBM.',
        require('../../assets/images/avatars/leon.jpg'),
      )}
      {Review(
        'Peter Dumas',
        'Head Tennis Coach, Cornell College',
        'Nick is one of those athletes that you love having on your team. He always gave his best during practice and matches while maintaining a high level of academic excellence. Even though Nick was only a Ram for two years after transferring from Hartwick and his senior season was cut short, he had a large impact on his teammates and his coach.',
        require('../../assets/images/avatars/peter.jpg'),
      )}
			{Review(
        'Peter Dumas',
        'Head Tennis Coach, Cornell College',
        'I am in the unique position of having known Nick since he was a junior in high school. I recruited Nick to be a member of my men’s tennis team at Hartwick College starting 5 years ago. During this time, I have known Nick to be extremely diligent and proficient in his approach with everything that he does. Nick applied to Hartwick and received the top scholarship at that institution and joined our team.',
        require('../../assets/images/avatars/peter.jpg'),
      )}
      {Review(
        'Peter Dumas',
        'Head Tennis Coach, Cornell College',
        'Nick is an incredibly gifted student and he chooses Cornell for many reasons, most of which because of our outstanding academic reputation. He has clearly succeeded at two liberal arts colleges and is an example of the best type of student that this environment can produce. He is active on campus and is a leader on our team.',
        require('../../assets/images/avatars/peter.jpg'),
      )}
      {Review(
        'Amanda Dragon',
        'Teammate',
        'It has been so great to have Nick on the team the past 2 years. Watching him grow as a person and tennis player has been amazing. He has done so much not only in his time at Cornell, but also back in NY. He has had a big impact on this team and Cornell. He is going to do great things in the world with all of his crazy computer stuff (that he is really good at + really hard for everyone else). I believe with my whole heart that Nick will continue to have an impact on everyone and every thing he will do.',
        require('../../assets/images/avatars/amanda.jpg'),
      )}
      {Review(
        'Abbey Nelson',
        'Teammate',
        'Nick has such a hard working drive that I admire. He works so hard for everything and with passion. He also has a very kind heart.',
        require('../../assets/images/avatars/abbey.jpg'),
      )}
      {Review(
        'Natalie Brandt',
        'Teammate',
        'It was a pleasure to get to know Nick over the past year. He is so smart and a talented player - he will do big things after he leaves Cornell. I appreciated he friendship and he always made me feel welcomed on the team and at Cornell.',
        require('../../assets/images/avatars/natalie.jpg'),
      )}
      {Review(
        'Ravi Parekh',
        'Teammate',
        'I am so glad I got the chance to get to know Nick these last 2 years. He was always there for me as a friend and teammate; he always listened to me when I was struggling mentally. I am sure he will do big things in life. #IBM',
        require('../../assets/images/avatars/ravi.jpg'),
      )}
    </Masonry>

    {FooterText(
      'Read more about my education on my ',
      'LinkedIn',
      'https://linkedin.com/in/nicholas-adamou/',
      'linkedin',
    )}
  </Container>
);

export default Education;
