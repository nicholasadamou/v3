import React from "react";

import Article from "../../components/Article/Article";

import Articles from "../../sass/Articles";

const News = () => (
  <section>
    <h2 className="title">Nick in the News</h2>
    <p className="subtitle">Some articles that were written about me.</p>

    <Articles>
			{Article(
        "Passion for computer science leads to job at IBM for Adamou ՚20",
        "An interest in the classic video game Asteroids for Windows 98 spawned a passion for computer science at a young age for Nicholas Adamou ՚20.",
        "https://news.cornellcollege.edu/2020/06/passion-computer-science-leads-job-ibm-adamou-՚20/",
        "🗞️",
        "newspaper-roll"
      )}
			{Article(
        "Cornell College shares this week's senior profile on Nicholas Adamou",
        "This week's senior profile is Nicholas Adamou '20. Congrats on your many accomplishments, Nicholas!",
        "https://www.instagram.com/p/CBlTkx2FFIA/?utm_source=ig_web_copy_link",
        "📸",
        "camera-flash"
      )}
      {Article(
        "Adamou holds computer science internship at IBM",
        "Nick Adamou will start his senior year with new insights and knowledge following his computer science internship.",
        "https://news.cornellcollege.edu/2019/08/adamou-holds-computer-science-internship-ibm/",
        "🗞️",
        "newspaper-roll"
      )}
			{Article(
        "Nick Adamou shares insights and knowledge following his computer science internship",
        "Nick Adamou (pictured on the left) started his senior year with new insights and knowledge following his computer science internship. He spent his summer as a software engineering intern at IBM under IBM’s Finance and Operations Department in Southbury, Connecticut. Way to go Nick!",
        "https://www.instagram.com/p/B1v-gCHHAer/?utm_source=ig_web_copy_link",
        "📸",
        "camera-flash"
      )}
    </Articles>
  </section>
);

export default News;
