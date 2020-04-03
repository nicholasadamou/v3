import React from "react";

import './index.scss'

import image from '../../assets/images/logos/nicholasadamou_logo.png'

const Logo = (handleOnClick) => (
	<div
		className="logo"
		style={{ backgroundImage: `url(${image})`}}
		onClick={() => handleOnClick()}
	/>
);

export default Logo;
