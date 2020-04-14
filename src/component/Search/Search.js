import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Suggestions from '../../component/Search/Suggestions';
import '../../styles/Search.css';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			results: [],
			tableData: {},
		};
		this.handleOnInPutChange = this.handleOnInPutChange.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.clearQuery = this.clearQuery.bind(this);
		this.handleListClick = this.handleListClick.bind(this);
	}

	getInfo = () => {
		let results = [];
		this.props.data.forEach((item) => {
			if (item.country.toLowerCase().includes(this.state.query.toLowerCase())) {
				results.push(item);
			}
		});

		this.setState({
			results: results,
		});
	};

	clearQuery = (value) => {
		document.getElementById('search-input').value = (value.length > 0) ? value : '';
		this.setState({ 
			query: '',
		});
	};

	handleOnInPutChange = () => {
		this.setState(
			{
				query: this.search.value,
			},
			() => {
				if (this.state.query && this.state.query.length >= 2) {
					this.getInfo();
				}
			}
		);
	};

	handleListClick = (result) => {
		this.setState({
			tableData: result,
		});
		this.clearQuery(result.country);
	};

	render() {
		let suggestions;
		if (this.state.results.length > 0) {
			suggestions = <Suggestions onClick={this.handleListClick} results={this.state.results} />;
		}

		let deleteSuggestion;
		if (this.state.query.length > 0) {
			deleteSuggestion = (
				<FontAwesomeIcon
					onClick={this.clearQuery}
					style={{ color: 'white' }}
					className="deleteSearch"
					icon={faTimesCircle}
				/>
			);
		}

		if (this.state.query.length === 0) {
			suggestions = <div></div>;
		}

		let resultTable;
		if (Object.keys(this.state.tableData).length > 0) {
			resultTable = (
				<div className="searchTable">
					<table>
						<thead>
							<tr>
								<th>Cases</th>
                                <th>Deaths</th>
                                <th>Recovered</th>
                                <th>Active</th>
                                <th>Critical</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{this.state.tableData.cases}</td>
                                <td>{this.state.tableData.deaths}</td>
                                <td>{this.state.tableData.recovered}</td>
                                <td>{this.state.tableData.active}</td>
                                <td>{this.state.tableData.critical}</td>                                
							</tr>
						</tbody>
					</table>
				</div>
			);
		}

		return (
			<div className="searchDiv" style={{ paddingLeft: '20px', width: '450px' }}>
				<div className="searchContainer" style={{ paddingBottom: '20px' }}>
					<div className="search">
						<label className="searchLabel">
							<input
								type="text"
								onChange={this.handleOnInPutChange}
								id="search-input"
								ref={(input) => (this.search = input)}
								placeholder="Search for a country"
							/>
						</label>
						{deleteSuggestion}
						<FontAwesomeIcon className="searchIcon" icon={faSearch} style={{ color: 'white' }} />
					</div>
					{suggestions}
				</div>
				{resultTable}
			</div>
		);
	}
}
