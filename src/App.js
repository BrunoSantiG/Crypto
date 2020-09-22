import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Layout from './pages/Layout';

function App() {
	return (
		<Provider store={store}>
			<Layout />
		</Provider>
	);
}

export default App;
