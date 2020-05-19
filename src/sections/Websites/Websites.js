import React, {useEffect, useState} from "react";

import Website from "./components/Website/Website";

import styled from "styled-components";

const Container = styled.section`
  overflow: hidden;
`;

const Sites = styled.div`
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  margin: 0 20px 4rem;
`;

const emphasize = () => {
	const websites = document.querySelectorAll(".website");
	const target = Math.floor(Math.random() * websites.length);

	websites[target].classList.add("is-emphasized");

	for (let i = 0; i < websites.length; i++) {
		if (i === target) continue;

		websites[i].classList.remove("is-emphasized");
	}
};

const getImageURL = (url, type) => {
	let prefix = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.href.includes('localhost'))
		prefix = `${window.location.protocol}//${window.location.hostname}:8888`

	return `${prefix}/.netlify/functions/website?url=${url}&type=${type}`
}

const Websites = () => {
	useEffect(() => {
		setInterval(() => {
			emphasize();
		}, 4000);
	});

	return (
		<Container id="websites">
			<h2 className="title">
				Websites I've Made{" "}
				<span role="img" aria-label="candy">
          🍫
        </span>
			</h2>
			<p className="subtitle">
				A selection of websites that was designed, programmed and delivered by
				me.
			</p>

			<Sites>
				{Website(
					"Advanced Electrical Services",
					"http://advanced-electrical-services.netlify.app/",
					getImageURL('advanced-electrical-services.netlify.app', 'desktop'),
					getImageURL('advanced-electrical-services.netlify.app', 'mobile')
				)}
				{Website(
					"Cut, Paste, & Copy",
					"https://cutpastecopy.github.io/",
					getImageURL('cutpastecopy.github.io', 'desktop'),
					getImageURL('cutpastecopy.github.io', 'mobile')
				)}
				{Website(
					"Nicholas Adamou's Personal Website",
					"https://nicholasadamou.com/",
					getImageURL('nicholasadamou.com', 'desktop'),
					getImageURL('nicholasadamou.com', 'mobile')
				)}
			</Sites>
		</Container>
	);
};

export default Websites;
