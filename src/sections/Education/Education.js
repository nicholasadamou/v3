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
      Awards and Recognition{' '}
      <span role="img" aria-label="trophy">
        🏆
      </span>
    </h2>
    <p className="subtitle" style={{ fontSize: '1.1rem' }}>
      Awards that I have received from my studies at either institution.
    </p>

    <Awards>
      {AwardListing(
        require('../../assets/images/logos/cornell-college.png'),
        'Cornell College',
        () => (
          <>
            ➤ <em>High Honors Dean's List</em> (Fall ‘18)
            <br />➤ <em>Highest Honors Dean's List</em> (Spring ‘19, Fall '19,
            Spring '20)
            <br />➤ <em>Midwest Conference Academic All-Conference</em> (Fall
            '18, Spring ‘19, Fall '19, Spring '20)
            <br />➤ <em>
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
            <br />➤ <em>Presidents List</em> (Fall '16, '17), (Spring ‘17, ‘18)
            <br />➤ <em>Empire8 Sportsman of the Year</em> (2017)
            <br />➤{' '}
            <em>
              The Philip S. Wilder Jr. Award for Academic Distinction
            </em>{' '}
            (2017, 2018)
            <br />➤ <em>Summer Entrepreneurship Award</em> (2017)
            <br />➤{' '}
            <em>
              The Departmental Award for Excellence in Computer Science
            </em>{' '}
            (2018)
          </>
        ),
      )}
    </Awards>

		<h2 className="title" style={{ fontSize: '1.5rem' }}>
      Campus News{' '}
      <span role="img" aria-label="rolled-up-newspaper">
        🗞️
      </span>
    </h2>
    <p className="subtitle" style={{ fontSize: '1.1rem' }}>
			Articles that were written about me while I was at both colleges.
		</p>

    <Articles>
      {Article(
        "Cornell College shares this week's senior profile on Nicholas Adamou",
        "This week's senior profile is Nicholas Adamou '20. Congrats on your many accomplishments, Nicholas!",
        'June 18, 2020',
        '',
        'https://www.instagram.com/p/CBlTkx2FFIA',
      )}
      {Article(
        'Passion for computer science leads to job at IBM for Adamou',
        'An interest in the classic video game Asteroids for Windows 98 spawned a passion for computer science at a young age for Nicholas Adamou ՚20.',
        'June 17, 2020',
        require('../../assets/images/news/nicholas-1.png'),
        'https://news.cornellcollege.edu/2020/06/passion-computer-science-leads-job-ibm-adamou-՚20/',
      )}
      {Article(
        'Nick Adamou shares insights and knowledge following his computer science internship',
        'Nick Adamou (pictured on the left) started his senior year with new insights and knowledge following his computer science internship. He spent his summer as a software engineering intern at IBM under IBM’s Finance and Operations Department in Southbury, Connecticut. Way to go Nick!',
        'August 29, 2019',
        '',
        'https://www.instagram.com/p/B1v-gCHHAer',
      )}
      {Article(
        'Adamou holds computer science internship at IBM',
        'Nick Adamou will start his senior year with new insights and knowledge following his computer science internship.',
        'August 27, 2019',
        require('../../assets/images/news/nicholas-2.jpg'),
        'https://news.cornellcollege.edu/2019/08/adamou-holds-computer-science-internship-ibm/',
      )}
    </Articles>

		<h2 className="title" style={{ fontSize: '1.5rem' }}>
      Thoughts from my Professors and Coaches
    </h2>
    <p className="subtitle" style={{ fontSize: '1.1rem' }}>
      What my professors and coaches have to say about me{' '}
      <span role="img" aria-label="thought-balloon">
        💭
      </span>
    </p>

    <Masonry className="reviews" columns={2}>
      {Review(
        'Peter Dumas',
        'Head Tennis Coach, Cornell College',
        'Nick is one of those athletes that you love having on your team. He always gave his best during practice and matches while maintaining a high level of academic excellence. Even though Nick was only a Ram for two years after transferring from Hartwick and his senior season was cut short, he had a large impact on his teammates and his coach.',
        require('../../assets/images/avatars/peter.jpg'),
      )}
      {Review(
        'Leon Tabak',
        'Professor of Computer Science, Cornell College',
        'Nick’s classmates saw his initiative and responded with their own ideas and energy. Nick organized activities for his classmates like those in which he had participated during two great internships. He shared enthusiasm and skills gained in Silicon Valley and at IBM.',
        require('../../assets/images/avatars/leon.jpg'),
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
