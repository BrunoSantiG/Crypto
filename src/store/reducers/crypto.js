import { getCryptos } from '../../services/api';
import * as actions from '../actions/crypto';

const initialState = {
	data: [],
	error: '',
};

export default function theme(state = initialState, action) {
	switch (action.type) {
		case actions.FETCH_DATA_SUCCESS:
			return {
				...state,
				data: action.payload,
				error: '',
			};
		case actions.FETCH_DATA_FAILURE:
			return {
				...state,
				data: [],
				error: action.payload,
			};

		default:
			return state;
	}
}

export const getReduxCryptos = () => (dispatch, getState) => {
	setInterval(async function () {
		const response = await getCryptos();

		if (response.data) {
			let dataArray = [];
			for (let i in response.data) {
				dataArray.push({
					...response.data[i],
					name: i,
					percentChange:
						(response.data[i].percentChange * 100).toFixed(2) + '%',
				});
			}
			dispatch(actions.fetchDataSuccess(dataArray));
		} else {
			dispatch(actions.fetchDataFailure('Ocorreu um erro'));
		}
	}, 1000);
};
