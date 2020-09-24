import Axios from 'axios';
export const getCryptos = async () => {
	const response = await Axios.get(
		'https://poloniex.com/public?command=returnTicker'
	);
	return response;
};

export const get24HChart = async (crypto) => {
	let end = Math.floor(Date.now() / 1000),
		start = end - 86400;
	const response = await Axios.get(
		`https://poloniex.com/public?command=returnChartData&currencyPair=${crypto}&start=${start}&end=${end}&period=7200`
	);

	return response;
};
