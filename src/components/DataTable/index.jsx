import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, TopBar } from './styles';

import Limit from './Limit/';
import TextInput from '../TextInput';
import { getReduxCryptos } from '../../store/reducers/crypto';
import Pagination from '../Pagination';
function DataTable({ columns, rows, url }) {
	const [limit, setLimit] = useState(10);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getReduxCryptos());
	}, [dispatch]);

	const response = useSelector((state) => {
		return state.crypto;
	});

	return (
		<Container>
			<TopBar>
				<Limit value={limit} setValue={setLimit} />
				<TextInput label="Buscar" value={search} setValue={setSearch} />
			</TopBar>
			{/* <Table /> */}
			<Pagination
				limit={limit}
				setPage={setPage}
				page={page}
				totalItems={Object.keys(response.data).length}
			/>
		</Container>
	);
}

export default DataTable;
