import React, { useEffect, useState } from 'react';
import { Container, TopBar } from './styles';

import Limit from './Limit/';
import Table from '../Table';
import TextInput from '../TextInput';
import Pagination from '../Pagination';
function DataTable({ data, columns }) {
	const [limit, setLimit] = useState(5);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const [filtered_data, setFilteredData] = useState([]);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const offset = (page - 1) * limit;
		const end = Number(offset) + Number(limit);

		const filtered = data.data.filter(
			(value) =>
				value.name.toLowerCase().includes(search.toLowerCase()) ||
				value.baseVolume.toString().includes(search.toLowerCase()) ||
				value.highestBid.toString().includes(search.toLowerCase()) ||
				value.last.toString().includes(search.toLowerCase()) ||
				value.percentChange.includes(search.toLowerCase())
		);
		setFilteredData(filtered.slice(offset, end));

		setTotalItems(filtered.length);
		if (Math.ceil(filtered.length / limit) < page && page !== 1) {
			setPage(Math.ceil(filtered.length / limit));
		}
	}, [data.data, limit, search, page]);

	return (
		<Container>
			<TopBar>
				<Limit value={limit} setValue={setLimit} />
				<TextInput label="Buscar" value={search} setValue={setSearch} />
			</TopBar>
			<Table columns={columns} erro={data.erro} data={filtered_data} />
			<Pagination
				limit={limit}
				setPage={setPage}
				page={page}
				totalItems={totalItems}
			/>
		</Container>
	);
}

export default DataTable;
