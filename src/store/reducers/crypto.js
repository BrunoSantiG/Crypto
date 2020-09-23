import { getCryptos } from '../../services/api';
import * as actions from '../actions/crypto';

const initialState = {
	loading: false,
	data: [],
	error: '',
};

export default function theme(state = initialState, action) {
	switch (action.type) {
		case actions.FETCH_DATA_REQUEST:
			return { ...state, loading: true };
		case actions.FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				error: '',
			};
		case actions.FETCH_DATA_FAILURE:
			return {
				...state,
				loading: false,
				data: [],
				error: action.payload,
			};

		default:
			return state;
	}
}

export const getReduxCryptos = () => async (dispatch, getState) => {
	dispatch(actions.fetchDataRequest());
	const response = await getCryptos();
	response.data
		? dispatch(actions.fetchDataSuccess(response.data))
		: dispatch(actions.fetchDataFailure('Ocorreu um erro'));
};