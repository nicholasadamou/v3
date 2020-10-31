import React from 'react';

import { withRouter } from 'react-router-dom';

import Container from '../sass/Container';

import AboutMe from '../sections/AboutMe/AboutMe';
import Education from '../sections/Education/Education';
import Tennis from '../sections/Tennis/Tennis';
import Internships from '../sections/Internships/Internships';
import OpenSource from '../sections/OpenSource/OpenSource';
import Prototypes from '../sections/Prototypes/Prototypes';
import News from '../sections/News/News';
import Contact from '../sections/Contact/Contact';

import Footer from '../sections/Footer/Footer';

import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faStar,
  faCodeBranch,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart, faStar, faCodeBranch, faArrowUp);

const HomePage = () => (
  <>
    <Container>
      <AboutMe />
      <hr />
      <Education />
      <hr />
      <News />
      <hr />
			<Tennis />
			<hr />
      <Internships />
      <hr />
      <OpenSource />
      <hr />
      <Prototypes />
      <hr />
      <Contact />
    </Container>
    <Footer />
    <ScrollToTopButton />
  </>
);

export default withRouter(HomePage);
