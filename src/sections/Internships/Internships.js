import React from "react";

import "./index.scss";

import Awards from "../../components/Awards/Awards";
import Experience from "../../components/Experience/Experience";
import Review from "../../components/Review/Review";
import Project from "../../components/Project/Project";
import FooterText from "../../components/FooterText/FooterText";

const Internships = () => (
  <section id="internships">
    <h2 className="title">Internships</h2>
    <p className="subtitle">
      Some companies where I've had the privilege to intern at in the past.
    </p>

    <div className="internships">
      <a
        href="https://ibm.com/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        title="IBM"
      >
        <img src={require("./assets/ibm.png")} alt="IBM" />
      </a>
      <a
        href="https://flyblackbird.com/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        title="flyblackbird"
      >
        <img src={require("./assets/blackbird.png")} alt="flyblackbird" />
      </a>
      <a
        href="https://mackmediagroup.com/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        title="Mack Media Group"
      >
        <img
          src={require("./assets/mack-media-group.png")}
          alt="Mack Media Group"
        />
      </a>
    </div>

    <h2 className="title" style={{ fontSize: "1.6rem" }}>
      Internship Experiences
    </h2>
    <p className="subtitle" style={{ fontSize: "1.125rem" }}>
      What I accomplished while I an intern at these respective companies.
    </p>

    <div className="experiences">
      {Experience(
        "IBM",
        "Software Engineering Co-Op",
        "Southbury, CT",
        "August 2019 - Present",
        () =>
          "Continued the work I finished as a intern, but now as a Co-Op while I was away at school. I participated in weekly stand-up meetings relating to the JIRA stories I was assigned. With each story, " +
          "I assisted the team remotely with various bug fixes and quality assurance testing of the front-end and back-end of the application.",
        "https://media-exp1.licdn.com/dms/image/C4E0BAQGnYJiWaENTZA/company-logo_100_100/0?e=1594857600&v=beta&t=FZQRHFvZPD4nobNJtCL1WL2cwahwJ3it9m9izzr25GY"
      )}
      {Experience(
        "IBM",
        "Software Engineering Intern",
        "Southbury, CT",
        "May 2019 - August 2019",
        () =>
          "I worked and collaborated with a diverse team of developers, UX/UI designers, PO's, IM's, and testers from around the world in order to develop a web application utilizing React " +
          "for the front-end along with Jenkins for unit testing, and a variety of technologies for the back-end, such as SQL, Java with JDBC, Kubernetes for container-orchestration, Apache Kafka" +
          " for stream-processing of micro-services and Docker for containerization.",
        "https://media-exp1.licdn.com/dms/image/C4E0BAQGnYJiWaENTZA/company-logo_100_100/0?e=1594857600&v=beta&t=FZQRHFvZPD4nobNJtCL1WL2cwahwJ3it9m9izzr25GY"
      )}
      {Experience(
        "Blackbird",
        "Software Engineering Intern",
        "San Francisco, CA",
        "June 2018 - August 2018",
        () =>
          "As a software engineer at Blackbird, I worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging " +
          "React, React Native, React Native Web, GraphQL, Apollo, and ES6 JavaScript. In addition, I provided QA (Quality Assurance) and unit testing on multiple builds of the Blackbird web and mobile apps.",
        "https://media-exp1.licdn.com/dms/image/C4E0BAQH2SO-POcIrLQ/company-logo_100_100/0?e=1594857600&v=beta&t=dCwd97PktvKZ9AKGh_xbZW5alcazfSkBo1FxJRdg8Hc"
      )}
      {Experience(
        "Mack Media Group",
        "Software Engineering Intern",
        "Brookfield, CT",
        "December 2016 - December 2016",
        () =>
          "Leveraged Google AMP pages to develop a user-friendly home page for the agency. The AMP page conversion provided an 80% faster page load time than a traditional web page load time.",
        "https://media-exp1.licdn.com/dms/image/C4D0BAQFvNy_qa6NVAA/company-logo_100_100/0?e=1594857600&v=beta&t=CgLsZPYQ1LQUQUrH80B50JIk05O0UMp3ZXrRHN1pIog"
      )}
    </div>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Internship Projects
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      Various projects that I've completed as an intern at these companies.
    </p>

    <div className="projects">
      {Project("mack-media-group-internship-project", "📱", "smart-phone")}
      {Project("producer-consumer-simulator", "🖇", "two-paperclips")}
    </div>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Awards and Recognition{" "}
      <span role="img" aria-label="trophy">
        🏆
      </span>
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      Some awards that I have received while I was an intern.
    </p>

    <div className="awards">
      {Awards(
        "https://media-exp1.licdn.com/dms/image/C4E0BAQGnYJiWaENTZA/company-logo_100_100/0?e=1594857600&v=beta&t=FZQRHFvZPD4nobNJtCL1WL2cwahwJ3it9m9izzr25GY",
        "IBM",
        () => (
          <>
            ➤ <strong>2019 HackCIO Project Winner</strong> voted{" "}
            <em>Most Likely to be Used by IBM</em>
          </>
        )
      )}
    </div>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Thoughts from my Co-Workers
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      What my co-workers have to say about my work.{" "}
    </p>

    <div id="reviews">
      {Review(
        "Kamal Shaham",
        "Software Engineer, IBM",
        "Nick that ToggleContent module was so clever, mad props lol had to make a whole module just to define a callback haha i was like oOoOoOo he slick",
        require("./assets/kamal.jpg")
      )}
      {Review(
        "Stephen Alt",
        "Software Developer Intern, IBM",
        "Nick is a YOUNG GOD on the REACT",
        require("./assets/stephen.jpg")
      )}
    </div>

    {FooterText(
      "Read more about my internships on my ",
      "LinkedIn",
      "https://linkedin.com/in/nicholas-adamou/",
      "linkedin"
    )}
  </section>
);
export default Internships;
