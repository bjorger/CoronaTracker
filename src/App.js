import React from 'react';
import FrontPage from './component/FrontPage';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Prevention from './component/Prevention';
import CoronaMap from './component/CoronaMap';
import Sources from './component/Sources'

import './styles/Page.css'
/* 
https://www.npmjs.com/package/covid19-api
*/

class Index extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div id="page-wrap">
					<Header />
					<Switch>
						<Route path="/" component={FrontPage} exact />
						<Route path="/CoronaTracker" component={FrontPage} exact />
						<Route path="/Map" component={CoronaMap} exact />
						<Route path="/Prevention" component={Prevention} exact />
						<Route path="/Sources" component={Sources} exact />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default Index;
