import React from 'react';

import NavigationContext from "@contexts/NavigationContext";

const NavigationProvider = (props) => {
	const [isOpen, open] = React.useState(false);

	const toggleNavigation = () => {
		open(!isOpen);
	}

	return (
		<NavigationContext.Provider
			value={{
				isOpen,
				toggleNavigation
			}}
		>
			{props.children}
		</NavigationContext.Provider>
	)
}

export default NavigationProvider;
