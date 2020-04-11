import React, { useEffect } from "react";

import { isWebpSupported } from "react-image-webp/dist/utils";

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
          isWebpSupported()
            ? require("../../assets/images/websites/advanced-electrical-services/desktop/webp/desktop.webp")
            : require("../../assets/images/websites/advanced-electrical-services/desktop/png/desktop.png"),
          isWebpSupported()
            ? require("../../assets/images/websites/advanced-electrical-services/mobile/webp/mobile.webp")
            : require("../../assets/images/websites/advanced-electrical-services/mobile/png/mobile.png")
        )}
        {Website(
          "Cut, Paste, & Copy",
          "https://cut-paste-copy.github.io/",
          isWebpSupported()
            ? require("../../assets/images/websites/cut-paste-copy/desktop/webp/desktop.webp")
            : require("../../assets/images/websites/cut-paste-copy/desktop/png/desktop.png"),
          isWebpSupported()
            ? require("../../assets/images/websites/cut-paste-copy/mobile/webp/mobile.webp")
            : require("../../assets/images/websites/cut-paste-copy/mobile/png/mobile.png")
        )}
        {Website(
          "Nicholas Adamou's Personal Website",
          "https://nicholasadamou.com/",
          isWebpSupported()
            ? require("../../assets/images/websites/nicholas-adamou/desktop/webp/desktop.webp")
            : require("../../assets/images/websites/nicholas-adamou/desktop/png/desktop.png"),
          isWebpSupported()
            ? require("../../assets/images/websites/nicholas-adamou/mobile/webp/mobile.webp")
            : require("../../assets/images/websites/nicholas-adamou/mobile/png/mobile.png")
        )}
      </div>
    </section>
  );
};

export default Websites;
