import React from "react";

import './index.scss'

import image from '../../assets/images/logos/nicholasadamou_logo.png'

const Logo = (onClick) => (
	<div
		className="logo"
		style={{ backgroundImage: `url(${image})`}}
		onClick={onClick && onClick}
	/>
);

export default Logo;
