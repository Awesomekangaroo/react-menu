import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter , Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';

import StorePicker from './components/StorePicker';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly patttern="/" component={StorePicker} />
				<Match patttern="/store/:storeId" component={App} />
				<Miss component={notFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));
