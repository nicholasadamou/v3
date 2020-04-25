import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import Toggle from "./components/Toggle/Toggle";

import WaveEmoji from "../WaveEmoji/WaveEmoji";

import Logo from "../Logo/Logo";

import Context from "../../context/Context";

import styled from "styled-components";

import { device, until } from "../../utilities/mixins";

const Container = styled.div`
  background: white;

  position: fixed;
  top: 0;

  height: 100%;
  width: 130px;
  text-align: left;
  z-index: 999;

  &.opened {
    left: 0;
  }

  &.closed {
    left: -130px;
  }

  a {
    display: block;
    padding-left: 20px;
    text-decoration: none;

    color: var(--black);
    font-size: 16px;
    font-weight: normal;

    cursor: pointer;

    &:hover {
      color: var(--red);
      text-decoration: underline;
    }
  }

  nav {
    display: grid;
    grid-gap: 20px;

    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);

    text-align: left;
    width: 100%;

    font-family: var(--secondary);
    font-weight: 400;

    ${until(
      device.iPhone(),
      () => `
			font-size: 14px;
		`
    )}
  }

  #email {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);

    width: 100%;

    padding: 0 0 0 20px;

    font-family: var(--secondary);

    text-decoration: none;

    ${until(
      device.iPhone(),
      () => `
			font-size: 14px;
		`
    )}
  }
`;

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
        <Container
          className={
            isMobile ? (isNavigationOpened ? "opened" : "closed") : "opened"
          }
        >
          {Logo(() => scroll.scrollToTop())}
          <nav>
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
            <Link to="prototypes" smooth={true}>
              Prototypes
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

          <a
            href="mailto:nicholasadamouemail@gmail.com?subject=Hello"
            id="email"
            className="link"
          >
            Say "Hi" <WaveEmoji />
          </a>
        </Container>
      </div>
    );
  }
}

export default Nav;
