import {
	faJsSquare,
	faReact,
	faAngular,
	faNode,
	faGulp,
	faPython,
	faHtml5,
	faCss3Alt,
	faJava
} from '@fortawesome/free-brands-svg-icons';

import { faFileCode } from '@fortawesome/free-solid-svg-icons';

const languages = {
	javascript: {
		icon: faJsSquare,
		text: 'JavaScript'
	},
	typescript: {
		icon: faJsSquare,
		text: 'TypeScript'
	},
	react: {
		icon: faReact,
		text: 'React'
	},
	angular: {
		icon: faAngular,
		text: 'Angular'
	},
	node: {
		icon: faNode,
		text: 'Node'
	},
	gulp: {
		icon: faGulp,
		text: 'Gulp'
	},
	python: {
		icon: faPython,
		text: 'Python'
	},
	c: {
		icon: faFileCode,
		text: 'C'
	},
	'c#': {
		icon: faFileCode,
		text: 'C#'
	},
	html: {
		icon: faHtml5,
		text: 'HTML'
	},
	css: {
		icon: faCss3Alt,
		text: 'CSS'
	},
	shell: {
		icon: faFileCode,
		text: 'Shell'
	},
	java: {
		icon: faJava,
		text: 'Java'
	}
};

export default languages;
