import React, { useState } from 'react';

import { Container, TopBar } from './styles';

import Limit from './Limit/';
import TextInput from '../TextInput';
function DataTable({ columns, rows, url }) {
	const [limit, setLimit] = useState(10);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	return (
		<Container>
			<TopBar>
				<Limit value={limit} setValue={setLimit} />
				<TextInput label="Buscar" value={search} setValue={setSearch} />
			</TopBar>
			{/* <Table /> */}
			{/* <Pagination /> */}
		</Container>
	);
}

export default DataTable;
