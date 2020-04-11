import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import Toggle from "./components/Toggle/Toggle";

import Logo from "../Logo/Logo";

import "./index.scss";
import Context from "../../context/Context";

class Nav extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = () => {
    const { isNavigationOpened, toggleNavigation } = this.context;

    if (!isNavigationOpened) {
      document.addEventListener("click", this.handleOutSideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutSideClick, false);
    }

    toggleNavigation();
  };

  handleOutSideClick = (e) => {
    const { closeNavigation } = this.context;

    if (this.node.contains(e.target)) {
      return;
    }

    closeNavigation();
  };

  render() {
    const { isNavigationOpened, isMobile } = this.context;

    return (
      <div
        ref={(node) => {
          this.node = node;
        }}
      >
        {isMobile ? <Toggle handleClick={this.handleClick} /> : ""}
        <div
          id={"navigation-container"}
          className={
            isMobile ? (isNavigationOpened ? "opened" : "closed") : "opened"
          }
        >
          {Logo(() => scroll.scrollToTop())}
          <nav id="navigation">
            <Link to="top" smooth={true}>
              About Me
            </Link>
            <Link to="education" smooth={true}>
              Education
            </Link>
            <Link to="internships" smooth={true}>
              Internships
            </Link>
            <Link to="websites" smooth={true}>
              Websites
            </Link>
            <Link to="open-source" smooth={true}>
              Open Source
            </Link>
            <Link to="experiments" smooth={true}>
              Experiments
            </Link>
            <Link to="papers" smooth={true}>
              Papers
            </Link>
            <Link to="news" smooth={true}>
              Nick in the News
            </Link>
            <Link to="contact" smooth={true}>
              Contact
            </Link>
          </nav>

          <a href="mailto:nicholasadamouemail@gmail.com" id="email-link">
            + Email Me
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
