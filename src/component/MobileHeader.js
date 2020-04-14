import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/MobileMenu.css';
import { Link } from 'react-router-dom';

export default class MobileMenu extends React.Component {
	render() {
		// NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
		return (
			<Menu pageWrapId={'page-wrap'} outerContainerId={'root'}>
				<div className="headerDiv">
					<Link to="/">Home</Link>
					<Link to="/Map">Map</Link>
					<Link to="/Prevention">Prevention</Link>
					<Link to="/Sources">Sources</Link>
					<a href="https://discord.gg/pCBNtwc" target="_blank">Discord</a>
				</div>
			</Menu>
		);
	}
}
