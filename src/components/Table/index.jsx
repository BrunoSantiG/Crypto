import React from 'react';

import {
	Container,
	TableContainer,
	TableHeader,
	TableBody,
	TableRow,
	StyledLink,
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
							<DataCell colSpan="5">{erro}</DataCell>
						</TableRow>
					)}
					{loading && !data && (
						<TableRow>
							<DataCell colSpan="5">Carregando dados</DataCell>
						</TableRow>
					)}
					{data.map((row) => {
						return (
							<TableRow key={row.id}>
								<DataCell data-label="Name">
									<StyledLink to={`/${row.name}`}>
										{row.name}
									</StyledLink>
								</DataCell>
								<DataCell data-label="Last Price">
									{row.last}
									<span>BTC</span>
								</DataCell>
								<DataCell data-label="Volume">
									{row.baseVolume}
								</DataCell>
								<DataCell data-label="Highest Bid">
									{row.highestBid}
									<span>BTC</span>
								</DataCell>
								<DataCell data-label="Variation">
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
