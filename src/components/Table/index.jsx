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
	LoadingIcon,
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
					{loading && (
						<TableRow>
							<DataCell colSpan="5">
								<LoadingIcon />
								Carregando dados
							</DataCell>
						</TableRow>
					)}
					{data.map((row) => {
						const currency = row.name.split('_')[0];
						return (
							<TableRow key={row.id}>
								<DataCell data-label="Name">
									<StyledLink to={`/${row.name}`}>
										{row.name}
									</StyledLink>
								</DataCell>
								<DataCell data-label="Last Price">
									{row.last}
									<span>{currency}</span>
								</DataCell>
								<DataCell data-label="Volume">
									{row.baseVolume}
									<span>{currency}</span>
								</DataCell>
								<DataCell data-label="Highest Bid">
									{row.highestBid}
									<span>{currency}</span>
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
