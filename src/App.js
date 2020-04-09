import React from 'react';
import './styles/App.css';
import './styles/table.css';
import Increase from './component/Increase';
import { NovelCovid } from 'novelcovid';

/* 
https://www.npmjs.com/package/covid19-api
*/

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			all: '',
			yesterday: [],
			countries: [],
			europeCountries: [],
		};
	}

	componentDidMount() {
		let novelcovid = new NovelCovid();

		novelcovid.yesterday().then((response) => {
			this.setState({ yesterday: response });
		});

		novelcovid.all().then((response) => {
			this.setState({ all: response });
		});

		novelcovid.countries().then((response) => this.setState({ countries: response }));

		novelcovid.all().then((response) => console.log('All()', response));
		novelcovid.countries().then((response) => console.log('Countries()', response));
		novelcovid.yesterday().then((response) => console.log('Yesterday()', response));
	}

	render() {
		let euCountriesISO2 = [
			'BE',
			'BG',
			'DK',
			'DE',
			'EE',
			'FI',
			'FR',
			'GR',
			'IE',
			'IT',
			'HR',
			'LV',
			'LT',
			'LU',
			'MT',
			'NL',
			'AT',
			'PL',
			'PT',
			'RO',
			'SM',
			'SE',
			'SK',
			'SI',
			'ES',
			'CZ',
			'HU',
			'GB',
			'VA',
			'FO',
			'CY',
		];

		let nonEUCountriesISO2 = [
			'AL',
			'AD',
			'BA',
			'LI',
			'MC',
			'YU',
			'MK',
			'MD',
			'NO',
			'CH',
			'UA',
			'BY',
			'RU',
			'TR',
			'RS',
		];

		let euStates = this.state.countries.filter((country) => {
			if (
				euCountriesISO2.includes(country.countryInfo.iso2) ||
				nonEUCountriesISO2.includes(country.countryInfo.iso2)
			) {
				return country;
			}
		});

		return (
			<div className="App">
				<div id="overall">
					<div id="overallStats">
						<p className="cardHeadline">Worldwide Corona Statistics</p>
						<div style={{ paddingTop: '10px' }}>
							<p>
								Cases: {this.state.all.cases} <Increase value={this.state.all.todayCases} />
							</p>
							<p>
								Deaths: {this.state.all.deaths} <Increase value={this.state.all.todayDeaths} />
							</p>
							<p>Recovered: {this.state.all.recovered}</p>
							<p>Active Cases: {this.state.all.active}</p>
							<p>Critical: {this.state.all.critical}</p>
						</div>
					</div>
					<div></div>
				</div>
				<div id="europe">
					<div style={{ width: '1000px' }}>
						<p className="tableHeadline">Europe</p>
						<div className="myTable">
							<table>
								<thead>
									<tr>
										<th className="tableHeader">Land</th>
										<th className="tableHeader">Cases</th>
										<th className="tableHeader">Deaths</th>
										<th className="tableHeader">Recovered</th>
										<th className="tableHeader">Active</th>
										<th className="tableHeader">Critical</th>
										<th className="tableHeader">Tests per One Millionen</th>
									</tr>
								</thead>
								<tbody>
									{euStates.map((state) => {
										return (
											<tr>
												<td>{state.country}</td>
												<td>
													{state.cases} <Increase value={state.todayCases} />
												</td>
												<td>
													{state.deaths} <Increase value={state.todayDeaths} />
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
				</div>
			</div>
		);
	}
}

export default Index;
