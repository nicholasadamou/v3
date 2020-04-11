import React from "react";

import moment from "moment";

import "./index.scss";

import Logo from "../../components/Logo/Logo";

const Footer = () => (
  <footer>
    <Logo />

    <div className="social">
      <ul>
        <a
          href="https://codepen.io/NicholasAdamou"
          target="_blank"
          aria-hidden="true"
          aria-label="CodePen"
          title="CodePen"
          rel="noopener noreferrer"
        >
          <li>
            <i className="fab fa-codepen" />
          </li>
        </a>
        <a
          href="https://github.com/nicholasadamou"
          target="_blank"
          aria-hidden="true"
          aria-label="GitHub"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <li>
            <i className="fab fa-github" />
          </li>
        </a>
        <a
          href="https://linkedin.com/in/nicholas-adamou/"
          target="_blank"
          aria-hidden="true"
          aria-label="LinkedIn"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <li className="linkedin">
            <i className="fab fa-linkedin" />
          </li>
        </a>
        <a
          href="https://twitter.com/NicholasAdamou"
          target="_blank"
          aria-hidden="true"
          aria-label="Twitter"
          title="Twitter"
          rel="noopener noreferrer"
        >
          <li className="twitter">
            <i className="fab fa-twitter" />
          </li>
        </a>
      </ul>
    </div>

    <p>
      Handcrafted with{" "}
      <i
        className="animated heartBeat infinite fas fa-heart"
        style={{ color: "red" }}
      />{" "}
      by myself. Copyright &copy; {moment(Date.now()).year()}.
    </p>
    <p>
      Made with{" "}
      <a
        href="https://bulma.io/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        Bulma
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/facebook/create-react-app"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        create-react-app
      </a>
      .
    </p>
    <p>
      Source code available on{" "}
      <a
        href="https://github.com/nicholasadamou/nicholasadamou.com"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default Footer;
