import * as React from 'react';

import styled from 'styled-components';

import NavigationContext from "@contexts/NavigationContext";

import Header from "@components/Header";
import ScrollDown from "@components/ScrollDown";
import MobileNavigation from "@components/MobileNavigation";

import Overlay from '@sass/components/Overlay';

import {device, until} from '@utilities/mixins';

const Background = styled.div`
	position: relative;

	background-color: var(--black);
`;

const Container = styled.div`
	display: grid;

	height: 100vh;

	padding: 0 25px;

	color: var(--white);

  ${until(
    device.MacbookAir(),
    () => `
      display: flex;
      flex-direction: column;
      gap: 20vh;

			height: 100vh;
		`
  )}

  ${until(
    device.iPadPro12Landscape(),
    () => `
      gap: 22vh;

			height: 92.5vh;
		`
  )}

  @media (max-width: ${device.iPadPro()}) and (max-height: ${device.iPadPro12Landscape()}) {
  gap: 2vh;

  height: 94.5vh;
}

	${until(
		device.iPhone12(),
		() => `
      display: flex;
      flex-direction: column;
      gap: 35px;

		  height: 85.5vh;

		  padding: 0 1rem;
		`
	)}
`;

const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  place-content: flex-start;

  margin: 1rem 10rem 5vh;

  overflow: hidden;

  ${until(
    '1866px',
    () => `
      margin: 1rem 4.5rem 5vh;
		`
  )}
  ${until(
    device.MacbookAir(),
    () => `
      margin: 0.5rem 3rem;
		`
  )}
  ${until(
    device.iPadPro(),
    () => `
      margin: 0.5rem 0;
		`
  )}
  ${until(
    device.iPhone12(),
    () => `
      place-content: flex-start;

      margin: 0;
		`
  )}
  h1 {
    margin: 0;

    font-family: var(--primary);
    font-size: clamp(60px, 8vw, 5vw);
    font-weight: 900;
    color: var(--white);

    ${until(
      '1600px',
      () => `
      font-size: 6vw;
		`
    )}
    ${until(
      device.iPadPro(),
      () => `
      font-size: 14vw;
		`
    )}
    ${until(
      device.iPhone12(),
      () => `
        font-size: clamp(60px, 8vw, 80px);
		`
    )}
    span {
      color: var(--blue);
      font-size: inherit;
    }
  }

  h2 {
    margin-top: 10px;

    max-width: 1600px;

    font-family: var(--secondary);
    font-size: clamp(32px, 4vw, 2vw);
    font-weight: 400;
    color: var(--white);
    line-height: 1.4;

    ${until(
      '2722px',
      () => `
      max-width: 1300px;
		`
    )}
    ${until(
      '1866px',
      () => `
      max-width: 1000px;
		`
    )}
    ${until(
      '1600px',
      () => `
      font-size: 3vw;
		`
    )}
    ${until(
      device.iPadPro(),
      () => `
      font-size: 7vw;
      `
    )}
    ${until(
      device.iPhone12(),
      () => `
       font-size: clamp(32px, 4vw, 32px);
		`
    )}
    span {
      color: var(--blue);
      font-size: inherit;
    }
  }

  .email-link {
    margin-top: 50px;

    padding: 1.25rem 1.75rem;

    border: 1px solid var(--white);
    border-radius: 4px;

    background-color: transparent;

    font-family: var(--secondary);
    font-size: var(--fz-sm);
    color: var(--white);
    text-decoration: none;
    line-height: 1;

    cursor: pointer;

    &:hover {
      background-color: rgba(var(--white), 0.7);

      outline: none;
    }
  }
`;

const Hero = (props) => {
	const { toggleNavigation } = React.useContext(NavigationContext);

	return (
		<Background>
			<Container>
				<Header />
				<Jumbotron>
          <h1><span>Full Stack</span> Software Engineer.</h1>
					<h2>
						Focused on building accessible, human-centered financial products at{' '}
            <a
              href="https://ibm.com"
              target="_blank"
              aria-hidden="true"
              rel="noopener noreferrer"
              className="link"
            >
              IBM
            </a>
            {'.'}
					</h2>
				</Jumbotron>
				<ScrollDown />
			</Container>
			<MobileNavigation/>
			<Overlay id="overlay" onClick={() => toggleNavigation()} />
		</Background>
	)
}

export default Hero;
