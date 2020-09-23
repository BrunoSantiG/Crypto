import Axios from 'axios';
export const getCryptos = async () => {
	const response = await Axios.get(
		'https://poloniex.com/public?command=returnTicker'
	);
	return response;
};
