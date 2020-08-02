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
				"https://news.cornellcollege.edu/wp-content/uploads/2020/06/NAdamou-3-768x1075.jpg",
        "https://news.cornellcollege.edu/2020/06/passion-computer-science-leads-job-ibm-adamou-՚20/",
      )}
			{Article(
				"Adamou holds computer science internship at IBM",
				"Nick Adamou will start his senior year with new insights and knowledge following his computer science internship.",
				"https://news.cornellcollege.edu/wp-content/uploads/2019/08/IMG_9485-1-1310x874.jpg",
        "https://news.cornellcollege.edu/2019/08/adamou-holds-computer-science-internship-ibm/"
			)}
    </Articles>
  </section>
);

export default News;
