import React from 'react';

import Repository from '../../components/Repository/Repository';

import FooterText from '../../components/FooterText/FooterText';

import styled from 'styled-components';

import { device, until } from '../../utilities/mixins';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Repositories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 2rem 1rem 2rem;

  text-align: left;

	${until(
    '932px',
    () => `
		margin: 2rem 0.75rem 2rem;
	`,
  )}

  ${until(
    device.iPad(),
    () => `
		grid-template-columns: 1fr;
	`,
  )}

  ${until(
    device.iPhone(),
    () => `
		grid-template-columns: 1fr;

		margin: 0;
	`,
  )}
`;

const OpenSource = () => (
  <section>
    <h2 className="title">
      Open Source{' '}
      <FontAwesomeIcon
        icon={['fab', 'git-alt']}
        style={{ fontSize: '2.5rem', color: 'var(--light-black)' }}
      />
    </h2>
    <p className="subtitle">
      I am an{' '}
      <a
        href="http://git-awards.com/users/nicholasadamou"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        avid open-sourcer
      </a>{' '}
      and I have{' '}
      <a
        href="https://github.com/nicholasadamou"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        many repositories
      </a>
      .
    </p>

    <Repositories>
      {Repository('minipwner')}
      {Repository('auto-wifi-hotspot')}
      {Repository('starter-kit')}
      {Repository('pifi')}
      {Repository('megalith')}
      {Repository('set-me-up')}
    </Repositories>

    {FooterText(
      'More can be found on my ',
      'GitHub',
      'https://github.com/nicholasadamou',
      'github',
    )}
  </section>
);

export default OpenSource;
