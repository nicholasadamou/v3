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

import { device, until } from "../../utilities/mixins";

const Container = styled.section`
  padding: 0 25px;
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

const Education = () => (
  <Container id="education">
    <h2 className="title">
      Education{" "}
      <span role="img" aria-label="graduate">
        👨🏼‍🎓
      </span>
    </h2>
    <p className="subtitle">
      Some schools where I learned all that I know about software engineering.
    </p>

    <Experiences>
      {Experience(
        "Cornell College",
        "Bachelors of Arts, Computer Science",
        "Mt. Vernon, IA",
        "August 2018 - May 2020",
        () => (
          <>
            <em>Graduating </em> <strong>Summa Cum Laude</strong>
            <br />
            {" and "}
            <strong>With Honors</strong>
            {" in "}
            <em>Computer Science</em>
            <br />
            <em>Cumulative GPA:</em>
            {" 3.98 out of 4.0"}
            <br />
            <em>Overall</em>
            {" Class Rank: 5/212 ("}
            <em>2.35%</em>
            {")"}
          </>
        ),
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/cornell-college.png"
      )}
      {Experience(
        "Hartwick College",
        "Transferred; Computer Science Major",
        "Oneonta, NY",
        "August 2016 - May 2018",
        () => (
          <>
            <em>Cumulative GPA:</em>
            {" 3.96 out of 4.0"}
          </>
        ),
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/hartwick-college.png"
      )}
    </Experiences>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Computer Science Projects
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      Various projects that I've completed as an computer science student.
    </p>

    <Projects>
      {Project("distributed-load-balancer", "С", "С")}
      {Project("producer-consumer-simulator", "С", "С")}
      {Project("python-udp-chat-client", "🐍", "python")}
      {Project("python-dynamic-web-server", "🐍", "python")}
      {Project("python-proxy", "🐍", "python")}
      {Project("cpu-cache-simulator", "🐍", "python")}
      {Project("project-management-capstone-project", "С#", "C#")}
    </Projects>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Awards and Recognition{" "}
      <span role="img" aria-label="trophy">
        🏆
      </span>
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      Some awards that I have received from my studies at either institution.
    </p>

    <Awards>
      {AwardListing(
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/cornell-college.png",
        "Cornell College",
        () => (
          <>
            ➤ <em>High Honors Dean's List</em> (Fall ‘18)
            <br />➤ <em>Highest Honors Dean's List</em> (Spring ‘19, Fall '19,
            Spring '20)
            <br />➤ <em>Midwest Conference Academic All-Conference</em> (Fall
            '18, Spring ‘19, Fall '19, Spring '20)
            <br />➤ <em>
              Intercollegiate Tennis Association Scholar-Athlete
            </em>{" "}
            (Fall '18, Spring ‘19, Fall '19, Spring '20)
          </>
        )
      )}
      {AwardListing(
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/logos/hartwick-college.png",
        "Hartwick College",
        () => (
          <>
            ➤ <em>Dean's List</em> (Fall ‘16, ‘17), (Spring ‘17, ‘18)
            <br />➤ <em>Presidents List</em> (Fall '16, '17), (Spring ‘17, ‘18)
            <br />➤ <em>Empire8 Sportsman of the Year</em> (2017)
            <br />➤{" "}
            <em>
              The Philip S. Wilder Jr. Award for Academic Distinction
            </em>{" "}
            (2017, 2018)
            <br />➤ <em>Summer Entrepreneurship Award</em> (2017)
            <br />➤{" "}
            <em>
              The Departmental Award for Excellence in Computer Science
            </em>{" "}
            (2018)
          </>
        )
      )}
    </Awards>

    <h2 className="title" style={{ fontSize: "1.5rem" }}>
      Thoughts from my Professors and Coaches
    </h2>
    <p className="subtitle" style={{ fontSize: "1.1rem" }}>
      What my professors and coaches have to say about me{" "}
      <span role="img" aria-label="thought-balloon">
        💭
      </span>
    </p>

    <Reviews>
      {Review(
        "Peter Dumas",
        "Head Tennis Coach, Cornell College",
        "Nick is an incredibly gifted student and he will serve as an impressive example for publications about recent graduates and future recruitment of computer science majors.",
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/avatars/peter.jpg"
      )}
      {Review(
        "Peter Dumas",
        "Head Tennis Coach, Cornell College",
        "Nick is  an example of the best type of student that this environment can produce. He is active on campus and is a leader on our team.",
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/avatars/peter.jpg"
      )}
      {Review(
        "Peter Dumas",
        "Head Tennis Coach, Cornell College",
        "I have known Nick since he was a junior in high school and " +
          "I recruited Nick to be a member of my men’s tennis team at Hartwick College starting in 2016. " +
          "During this time, I have known Nick to be extremely diligent and proficient in his approach with everything that he does.",
        "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/avatars/peter.jpg"
      )}
    </Reviews>

    {FooterText(
      "Read more about my education on my ",
      "LinkedIn",
      "https://linkedin.com/in/nicholas-adamou/",
      "linkedin"
    )}
  </Container>
);

export default Education;
