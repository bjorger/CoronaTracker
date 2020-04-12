import React from 'react';
import '../styles/Table.css';

/*https://rapidapi.com/ShubhGupta/api/covid19-data?endpoint=apiendpoint_d5275d2a-ffe4-4a12-8a76-6c9d932e234d */

class StateTables extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
		};
		this.onSort = this.onSort.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.data !== prevState.data) {
			return {
				data: nextProps.data,
			};
		}

		// Return null to indicate no change to state.
		return null;
	}

	onSort(event, sortKey) {
		let data = this.state.data;
		data.sort((a, b) => {
			if (typeof a.properties[sortKey] === 'string') {
				if (a.properties[sortKey] < b.properties[sortKey]) {
					return -1;
				}
				if (a.properties[sortKey] > b.properties[sortKey]) {
					return 1;
				}
				return 0;
			} else {
				return b.properties[sortKey] - a.properties[sortKey];
			}
		});
		this.setState({ data: data });
	}

	render() {
		
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		}


		let allDeaths = 0;
		let allActive = 0;
		this.state.data.forEach((element) => {
			allDeaths += parseFloat(element.properties.deaths);
		});
		this.state.data.forEach((element) => {
			allActive += parseFloat(element.properties.confirmed);
		});

		const mortalityRate = (allDeaths / allActive) * 100;
		return (
			<div className="innerStatesTable" style={{ paddingBottom: '20px', marginLeft:'30px', marginRight: '30px'}}>
				<div className="tableHeadline" style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
					<p>{this.props.country}</p>{' '}
					<p className="mortalityRate">Mortalityrate: {mortalityRate.toFixed(2)}%</p>
				</div>
				<div className="myTable">
					<table className="statesTable">
						<thead>
							<tr>
								<th onClick={(e) => this.onSort(e, 'name')} className="tableHeader">
									Country
								</th>
								<th onClick={(e) => this.onSort(e, 'confirmed')} className="tableHeader">
									Confirmed Cases
								</th>
								<th onClick={(e) => this.onSort(e, 'deaths')} className="tableHeader">
									Deaths
								</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map((state) => {
								return (
									<tr>
										<td style={{fontSize: '15px'}}>{state.properties.name}</td>
										<td>{numberWithCommas(state.properties.confirmed)}</td>
										<td>{numberWithCommas(state.properties.deaths)}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default StateTables;