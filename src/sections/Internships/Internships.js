import React from "react";

import "./index.scss";

import Experience from "./components/Experience/Experience";
import Review from "./components/Review/Review";
import SkeletonProject from "./components/SkeletonProject/SkeletonProject";
import Project from "./components/Project/Project";
import FooterText from "../../components/FooterText/FooterText";

import GitHub from "github-api";

const github = new GitHub({
  username: "nicholasadamou",
  token: process.env.REACT_APP_GITHUB_TOKEN,
});

class Internships extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      projects: [],
    };
  }

  componentDidMount() {
    github
      .getRepo("nicholasadamou", "mack-media-group-internship-project")
      .getDetails()
      .then((response) => {
        const { id, name, description, html_url } = response.data;

        this.setState({
          projects: this.state.projects.concat({
            id,
            name,
            description,
            link: html_url,
            emoji: "📱",
            label: "smart-phone",
          }),
        });

        github
          .getRepo("nicholasadamou", "down-to-network")
          .getDetails()
          .then((response) => {
            const { id, name, description, html_url } = response.data;

            this.setState({
              loading: false,
              projects: this.state.projects.concat({
                id,
                name,
                description,
                link: html_url,
                emoji: "🖇",
                label: "two-paperclips",
              }),
            });
          });
      });
  }

  render() {
    const { projects, loading } = this.state;

    return (
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
            <img
              src={require("../../assets/images/internships/ibm.png")}
              alt="IBM"
            />
          </a>
          <a
            href="https://flyblackbird.com/"
            target="_blank"
            aria-hidden="true"
            rel="noopener noreferrer"
            title="flyblackbird"
          >
            <img
              src={require("../../assets/images/internships/blackbird.png")}
              alt="flyblackbird"
            />
          </a>
          <a
            href="https://mackmediagroup.com/"
            target="_blank"
            aria-hidden="true"
            rel="noopener noreferrer"
            title="Mack Media Group"
          >
            <img
              src={require("../../assets/images/internships/mack-media-group.png")}
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
            "Continued the work I finished as a intern, but now as a Co-Op while I was away at school. I participated in weekly stand-up meetings relating to the JIRA stories I was assigned. With each story, " +
              "I assisted the team remotely with various bug fixes and quality assurance testing of the front-end and back-end of the application.",
            "https://media-exp1.licdn.com/dms/image/C4E0BAQGnYJiWaENTZA/company-logo_100_100/0?e=1594857600&v=beta&t=FZQRHFvZPD4nobNJtCL1WL2cwahwJ3it9m9izzr25GY"
          )}
          {Experience(
            "IBM",
            "Software Engineering Intern",
            "Southbury, CT",
            "May 2019 - August 2019",
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
            "As a software engineer at Blackbird, I worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging " +
              "React, React Native, React Native Web, GraphQL, Apollo, and ES6 JavaScript. In addition, I provided QA (Quality Assurance) and unit testing on multiple builds of the Blackbird web and mobile apps.",
            "https://media-exp1.licdn.com/dms/image/C4E0BAQH2SO-POcIrLQ/company-logo_100_100/0?e=1594857600&v=beta&t=dCwd97PktvKZ9AKGh_xbZW5alcazfSkBo1FxJRdg8Hc"
          )}
          {Experience(
            "Mack Media Group",
            "Software Engineering Intern",
            "Brookfield, CT",
            "December 2016 - December 2016",
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
          {loading
            ? projects.map((current, index) => {
                return SkeletonProject(index, "⏳", "hourglass");
              })
            : projects.map((project) => {
                return Project(project);
              })}
        </div>

        <h2 className="title" style={{ fontSize: "1.5rem" }}>
          What Others are Sayin' About Me
        </h2>
        <p className="subtitle" style={{ fontSize: "1.1rem" }}>
          Many people who I have worked with seem to think that I am awesome, I
          guess.{" "}
          <span role="img" aria-label="tipping-hand-man">
            💁🏼‍♂️
          </span>
          <span role="img" aria-label="rolling-on-the-floor-laughing">
            🤣
          </span>
        </p>

        <div id="reviews">
          {Review(
            "Kamal Shaham",
            "Software Engineer, IBM",
            "Nick that ToggleContent module was so clever, mad props lol had to make a whole module just to define a callback haha i was like oOoOoOo he slick",
            require("../../assets/images/reviewers/kamal.jpg")
          )}
          {Review(
            "Stephen Alt",
            "Software Developer Intern, IBM",
            "Nick is a YOUNG GOD on the REACT",
            require("../../assets/images/reviewers/stephen.jpg")
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
  }
}

export default Internships;
