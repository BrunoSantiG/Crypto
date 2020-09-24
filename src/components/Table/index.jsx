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
							<DataCell colSpan="4">{erro}</DataCell>
						</TableRow>
					)}
					{loading && (
						<TableRow>
							<DataCell colSpan="4">Carregando dados</DataCell>
						</TableRow>
					)}
					{data.map((row) => {
						return (
							<TableRow key={row.id}>
								<DataCell data-label="Name">
									{row.name}
								</DataCell>
								<DataCell data-label="Volume">
									{row.baseVolume}
								</DataCell>
								<DataCell data-label="Highest Bid">
									{row.highestBid}
								</DataCell>
								<DataCell data-label="Percentage Change">
									{row.percentChange}
								</DataCell>
							</TableRow>
						);
					})}
				</TableBody>
			</TableContainer>
		</Container>
	);
}

export default Table;
