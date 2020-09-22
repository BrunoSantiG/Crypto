import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import * as actions from '../actions/theme';

export default function theme(state = dark, action) {
	switch (action.type) {
		case actions.TOGGLE_THEME:
			return state.title === 'dark' ? light : dark;
		default:
			return state;
	}
}
