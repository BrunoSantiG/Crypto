import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from '../../components/Header';
import Routes from '../../routes';
import GlobalStyle from '../../styles/global';

function App() {
	return (
		<ThemeProvider
			theme={useSelector((state) => {
				return state.theme;
			})}
		>
			<GlobalStyle />
			<Header />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
