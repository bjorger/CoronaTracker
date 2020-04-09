import React from 'react';
import '../styles/App.css';
import Increase from './Increase';
import { NovelCovid } from 'novelcovid';
import CountryTable from './CountryTable';
import StateTables from './StatesTable';
import { Async } from 'react-async';


/* 
https://www.npmjs.com/package/covid19-api
*/

class FrontPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			all: '',
			yesterday: [],
			countries: [],
			naStates: [],
		};
	}

	async componentDidMount() {
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
		const usStates = () =>
			fetch('https://covid19-data.p.rapidapi.com/geojson-us', {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'covid19-data.p.rapidapi.com',
					'x-rapidapi-key': '0f74f4db90msh0c879c596d00ecep1875f4jsn58564af8b26a',
				},
			}).then((response) => response.json());

		const indiaStates = () =>
			fetch('https://covid19-data.p.rapidapi.com/geojson-in', {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'covid19-data.p.rapidapi.com',
					'x-rapidapi-key': '0f74f4db90msh0c879c596d00ecep1875f4jsn58564af8b26a',
				},
			}).then((response) => response.json());

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

		let asianCountriesISO3 = [
			'IRN',
			'VNM',
			'HKG',
			'PAK',
			'SAU',
			'LKA',
			'OMN',
			'KHM',
			'KWT',
			'UZB',
			'LAO',
			'BRN',
			'CCK',
			'IOT',
			'TJK',
			'PSE',
			'MNG',
			'JOR',
			'NPL',
			'TWN',
			'LBN',
			'BGD',
			'PHL',
			'SYR',
			'JPN',
			'CHN',
			'IND',
			'KOR',
			'ISR',
			'MDV',
			'IDN',
			'MMR',
			'AFG',
			'YEM',
			'MAC',
			'BHU',
			'KGZ',
			'CXR',
			'TLS',
			'TKM',
			'BTN',
			'BHR',
			'ARM',
			'ARE',
			'QAT',
			'MYS',
			'PRK',
			'THA',
			'SGP',
			'IRQ',
		];

		let northAmericaISO3 = [
			'USA',
			'CUB',
			'JAM',
			'BLZ',
			'SLV',
			'CYM',
			'MTQ',
			'DMA',
			'ANT',
			'SPM',
			'MAF',
			'CAN',
			'CRC',
			'BHS',
			'GTM',
			'HND',
			'KYM',
			'BLM',
			'VGB',
			'KNA',
			'MSR',
			'MEX',
			'CRI',
			'PAN',
			'HTI',
			'TCA',
			'LCA',
			'BL',
			'AIA',
			'VCT',
			'UMI',
			'EUR',
			'ATG',
			'VIR',
			'GRD',
			'GLP',
			'NIC',
			'BRB',
			'GRL',
			'DOM',
			'PRI',
		];

		let southAmericaISO3 = [
			'BRA',
			'ARG',
			'ABW',
			'TTO',
			'FLK',
			'VEN',
			'CHL',
			'URY',
			'SUR',
			'COL',
			'BOL',
			'CUW',
			'PRY',
			'PER',
			'ECU',
			'GUY',
			'GUF',
		];

		let oceaniaISO3 = [
			'AUS',
			'WSM',
			'ASM',
			'TUV',
			'SLB',
			'NIU',
			'NZL',
			'NCL',
			'VUT',
			'KIR',
			'MHL',
			'NFK',
			'FJI',
			'PLW',
			'PYF',
			'COK',
			'FSM',
			'MNP',
			'GUM',
			'PNG',
			'TON',
			'NRU',
			'PCN',
			'WLF',
		];

		let africaISO3 = [
			'MAR',
			'DZA',
			'LBY',
			'MUS',
			'ZAF',
			'TUN',
			'CPV',
			'NGA',
			'ETH',
			'SYC',
			'MDG',
			'KEN',
			'COD',
			'SDN',
			'GHA',
			'TZA',
			'MLI',
			'SOM',
			'SEN',
			'UGA',
			'CIV',
			'ZWE',
			'BFA',
			'CMR',
			'AGO',
			'REU',
			'RWA',
			'ERI',
			'NER',
			'NAM',
			'GMB',
			'MOZ',
			'GIN',
			'TCD',
			'MRT',
			'LBR',
			'GAB',
			'DJI',
			'SWZ',
			'BEN',
			'SLE',
			'ZMB',
			'BWA',
			'TGO',
			'MWI',
			'BDI',
			'LSO',
			'SSD',
			'GNQ',
			'COG',
			'GNB',
		];

		let middleEastIso3 = [
			'IRN',
			'ISR',
			'QAT',
			'YEM',
			'PSE',
			'TUR',
			'EGY',
			'OMN',
			'KWT',
			'IRQ',
			'SAU',
			'ARE',
			'JOR',
			'SYR',
			'LBN',
			'CYP',
			'BHR',
		];

		let euStates = this.state.countries.filter((country) => {
			if (
				euCountriesISO2.includes(country.countryInfo.iso2) ||
				nonEUCountriesISO2.includes(country.countryInfo.iso2)
			) {
				return country;
			}
		});

		let asiaStates = this.state.countries.filter((country) => {
			if (asianCountriesISO3.includes(country.countryInfo.iso3)) {
				return country;
			}
		});

		let naStates = this.state.countries.filter((country) => {
			if (northAmericaISO3.includes(country.countryInfo.iso3)) {
				return country;
			}
		});

		let saStates = this.state.countries.filter((country) => {
			if (southAmericaISO3.includes(country.countryInfo.iso3)) {
				return country;
			}
		});

		let ocStates = this.state.countries.filter((country) => {
			if (oceaniaISO3.includes(country.countryInfo.iso3)) {
				return country;
			}
		});

		let afStates = this.state.countries.filter((country) => {
			if (africaISO3.includes(country.countryInfo.iso3)) {
				return country;
			}
		});

		let meStates = this.state.countries.filter((country) => {
			if (middleEastIso3.includes(country.countryInfo.iso3)) {
				return country;
			}
        });
        
        function numberWithCommas(x) {
            if(typeof x === "number"){
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
		}

		return (
			<div className="App">
				<div id="overall" style={{paddingTop: '80px'}}>
					<div id="overallStats">
						<p className="cardHeadline">Worldwide Corona Statistics</p>
						<div style={{ paddingTop: '10px' }}>
							<p>
								Cases: {numberWithCommas(parseInt(this.state.all.cases))} <Increase value={this.state.all.todayCases} />
							</p>
							<p>
								Deaths: {numberWithCommas(parseInt(this.state.all.deaths))} <Increase value={this.state.all.todayDeaths} />
							</p>
							<p>Recovered: {numberWithCommas(parseInt(this.state.all.recovered))}</p>
							<p>Active Cases: {numberWithCommas(parseInt(this.state.all.recovered))}</p>
							<p>Critical: {numberWithCommas(parseInt(this.state.all.critical))}</p>
						</div>
					</div>
				</div>
				<CountryTable continent={'World'} data={this.state.countries} yesterday={this.state.yesterday} />
				<CountryTable continent={'Europe'} data={euStates} yesterday={this.state.yesterday} />
				<CountryTable continent={'Asia'} data={asiaStates} yesterday={this.state.yesterday} />
				<CountryTable continent={'North America'} data={naStates} yesterday={this.state.yesterday} />
				<CountryTable continent={'South America'} data={saStates} yesterday={this.state.yesterday} />
				<CountryTable continent={'Oceania'} data={ocStates} yesterday={this.state.yesterday} />
				<CountryTable continent={'Africa'} data={afStates} yesterday={this.state.yesterday} />
				<CountryTable continent={'Middle East'} data={meStates} yesterday={this.state.yesterday} />
				<div className="stateTables">
					<Async promiseFn={usStates}>
						{({ data, err, isLoading }) => {
							if (isLoading) return 'Loading...';
							if (data) console.log(data);
							data = data.features.sort((a, b) => {
								return b.properties['confirmed'] - a.properties['confirmed'];
							});
							return <StateTables country={'United States of America'} data={data} />;
						}}
					</Async>
					<Async promiseFn={indiaStates}>
						{({ data, err, isLoading }) => {
							if (isLoading) return 'Loading...';
							if (data) console.log(data);
							data = data.features.sort((a, b) => {
								return b.properties['confirmed'] - a.properties['confirmed'];
							});
							return <StateTables country={'India'} data={data} />;
						}}
					</Async>
				</div>
			</div>
		);
	}
}

export default FrontPage;
