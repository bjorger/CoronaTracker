import React from 'react';
import Increase from './Increase';
import '../styles/table.css';

class CountryTable extends React.Component {
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
			if (typeof a[sortKey] === 'string') {
				if (a[sortKey] < b[sortKey]) {
					return -1;
				}
				if (a[sortKey] > b[sortKey]) {
					console.log(1);
					return 1;
				}
				return 0;
			} else {
				return b[sortKey] - a[sortKey];
			}
		});
		this.setState({ data: data });
	}

	render() {
		return (
			<div style={{ width: '1000px', paddingBottom: '20px' }}>
				<p className="tableHeadline">{this.props.continent}</p>
				<div className="myTable">
					<table className="countryTable">
						<thead>
							<tr>
								<th onClick={(e) => this.onSort(e, 'country')} className="tableHeader">
									Land
								</th>
								<th onClick={(e) => this.onSort(e, 'cases')} className="tableHeader">
									Cases
								</th>
								<th onClick={(e) => this.onSort(e, 'deaths')} className="tableHeader">
									Deaths
								</th>
								<th onClick={(e) => this.onSort(e, 'recovered')} className="tableHeader">
									Recovered
								</th>
								<th onClick={(e) => this.onSort(e, 'active')} className="tableHeader">
									Active
								</th>
								<th onClick={(e) => this.onSort(e, 'critical')} className="tableHeader">
									Critical
								</th>
								<th onClick={(e) => this.onSort(e, 'testsPerOneMillion')} className="tableHeader">
									Tests per One Millionen
								</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map((state) => {
								let yesterdaysStats = this.props.yesterday.filter((yesterday) => {
									if (state.countryInfo._id === yesterday.countryInfo._id) {
										return yesterday;
									}
								});

								if (yesterdaysStats.length === 0) {
									yesterdaysStats = [
										{
											todayCases: 0,
										},
									];
								}
								return (
									<tr>
										<td>{state.country}</td>
										<td>
											{state.cases}{' '}
											<Increase
												value={state.todayCases}
												allCases={yesterdaysStats[0].todayCases}
											/>
										</td>
										<td>
											{state.deaths}{' '}
											<Increase
												value={state.todayDeaths}
												allCases={yesterdaysStats[0].todayCases}
											/>
										</td>
										<td>{state.recovered}</td>
										<td>{state.active}</td>
										<td>{state.critical}</td>
										<td>{state.testsPerOneMillion}</td>
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

export default CountryTable;
