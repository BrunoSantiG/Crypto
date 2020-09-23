import React from 'react';

import {
	Container,
	TableContainer,
	TableHeader,
	TableBody,
	TableRow,
	HeadCell,
	DataCell,
} from './styles';

function Table({ data, columns, loading, erro }) {
	return (
		<Container>
			<TableContainer>
				<TableHeader>
					<TableRow>
						{columns.map((column) => {
							return <HeadCell key={column}>{column}</HeadCell>;
						})}
					</TableRow>
				</TableHeader>
				<TableBody>
					{erro && (
						<TableRow>
							<DataCell colspan="4">{erro}</DataCell>
						</TableRow>
					)}
					{loading && (
						<TableRow>
							<DataCell colspan="4">Carregando dados</DataCell>
						</TableRow>
					)}
					{data.map((row) => {
						return (
							<TableRow>
								<DataCell>{row.name}</DataCell>
								<DataCell>{row.baseVolume}</DataCell>
								<DataCell>{row.highestBid}</DataCell>
								<DataCell>{row.percentChange}</DataCell>
							</TableRow>
						);
					})}
				</TableBody>
			</TableContainer>
		</Container>
	);
}

export default Table;
