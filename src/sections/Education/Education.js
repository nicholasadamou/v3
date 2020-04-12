import React from "react";

import "./index.scss";

import Awards from "../../components/Awards/Awards";
import Experience from "../../components/Experience/Experience";
import Review from "../../components/Review/Review";
import Project from "../../components/Project/Project";
import SkeletonProject from "../../components/SkeletonProject/SkeletonProject";
import FooterText from "../../components/FooterText/FooterText";

import GitHub from "github-api";

const github = new GitHub({
  username: "nicholasadamou",
  token: process.env.REACT_APP_GITHUB_TOKEN,
});

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      projects: [],
    };
  }

  componentDidMount() {
    github
      .getRepo("nicholasadamou", "distributed-load-balancer")
      .getDetails()
      .then((response) => {
        const { id, name, description, html_url } = response.data;

        this.setState({
          projects: this.state.projects.concat({
            id,
            name,
            description,
            link: html_url,
            emoji: "С",
            label: "C",
          }),
        });

        github
          .getRepo("nicholasadamou", "producer-consumer-simulator")
          .getDetails()
          .then((response) => {
            const { id, name, description, html_url } = response.data;

            this.setState({
              projects: this.state.projects.concat({
                id,
                name,
                description,
                link: html_url,
                emoji: "С",
                label: "C",
              }),
            });

            github
              .getRepo("nicholasadamou", "python-udp-chat-client")
              .getDetails()
              .then((response) => {
                const { id, name, description, html_url } = response.data;

                this.setState({
                  projects: this.state.projects.concat({
                    id,
                    name,
                    description,
                    link: html_url,
                    emoji: "🐍",
                    label: "snake",
                  }),
                });

                github
                  .getRepo("nicholasadamou", "python-dynamic-web-server")
                  .getDetails()
                  .then((response) => {
                    const { id, name, description, html_url } = response.data;

                    this.setState({
                      projects: this.state.projects.concat({
                        id,
                        name,
                        description,
                        link: html_url,
                        emoji: "🐍",
                        label: "snake",
                      }),
                    });
                  });

                github
                  .getRepo("nicholasadamou", "python-proxy")
                  .getDetails()
                  .then((response) => {
                    const { id, name, description, html_url } = response.data;

                    this.setState({
                      projects: this.state.projects.concat({
                        id,
                        name,
                        description,
                        link: html_url,
                        emoji: "🐍",
                        label: "snake",
                      }),
                    });
                  });

                github
                  .getRepo("nicholasadamou", "cpu-cache-simulator")
                  .getDetails()
                  .then((response) => {
                    const { id, name, description, html_url } = response.data;

                    this.setState({
                      projects: this.state.projects.concat({
                        id,
                        name,
                        description,
                        link: html_url,
                        emoji: "🐍",
                        label: "snake",
                      }),
                    });
                  });

                github
                  .getRepo(
                    "nicholasadamou",
                    "project-management-capstone-project"
                  )
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
                        emoji: "С#",
                        label: "C#",
                      }),
                    });
                  });
              });
          });
      });
  }

  render() {
    const { projects, loading } = this.state;

    return (
      <section id="education">
        <h2 className="title">Education</h2>
        <p className="subtitle">
          Some schools where I learned all that I know about software
          engineering.
        </p>

        <div className="experiences">
          {Experience(
            "Cornell College",
            "Bachelors of Arts, Computer Science",
            "Mt. Vernon, IA",
            "August 2018 - May 2020",
            () => (
              <>
                <em>Cumulative GPA:</em>
                {" 3.98 out of 4.0"}
                <br />
                <em>Overall</em>
                {" Class Rank: 5/212 ("}
                <em>2.35%</em>
                {")"}
              </>
            ),
            "https://media-exp1.licdn.com/dms/image/C4D0BAQF7q4SbDai9Og/company-logo_100_100/0?e=1594857600&v=beta&t=MfrSYYJ8IqCtfKL_ymEhfW_MXXxHXpSd9SFWDamE31M"
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
            "https://media-exp1.licdn.com/dms/image/C510BAQGKNCEAE6ptOQ/company-logo_100_100/0?e=1594857600&v=beta&t=HxyZzaPhdKwZWlF55i7YDRhnoNzOr5WhWu3IHJLV7Xo"
          )}
        </div>

        <h2 className="title" style={{ fontSize: "1.5rem" }}>
          Computer Science Projects
        </h2>
        <p className="subtitle" style={{ fontSize: "1.1rem" }}>
          Various projects that I've completed as an computer science student.
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
          Awards and Recognition{" "}
          <span role="img" aria-label="trophy">
            🏆
          </span>
        </h2>
        <p className="subtitle" style={{ fontSize: "1.1rem" }}>
          Some awards that I have received from my studies at either
          institution.
        </p>

        <div className="awards">
          {Awards(
            "https://media-exp1.licdn.com/dms/image/C4D0BAQF7q4SbDai9Og/company-logo_100_100/0?e=1594857600&v=beta&t=MfrSYYJ8IqCtfKL_ymEhfW_MXXxHXpSd9SFWDamE31M",
            "Cornell College",
            () => (
              <>
                ➤ <em>High Honors Dean's List</em> (Fall ‘18)
                <br />➤ <em>Highest Honors Dean's List</em> (Spring ‘19, Fall
                '19)
                <br />➤ <em>Midwest Conference Academic All-Conference</em>{" "}
                (Fall '18, Spring ‘19, Fall '19)
                <br />➤{" "}
                <em>Intercollegiate Tennis Association Scholar-Athlete</em>{" "}
                (Fall '18, Spring ‘19, Fall '19)
              </>
            )
          )}
          {Awards(
            "https://media-exp1.licdn.com/dms/image/C510BAQGKNCEAE6ptOQ/company-logo_100_100/0?e=1594857600&v=beta&t=HxyZzaPhdKwZWlF55i7YDRhnoNzOr5WhWu3IHJLV7Xo",
            "Hartwick College",
            () => (
              <>
                ➤ <em>Dean's List</em> (Fall ‘16, ‘17), (Spring ‘17, ‘18)
                <br />➤ <em>Presidents List</em> (Fall '16, '17), (Spring ‘17,
                ‘18)
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
        </div>

        <h2 className="title" style={{ fontSize: "1.5rem" }}>
          Thoughts from my Professors and Coaches
        </h2>
        <p className="subtitle" style={{ fontSize: "1.1rem" }}>
          What my professors and coaches have to say about me{" "}
          <span role="img" aria-label="thought-balloon">
            💭
          </span>
        </p>

        <div id="reviews">
          {Review(
            "Peter Dumas",
            "Head Tennis Coach, Cornell College",
            "Nick is an incredibly gifted student and he will serve as an impressive example for publications about recent graduates and future recruitment of computer science majors.",
            require("../../assets/images/reviewers/peter.jpg")
          )}
          {Review(
            "Peter Dumas",
            "Head Tennis Coach, Cornell College",
            "Nick is  an example of the best type of student that this environment can produce. He is active on campus and is a leader on our team.",
            require("../../assets/images/reviewers/peter.jpg")
          )}
          {Review(
            "Peter Dumas",
            "Head Tennis Coach, Cornell College",
            "I have known Nick since he was a junior in high school and " +
              "I recruited Nick to be a member of my men’s tennis team at Hartwick College starting in 2016. " +
              "During this time, I have known Nick to be extremely diligent and proficient in his approach with everything that he does.",
            require("../../assets/images/reviewers/peter.jpg")
          )}
        </div>

        {FooterText(
          "Read more about my education on my ",
          "LinkedIn",
          "https://linkedin.com/in/nicholas-adamou/",
          "linkedin"
        )}
      </section>
    );
  }
}

export default Education;
