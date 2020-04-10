import React from "react"

import Article from "./components/Article/Article"

import './index.scss'

const News = () => (
	<section id="news">
		<h2 className="title">Nick in the News</h2>
		<p className="subtitle">Some articles that were written about me.</p>

		<div className="articles">
			{
				Article(
					"Adamou holds computer science internship at IBM",
					"Nick Adamou will start his senior year with new insights and knowledge following his computer science internship.",
					"https://news.cornellcollege.edu/2019/08/adamou-holds-computer-science-internship-ibm/"
				)
			}
		</div>
	</section>
)

export default News
