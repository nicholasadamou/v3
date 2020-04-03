import React from 'react';

import Provider from './context/Provider'

import Nav from './components/Nav/Nav'
import Wrapper from "./components/Wrapper/Wrapper"

import AboutMe from "./sections/AboutMe/AboutMe"
import Work from "./sections/Work/Work"
import OpenSource from "./sections/OpenSource/OpenSource"
import Experiments from "./sections/Experiments/Experiments"
import Papers from "./sections/Papers/Papers"
import News from "./sections/News/News"
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
	  <Provider>
	  	<Nav />
		<Wrapper>
			<AboutMe />
			<hr />
			<Work />
			<hr />
			<OpenSource />
			<hr />
			<Experiments />
			<hr />
			<Papers />
			<hr />
			<News />
			<hr />
			<Contact />
		</Wrapper>
	  	<Footer />
	  </Provider>
  );
}

export default App;
