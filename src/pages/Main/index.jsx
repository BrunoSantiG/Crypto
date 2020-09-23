import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import DataTable from '../../components/DataTable';
import { getReduxCryptos } from '../../store/reducers/crypto';

function Main() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getReduxCryptos());
	}, [dispatch]);

	const crypto = useSelector((state) => {
		return state.crypto;
	});
	const columns = ['Name', 'Volume', 'Highest Bid', 'Percentage Change'];
	return (
		<Container>
			<DataTable data={crypto} columns={columns} />
		</Container>
	);
}

export default Main;
