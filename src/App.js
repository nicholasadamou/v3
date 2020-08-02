import React from "react";

import Layout from "./components/Layout/Layout";

import AboutMe from "./sections/AboutMe/AboutMe";
import Education from "./sections/Education/Education";
import Internships from "./sections/Internships/Internships";
import OpenSource from "./sections/OpenSource/OpenSource";
import Prototypes from "./sections/Prototypes/Prototypes";
import News from "./sections/News/News";
import Contact from "./sections/Contact/Contact";

function App() {
  return Layout(() => (
    <>
      <AboutMe />
      <hr />
      <Education />
      <hr />
      <Internships />
      <hr />
      <OpenSource />
      <hr />
      <Prototypes />
      <hr />
      <News />
      <hr />
      <Contact />
    </>
  ));
}

export default App;
