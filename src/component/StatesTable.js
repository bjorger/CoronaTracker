import React from 'react';
import '../styles/table.css';

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
				data: nextProps.data
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
					console.log(1);
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
		return (
			<div style={{ width: '1000px', paddingBottom: '20px' }}>
				<p className="tableHeadline">{this.props.country}</p>
				<div className="myTable">
					<table className="statesTable">
						<thead>
							<tr>
								<th onClick={(e) => this.onSort(e, 'name')} className="tableHeader">
									Land
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
										<td>{state.properties.name}</td>
										<td>{state.properties.confirmed}</td>
										<td>{state.properties.deaths}</td>
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
