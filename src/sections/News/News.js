import React from "react";

import Article from "../../components/Article/Article";

import Articles from "../../sass/Articles";

const News = () => (
  <section>
    <h2 className="title">Nick in the News</h2>
    <p className="subtitle">Some articles that were written about me.</p>

    <Articles>
      {Article(
        "Adamou holds computer science internship at IBM",
        "Nick Adamou will start his senior year with new insights and knowledge following his computer science internship.",
        "https://news.cornellcollege.edu/2019/08/adamou-holds-computer-science-internship-ibm/",
        "🗞️",
        "newspaper-roll"
      )}
    </Articles>
  </section>
);

export default News;
