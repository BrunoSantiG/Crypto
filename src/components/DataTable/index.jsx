import React, { useState } from 'react';
import { Container, TopBar } from './styles';

import Limit from './Limit/';
import Table from '../Table';
import TextInput from '../TextInput';
import Pagination from '../Pagination';
function DataTable({ data, columns }) {
	const [limit, setLimit] = useState(5);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	const end = offset + limit;
	let filtered_data = data.data
		.filter(
			(value) =>
				value.name.toLowerCase().includes(search.toLowerCase()) ||
				value.baseVolume.toString().includes(search.toLowerCase()) ||
				value.highestBid.toString().includes(search.toLowerCase()) ||
				value.percentChange.toString().includes(search.toLowerCase())
		)
		.slice(offset, end);
	return (
		<Container>
			<TopBar>
				<Limit value={limit} setValue={setLimit} />
				<TextInput label="Buscar" value={search} setValue={setSearch} />
			</TopBar>
			<Table
				columns={columns}
				loading={data.loading}
				erro={data.erro}
				data={filtered_data}
			/>
			<Pagination
				limit={limit}
				setPage={setPage}
				page={page}
				totalItems={data.data.length}
			/>
		</Container>
	);
}

export default DataTable;
