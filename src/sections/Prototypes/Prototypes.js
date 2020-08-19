import React from 'react';

import Pen from './components/Pen/Pen';

import FooterText from '../../components/FooterText/FooterText';

import styled from 'styled-components';

import { device, until } from '../../utilities/mixins';

const Pens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  text-align: left;

  margin: 2rem 1rem 2rem;

  ${until(
    device.iPhone(),
    () => `
		grid-template-columns: 1fr;

		margin: 0;
	`,
  )}
`;

const Prototypes = () => (
  <section>
    <h2 className="title">
      Prototypes{' '}
      <span role="img" aria-label="test tube">
        🧪
      </span>
    </h2>
    <p className="subtitle">Experiments I've done in JavaScript.</p>

    <Pens>
      {Pen(
        'Low Poly Earth',
        'THREE.js implementation of the Earth using only polygons.',
        'https://codepen.io/NicholasAdamou/pen/xQKxgN',
        '🌎',
        'earth americas',
      )}
      {Pen(
        'Star Field',
        'A multi-layered star-field constructed using ES6 JavaScript.',
        'https://codepen.io/NicholasAdamou/pen/QZVddm',
        '🌃',
        'night with stars',
      )}
      {Pen(
        'Matrix',
        'The matrix text effect implemented using ES6 JavaScript.',
        'https://codepen.io/NicholasAdamou/pen/oaQMZV',
        '🖥️',
        'desktop computer',
      )}
    </Pens>

    {FooterText(
      'More can be found on my ',
      'CodePen',
      'https://codepen.io/NicholasAdamou',
      'codepen',
    )}
  </section>
);

export default Prototypes;
