import React from "react";

import AwardListing from "../../components/AwardListing/AwardListing";
import Experience from "../../components/Experience/Experience";
import Review from "../../components/Review/Review";
import Project from "../../components/Project/Project";
import FooterText from "../../components/FooterText/FooterText";

import Awards from "../../sass/Awards";
import Projects from "../../sass/Projects";
import Reviews from "../../sass/Reviews";

import styled from "styled-components";

import { useCloudinary } from "../../utilities/utilities";
import { device, until } from "../../utilities/mixins";

const Container = styled.section`
  padding: 0 25px;
`;

const Companies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;

  margin: 2rem 1rem 2rem;

  ${until(
    device.iPhone(),
    () => `
		display: block;

		margin: 0;
	`
  )}

  a {
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;

    &:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    &:last-child > img {
      margin-bottom: 0;
    }

    img {
      width: 70%;

      ${until(
        device.iPhone(),
        () => `
				display: block;

				margin: 0 auto 65px;

				width: 50%;
			`
      )}
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
	`
  )}
`;

const Internships = () => (
  <Container id="internships">
    <h2 className="title">
      Internships{" "}
      <span role="img" aria-label="coder">
        👨🏼‍💻
      </span>
    </h2>
    <p className="subtitle">
      Some companies where I've had the privilege to intern at in the past.
    </p>

    <Companies>
      <a
        href="https://ibm.com/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        title="IBM"
      >
        <img
          src={useCloudinary(
            "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/ibm_alt.png"
          )}
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
          src={useCloudinary(
            "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/blackbird_alt.png"
          )}
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
          src={useCloudinary(
            "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/mack-media-group_alt.png"
          )}
          alt="Mack Media Group"
        />
      </a>
    </Companies>

    <h2 className="title" style={{ fontSize: "1.6rem" }}>
      Internship Experiences
    </h2>
    <p className="subtitle" style={{ fontSize: "1.125rem" }}>
      What I accomplished while I was an intern at these respective companies.
    </p>

    <Experiences>
      {Experience(
        "IBM",
        "Software Engineering Co-Op",
        "Southbury, CT",
        "August 2019 - Present",
        () =>
          "Continued the work I finished as a intern, but now as a Co-Op while I was away at school. I participated in weekly stand-up meetings relating to the JIRA stories I was assigned. With each story, " +
          "I assisted the team remotely with various bug fixes and quality assurance testing of the front-end and back-end of the application.",
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/ibm.png"
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
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/ibm.png"
      )}
      {Experience(
        "Blackbird",
        "Software Engineering Intern",
        "San Francisco, CA",
        "June 2018 - August 2018",
        () =>
          "As a software engineer at Blackbird, I worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging " +
          "React, React Native, React Native Web, GraphQL, Apollo, and ES6 JavaScript. In addition, I provided QA (Quality Assurance) and unit testing on multiple builds of the Blackbird web and mobile apps.",
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/blackbird.png"
      )}
      {Experience(
        "Mack Media Group",
        "Software Engineering Intern",
        "Brookfield, CT",
        "December 2016 - December 2016",
        () =>
          "Leveraged Google AMP pages to develop a user-friendly home page for the agency. The AMP page conversion provided an 80% faster page load time than a traditional web page load time.",
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/mack-media-group.png"
      )}
    </Experiences>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Internship Projects
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      Various projects that I've completed as an intern at these companies.
    </p>

    <Projects>
      {Project("mack-media-group-internship-project", "📱", "smart-phone")}
      {Project("down-to-network", "🖇", "two-paperclips")}
    </Projects>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Awards and Recognition{" "}
      <span role="img" aria-label="trophy">
        🏆
      </span>
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      Some awards that I have received while I was an intern.
    </p>

    <Awards>
      {AwardListing(
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/ibm.png",
        "IBM",
        () => (
          <>
            ➤ <strong>2019 HackCIO Project Winner</strong> voted{" "}
            <em>Most Likely to be Used by IBM</em>
          </>
        )
      )}
    </Awards>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Thoughts from my Co-Workers
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      What my co-workers have to say about my work.{" "}
    </p>

    <Reviews>
      {Review(
        "Kamal Shaham",
        "Software Engineer, IBM",
        "Nick that ToggleContent module was so clever, mad props lol had to make a whole module just to define a callback haha i was like oOoOoOo he slick",
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/avatars/kamal.jpg"
      )}
      {Review(
        "Stephen Alt",
        "Software Developer Intern, IBM",
        "Nick is a YOUNG GOD on the REACT",
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/avatars/stephen.jpg"
      )}
    </Reviews>

    {FooterText(
      "Read more about my internships on my ",
      "LinkedIn",
      "https://linkedin.com/in/nicholas-adamou/",
      "linkedin"
    )}
  </Container>
);
export default Internships;
