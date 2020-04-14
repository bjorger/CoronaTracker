import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import DiscordLogo from '../assets/discord.png'
import '../styles/Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<footer style={{ marginTop: '20px' }}>
				<div>
					<div className="creator">This page was created by Robin Braumann</div>
					<div className="socialMedia">
						Socialmedia:{' '}
						<a href="https://www.instagram.com/mary_van_meow/" target="_blank">
							<FontAwesomeIcon
								icon={faInstagram}
								style={{ color: 'white', fontSize: '25px', paddingLeft: '10px' }}
							/>
						</a>
						<a href="https://discord.gg/pCBNtwc" target="_blank" style={{paddingLeft:'10px'}}>
							<img src={DiscordLogo} alt="Discord Logo" style={{width: '30px'}}/>
						</a>
					</div>
					<div className="businessContacts">
						Business Email:{' '}
						<a style={{ color: 'white', textDecoration: 'none' }} href="mailto:robin.braumann@gmail.com">
							robin.braumann@gmail.com
						</a>
					</div>
					<div className="github">
						GitHub Repo:{' '}
						<a href="https://github.com/bjorger/CoronaTracker" target="_blank">
							<FontAwesomeIcon
								icon={faGithub}
								style={{ color: 'white', fontSize: '25px', paddingLeft: '10px' }}
							/>
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
