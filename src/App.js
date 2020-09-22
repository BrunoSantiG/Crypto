import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
	return (
		<ThemeProvider
			theme={useSelector((state) => {
				return state.theme;
			})}
		>
			<GlobalStyle />
			<Header />
		</ThemeProvider>
	);
}

export default App;
