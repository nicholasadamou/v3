import React from "react";

import Provider from "./context/Provider";

import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";

import AboutMe from "./sections/AboutMe/AboutMe";
import Education from "./sections/Education/Education";
import Internships from "./sections/Internships/Internships";
import Websites from "./sections/Websites/Websites";
import OpenSource from "./sections/OpenSource/OpenSource";
import Prototypes from "./sections/Prototypes/Prototypes";
import Papers from "./sections/Papers/Papers";
import News from "./sections/News/News";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <Provider>
      <Nav />
      <Container>
        <AboutMe />
        <hr />
        <Education />
        <hr />
        <Internships />
        <hr />
        <Websites />
        <hr />
        <OpenSource />
        <hr />
        <Prototypes />
        <hr />
        <Papers />
        <hr />
        <News />
        <hr />
        <Contact />
      </Container>
      <Footer />
    </Provider>
  );
}

export default App;
