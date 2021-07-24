/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import * as React from 'react';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faArrowUp, faBookOpen, faCodeBranch, faFileCode, faHeart, faStar, faBars} from '@fortawesome/free-solid-svg-icons';

import Layout from "@components/Layout";

import NavigationProvider from "@providers/NavigationProvider";

import Hero from '@sections/Hero';
import Work from '@sections/Work';
import Projects from '@sections/Projects';
import Contact from '@sections/Contact';
import Footer from '@sections/Footer';

library.add(fab, faHeart, faStar, faCodeBranch, faArrowUp, faFileCode, faBookOpen, faBars);

const IndexPage = () => (
  <Layout>
    <NavigationProvider>
      <Hero />
    </NavigationProvider>
    <Work />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage;
