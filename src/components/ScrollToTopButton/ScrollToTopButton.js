import {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

const Container = styled.div`
	align-items: center;
	justify-content: center;

	position: fixed;
	bottom: 20px;
	right: 20px;

	width: 50px;
	height: 50px;

	padding: 20px;

	z-index: 1000;

	cursor: pointer;

	background: #f5f5f5;

	animation: fadeIn 0.3s;
	transition: opacity 0.4s;

	opacity: 0.5;

	svg {
		color: black;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const ScrollToTopButton = () => {
	const [isVisible, toggleVisibility] = useState(false);

	const canScroll = () => {
		if (!isVisible && window.pageYOffset > 400) {
			toggleVisibility(true);
		} else if (isVisible && window.pageYOffset <= 400) {
			toggleVisibility(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

	window.addEventListener('scroll', canScroll);

	return (
		<Container
			style={{display: isVisible ? 'flex' : 'none'}}
			onClick={scrollToTop}
		>
			<FontAwesomeIcon icon={['fas', 'arrow-up']}/>
		</Container>
	);
};

export default ScrollToTopButton;
