/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import {Head} from '@components';

import {GlobalStyle} from '@sass';

import 'carbon-components/scss/globals/scss/styles.scss';
import 'bulma/css/bulma.min.css';

const Layout = (props) => (
  <>
    <Head />

    <GlobalStyle />

    {props.children}
  </>
);

export default Layout;
