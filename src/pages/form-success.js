import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout';

import { device, until } from 'utilities/mixins';

library.add(faThumbsUp);

const Container = styled.div`
  .header {
    font-size: 64px;
    color: var(--black);

    margin-bottom: 10px;
  }

  ${until(
    device.iPhone(),
    () => `
			.header {
				font-size: 28px;
			}
		`
  )}
  .desc {
    font-size: 24px;
    color: var(--black);
  }

  ${until(
    device.iPhone(),
    () => `
			.desc {
				font-size: 18px;
			}
		`
  )}

  em {
    font-size: 24px;

    ${until(
      device.iPhone(),
      () => `
			font-size: 18px;
		`
    )}
  }
`;

class FormSuccessPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      if (typeof window !== 'undefined') {
        window.location = '/';
      }
    }

    return (
      <Layout>
        <Container>
          <section className="hero is-fullheight is-widescreen">
            <div className="hero-body">
              <div className="container">
                <h1 className="header">
                  Form Submitted successfully!{' '}
                  <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
                </h1>
                <p className="desc">
                  Please wait while we return you to <em>nicholasadamou.com</em>
                </p>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    );
  }
}

export default FormSuccessPage;
