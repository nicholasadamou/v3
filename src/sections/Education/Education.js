import React from 'react';

import Masonry from '@nicholasadamou/react-masonry';

import AwardListing from '../../components/AwardListing/AwardListing';
import Experience from '../../components/Experience/Experience';
import Review from '../../components/Review/Review';
import Repository from '../../components/Repository/Repository';
import FooterText from '../../components/FooterText/FooterText';

import Awards from '../../sass/Awards';
import Projects from '../../sass/Projects';

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

  margin: 0 2rem;

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
            <br />
            {' and '}
            <strong>With Honors</strong>
            {' in '}
            <em>Computer Science</em>
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
      Computer Science Projects
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
