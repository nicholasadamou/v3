import React, { useEffect } from "react";

import Website from "./components/Website/Website";

import "./index.scss";

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
    <section id="websites">
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

      <div className="websites">
        {Website(
          "Advanced Electrical Services",
          "https://advanced-electrical-services.netlify.com/",
          require("./assets/advanced-electrical-services/desktop/desktop.png"),
          require("./assets/advanced-electrical-services/mobile/mobile.png")
        )}
        {Website(
          "Cut, Paste, & Copy",
          "https://cut-paste-copy.github.io/",
          require("./assets/cut-paste-copy/desktop/desktop.png"),
          require("./assets/cut-paste-copy/mobile/mobile.png")
        )}
        {Website(
          "Nicholas Adamou's Personal Website",
          "https://nicholasadamou.com/",
          require("./assets/nicholas-adamou/desktop/desktop.png"),
          require("./assets/nicholas-adamou/mobile/mobile.png")
        )}
      </div>
    </section>
  );
};

export default Websites;
