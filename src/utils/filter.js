export const filterCrypto = (crypto_name, data) => {
	return data.find((obj) => {
		return obj.name === crypto_name;
	});
};
