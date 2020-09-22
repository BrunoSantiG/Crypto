import React from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_THEME } from '../../store/actions/theme';

import { Container } from './styles';

function ThemeSwitcher() {
	const dispatch = useDispatch();
	return (
		<Container
			onClick={() => {
				dispatch({ type: TOGGLE_THEME });
			}}
		>
			Trocar
		</Container>
	);
}

export default ThemeSwitcher;
