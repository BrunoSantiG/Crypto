import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import { TOGGLE_THEME } from '../../store/actions/theme';

import { Container, MoonIcon, SunIcon } from './styles';

function ThemeSwitcher() {
	const dispatch = useDispatch();
	const isDarkTheme =
		useSelector((state) => {
			return state.theme.title;
		}) === 'dark';

	return (
		<Tooltip
			title={isDarkTheme ? 'Light Theme' : 'Dark Theme'}
			position="bottom"
		>
			<Container
				onClick={() => {
					dispatch({ type: TOGGLE_THEME });
				}}
			>
				{isDarkTheme ? <SunIcon /> : <MoonIcon />}
			</Container>
		</Tooltip>
	);
}

export default ThemeSwitcher;
