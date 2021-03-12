import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { device, until } from '../utilities/mixins';

import Layout from '../components/Layout/Layout';

library.add(faExclamationTriangle);

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

const NotFoundPage = () => (
  <Layout>
    <Container>
      <section className="hero is-fullheight is-widescreen">
        <div className="hero-body">
          <div className="container">
            <h1 className="header">
              <FontAwesomeIcon icon={['fas', 'exclamation-triangle']} /> 404
              Page Not Found.
            </h1>
            <p className="desc">
              Go back to{' '}
              <a
                href="/"
                aria-hidden="true"
                aria-label="go back to nicholasadamou.com"
                title="go back to nicholasadamou.com"
                rel="noopener noreferrer"
              >
                <em>nicholasadamou.com</em>
              </a>
              ?
            </p>
          </div>
        </div>
      </section>
    </Container>
  </Layout>
);

export default NotFoundPage;
