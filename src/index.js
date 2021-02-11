import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore(reducers);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
