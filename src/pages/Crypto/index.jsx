import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { get24HChart } from '../../services/api';
import Chart from './Chart';

import { Container, TopRow, PrevArea, PrevIcon, Title } from './styles';

function Crypto() {
	let { crypto } = useParams();
	const [chartData, setChartData] = useState([]);
	useEffect(() => {
		setChartData([]);
		async function handleChartData() {
			const response = await get24HChart(crypto);
			if (response.data) {
				setChartData(response.data);
			}
		}
		handleChartData();
	}, [crypto]);

	return (
		<Container>
			<TopRow>
				<Link to="/">
					<PrevArea>
						<PrevIcon />
					</PrevArea>
				</Link>

				<Title>{crypto}</Title>
			</TopRow>
			{chartData && (
				<Chart data={chartData} yAxis={crypto.split('_')[0]} />
			)}
		</Container>
	);
}

export default Crypto;
