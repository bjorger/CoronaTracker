import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faMinus } from '@fortawesome/free-solid-svg-icons';

class Increase extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		}
        let percentage = parseInt(this.props.value) / parseInt(this.props.allCases);
        

		if (this.props.value === 0 || percentage != percentage || percentage < 0.01 || !isFinite(percentage)) {
			return <span className="increase"></span>;
		} else if (this.props.value > 0) {
			return (
				<span className="increase">
					<FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '15px' }} /> {numberWithCommas(this.props.value)} ( +{' '}
					{percentage.toFixed(2)} % )
				</span>
			);
		} else {
			return (
				<span className="decrease">
					<FontAwesomeIcon icon={faArrowDown} style={{ fontSize: '15px' }} /> {numberWithCommas(this.props.value)} ( -{' '}
					{percentage.toFixed(2)} % )
				</span>
			);
		}
	}
}

export default Increase;
