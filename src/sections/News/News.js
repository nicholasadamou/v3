import React from "react";

import Article from "../../components/Article/Article";

import Articles from "../../sass/Articles";

const News = () => (
  <section>
    <h2 className="title">Nick in the News</h2>
    <p className="subtitle">Some articles that were written about me.</p>

    <Articles>
			{Article(
        "Passion for computer science leads to job at IBM for Adamou",
				"An interest in the classic video game Asteroids for Windows 98 spawned a passion for computer science at a young age for Nicholas Adamou ՚20.",
				require("../../assets/images/news/nicholas-1.png"),
        "https://news.cornellcollege.edu/2020/06/passion-computer-science-leads-job-ibm-adamou-՚20/",
      )}
			{Article(
				"Adamou holds computer science internship at IBM",
				"Nick Adamou will start his senior year with new insights and knowledge following his computer science internship.",
				require("../../assets/images/news/nicholas-2.jpg"),
        "https://news.cornellcollege.edu/2019/08/adamou-holds-computer-science-internship-ibm/"
			)}
    </Articles>
  </section>
);

export default News;
