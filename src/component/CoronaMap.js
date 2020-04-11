import React from 'react';
import '../styles/CoronaMap.css';
import ThanksForWaiting from '../assets/map.png'

export default class CoronaMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="Map" style={{ backgroundColor: '#262833', height: '100vh', display: 'flex', flexDirection: 'column', 'alignItems': 'center', paddingTop: '100px' }}>
				<div className="" style={{ color: 'white', fontSize: '50px' }}>
					Coming soon
				</div>
				<img src={ThanksForWaiting} alt="Thanks for Waiting"/>
				<div className="" style={{ color: 'white', fontSize: '50px' }}>
					Thanks for Waiting
				</div>
			</div>
		);
	}
}
