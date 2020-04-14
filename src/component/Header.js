import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRadiation, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import MobileMenu from './MobileHeader';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
		};
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
	}
	componentDidMount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	render() {
		const { width } = this.state;
		const isMobile = width <= 999;
		/*https://codesandbox.io/s/nmy6x9wrj*/
		if (isMobile) {
			return (
				<div id="mobileHeader">
					<MobileMenu pageWrapId={'page'} outerContainerId={'pageWrap'} />
					<Link to="/">
						<div id="headerLogo" style={{ color: 'white', fontSize: '25px', paddingLeft: '50px' }}>
							c<FontAwesomeIcon icon={faRadiation} style={{ color: '#262833' }} className="App-logo" />
							v2tracker.info
						</div>
					</Link>
				</div>
			);
		} else {
			return (
				<header>
					<Link to="/">
						<div id="headerLogo" style={{ color: 'white', fontSize: '25px', paddingLeft: '50px' }}>
							c<FontAwesomeIcon icon={faRadiation} style={{ color: '#262833' }} className="App-logo" />
							v2tracker.info
						</div>
					</Link>

					<div>
						<Link to="/">Home</Link>
						<Link to="/Map">Map</Link>
						<Link to="/Prevention">Prevention</Link>
						<Link to="/Sources">Sources</Link>
						<Link to="/" style={{ display: 'none' }}>
							Buy me a Ko-Fi <FontAwesomeIcon icon={faMugHot} style={{ paddingLeft: '5px' }} />
						</Link>
					</div>
				</header>
			);
		}
	}
}

export default Header;
