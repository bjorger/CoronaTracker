import React from 'react';
import FrontPage from './component/FrontPage';
import Header from './component/Header';
import Footer from './component/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* 
https://www.npmjs.com/package/covid19-api
*/

class Index extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path="/" component={FrontPage} exact/>
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default Index;
