export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export function fetchDataRequest() {
	return {
		type: FETCH_DATA_REQUEST,
	};
}
export function fetchDataSuccess(data) {
	return {
		type: FETCH_DATA_SUCCESS,
		payload: data,
	};
}

export function fetchDataFailure(error) {
	return {
		type: FETCH_DATA_FAILURE,
		payload: error,
	};
}
