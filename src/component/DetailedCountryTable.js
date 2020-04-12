import React from 'react';
import '../styles/App.css';
import { Async } from 'react-async';
import '../styles/Table.css';

/* 
https://www.npmjs.com/package/covid19-api
*/

class DetailedCountryTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			mortalityRate: 0,
			loaded: false
		};
		this.onSort = this.onSort.bind(this)
	}

	async componentDidMount() {
		const fetchProvinceurl = 'https://covid-19-statistics.p.rapidapi.com/provinces?iso=' + this.props.iso;
		const provinces = await fetch(fetchProvinceurl, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
				'x-rapidapi-key': '0f74f4db90msh0c879c596d00ecep1875f4jsn58564af8b26a',
			},
		}).then((response) => response.json());
		// get provinces for regions
		var queries = [];
		let filteredProvinces = provinces.data.filter(item => item.province !== '')
		filteredProvinces.map((item) => {
			var query = 'https://covid-19-statistics.p.rapidapi.com/reports?region_province=' + item.province;
			queries.push(query);
		});

		const data = await Promise.all(
			queries.map((url) =>
				fetch(url, {
					method: 'GET',
					headers: {
						'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
						'x-rapidapi-key': '0f74f4db90msh0c879c596d00ecep1875f4jsn58564af8b26a',
					},
				}).then((response) => response.json())
			)
		);
		let filteredData = data.filter(item => item.data.length > 0)
		
		this.setState({
			data: filteredData,
		});

		let deaths = 0;
		let cases = 0;
		this.state.data.forEach((item) => {
			item.data.forEach((item) => {
				deaths += item.deaths;
				cases += item.confirmed;
			});
		});

		this.setState({
			mortalityRate: (deaths / cases) * 100,
			loaded: true
		});
	}

	onSort(event, sortKey) {
		
		let tableData = this.state.data.sort((a,b)=> {
			if((typeof a.data[0] !== undefined) && (typeof b.data[0] !== undefined)){
				if(a.data.length >= 1 && b.data.length >= 1){
					if(sortKey === "province"){
						if (a.data[0].region[sortKey] < b.data[0].region[sortKey]) {
							return -1;
						}
						if (a.data[0][sortKey] > b.data[0][sortKey]) {
							return 1;
						}
					}
					else{
						return b.data[0][sortKey] - a.data[0][sortKey]
					}
				}
			}
		})
	
		this.setState({ data: tableData });

	}


	render() {
		function numberWithCommas(x) {
			if (typeof x === 'number') {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
			}
		}

		let loaded;

		if(this.state.loaded){
			loaded = <p className="mortalityRate">Mortalityrate: {this.state.mortalityRate.toFixed(2)}%</p>
		}
		else{
			loaded = <p className="mortalityRate">Loading...</p>
		}

		return (
			<div className="detailedCountryTable" style={{ marginTop: '20px' }}>
				<div className="tableHeadline">
					<p>{this.props.title}</p>{' '}
					<p className="mortalityRate">{loaded}</p>
				</div>
				<div className="myTable">
					<table className="detailedCountryTable">
						<thead>
							<tr>
								<th onClick={(e) => this.onSort(e, 'province')} className="tableHeader">
									Province
								</th>
								<th onClick={(e) => this.onSort(e, 'confirmed')} className="tableHeader">
									Confirmed Cases
								</th>
								<th onClick={(e) => this.onSort(e, 'active')} className="tableHeader">
									Active
								</th>
								<th onClick={(e) => this.onSort(e, 'recovered')} className="tableHeader">
									Recovered
								</th>
								<th onClick={(e) => this.onSort(e, 'deaths')} className="tableHeader">
									Deaths
								</th>
								<th onClick={(e) => this.onSort(e, 'fatality_rate')} className="tableHeader">
									Fatality Rate
								</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map((provinceItem) => {
								return provinceItem.data.map((data) => {
									return (
										<tr>
											<td style={{fontSize: '15px'}}>{data.region.province}</td>
											<td>{numberWithCommas(data.confirmed)}</td>
											<td>{numberWithCommas(data.active)}</td>
											<td>{numberWithCommas(data.recovered)}</td>
											<td>{numberWithCommas(data.deaths)}</td>
											<td>{parseFloat(data.fatality_rate * 100).toFixed(2)}%</td>
										</tr>
									);
								});
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default DetailedCountryTable;
