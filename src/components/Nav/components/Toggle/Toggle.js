import React from "react";

import Animate from "animate.css-react";
import Burger from "react-css-burger";

import Context from '../../../../context/Context'

import './index.scss'

const Toggle = (props) => {
	const { isNavigationOpened } = React.useContext(Context);

	return (
		<Animate
			appear="slideInDown"
			component="div"
			id="toggle"
			className={isNavigationOpened ? 'opened' : 'closed'}
		>
			<Burger
				onClick={props.handleClick}
				active={isNavigationOpened}
				color="black"
				burger="collapse"
				scale={0.8}
			/>
		</Animate>
	)
};

export default Toggle
