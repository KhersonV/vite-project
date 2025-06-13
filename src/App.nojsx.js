import React from 'react';
import ReactIcon from './assets/react.svg?component';
import reactLogo from './assets/react.svg';
import './App.css';

function AppNoJSX() {
	// декларативный
	const currentYear = new Date().getFullYear();

	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'div',
			{ className: 'logos' },
			// 1. React-logo как React-компонент
			React.createElement(ReactIcon, { className: 'logo-component' }),
			// 2. React-logo как обычное <img>
			React.createElement('img', {
				src: reactLogo,
				className: 'logo-img',
				alt: 'React logo',
			}),
		),
		React.createElement(
			'footer',
			null,
			React.createElement('p', null, `© ${currentYear}`),
		),
	);
}

export default AppNoJSX;
