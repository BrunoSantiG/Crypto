import Axios from 'axios';
export const getCryptos = async () => {
	const response = await Axios.get(
		'https://poloniex.com/public?command=returnTicker'
	);
	return response;
};

export const get24HChart = async (crypto) => {
	let end = Math.round(Date.now() / 1000),
		start = end - 43200;

	const response = await Axios.get(
		`https://poloniex.com/public?command=returnChartData&currencyPair=${crypto}&start=${start}&end=${end}&period=1800`
	);
	return response;
};
