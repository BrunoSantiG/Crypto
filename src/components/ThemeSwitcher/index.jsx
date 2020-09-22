import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_THEME } from '../../store/actions/theme';

import { Container, MoonIcon, SunIcon } from './styles';

function ThemeSwitcher() {
	const dispatch = useDispatch();
	const isDarkTheme =
		useSelector((state) => {
			return state.theme.title;
		}) === 'dark';
	return (
		<Container
			onClick={() => {
				dispatch({ type: TOGGLE_THEME });
			}}
		>
			{isDarkTheme ? <SunIcon /> : <MoonIcon />}
		</Container>
	);
}

export default ThemeSwitcher;
