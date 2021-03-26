import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const languages = {
	javascript: {
		icon: <FontAwesomeIcon icon={['fab', 'js-square']}/>,
		text: 'JavaScript',
	},
	typescript: {
		icon: <FontAwesomeIcon icon={['fab', 'js-square']}/>,
		text: 'TypeScript',
	},
	react: {
		icon: <FontAwesomeIcon icon={['fab', 'react']}/>,
		text: 'React',
	},
	angular: {
		icon: <FontAwesomeIcon icon={['fab', 'angular']}/>,
		text: 'Angular',
	},
	node: {
		icon: <FontAwesomeIcon icon={['fab', 'node']}/>,
		text: 'Node',
	},
	gulp: {
		icon: <FontAwesomeIcon icon={['fab', 'gulp']}/>,
		text: 'Gulp',
	},
	python: {
		icon: <FontAwesomeIcon icon={['fab', 'python']}/>,
		text: 'Python',
	},
	c: {
		icon: <FontAwesomeIcon icon={['fas', 'file-code']}/>,
		text: 'C',
	},
	'c#': {
		icon: <FontAwesomeIcon icon={['fas', 'file-code']}/>,
		text: 'C#',
	},
	html: {
		icon: <FontAwesomeIcon icon={['fab', 'html5']}/>,
		text: 'HTML',
	},
	css: {
		icon: <FontAwesomeIcon icon={['fab', 'css3-alt']}/>,
		text: 'CSS',
	},
	shell: {
		icon: <FontAwesomeIcon icon={['fas', 'file-code']}/>,
		text: 'Shell',
	},
	java: {
		icon: <FontAwesomeIcon icon={['fab', 'java']}/>,
		text: 'Java',
	},
};

export default languages;
