import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import UsePersistedState from '../../utils/UsePersistedState';

import * as actions from '../actions/theme';
const stateAlreadyExist = UsePersistedState('theme');
let initialState = dark;
if (stateAlreadyExist) {
	initialState = JSON.parse(stateAlreadyExist);
} else {
	UsePersistedState('theme', dark);
}
export default function theme(state = initialState, action) {
	switch (action.type) {
		case actions.TOGGLE_THEME:
			const newState = state.title === 'dark' ? light : dark;
			UsePersistedState('theme', newState);
			return newState;
		default:
			return state;
	}
}
