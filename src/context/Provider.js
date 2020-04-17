import React, { Component } from "react";

import Context from "./Context";

import { isMobile } from "../utilities/utilities";

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavigationOpened: false,
      isMobile: isMobile.any(),
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
