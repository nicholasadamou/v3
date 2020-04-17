import React, { Component } from "react";

import Context from "./Context";

import { isMobile } from "../utilities/utilities";

import GitHub from "github-api";

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavigationOpened: false,
      isMobile: isMobile.any(),
      github: new GitHub({
        username: "nicholasadamou",
        token: process.env.REACT_APP_GITHUB_TOKEN,
      }),
    };
  }

  toggleNavigation = () => {
    this.setState({
      isNavigationOpened: !this.state.isNavigationOpened,
    });
  };

  closeNavigation = (e) => {
    this.setState({
      isNavigationOpened: false,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <Context.Provider
        value={{
          ...this.state,
          toggleNavigation: this.toggleNavigation,
          closeNavigation: this.closeNavigation,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;
