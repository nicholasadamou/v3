import React, { useEffect } from "react";

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
          "https://advanced-electrical-services.netlify.com/",
          "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/websites/advanced-electrical-services/desktop/desktop.png",
          "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/websites/advanced-electrical-services/mobile/mobile.png"
        )}
        {Website(
          "Cut, Paste, & Copy",
          "https://cut-paste-copy.github.io/",
          "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/websites/cut-paste-copy/desktop/desktop.png",
          "https://res.cloudinary.com/nicholasadamou/image/upload/nicholasadamou.com/websites/cut-paste-copy/mobile/mobile.png"
        )}
        {Website(
          "Nicholas Adamou's Personal Website",
          "https://nicholasadamou.com/",
          "https://res.cloudinary.com/nicholasadamou/image/upload/v1589155405/nicholasadamou.com/websites/nicholasadamou/desktop/desktop.png",
          "https://res.cloudinary.com/nicholasadamou/image/upload/v1589155485/nicholasadamou.com/websites/nicholasadamou/mobile/mobile.png"
        )}
      </Sites>
    </Container>
  );
};

export default Websites;
