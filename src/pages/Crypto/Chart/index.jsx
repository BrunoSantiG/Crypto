import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Container } from './styles';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get24HChart } from '../../../services/api';

function Chart() {
	let { crypto } = useParams();
	const [data, setData] = useState([]);
	useEffect(() => {
		setData([]);
		setInterval(async function () {
			const response = await get24HChart(crypto);
			if (response.data) {
				setData(response.data);
			}
		}, 500);
	}, [crypto]);
	const isDarkTheme =
		useSelector((state) => {
			return state.theme.title;
		}) === 'dark';
	const color = isDarkTheme ? 'white' : 'black';
	const options = {
		chart: {
			backgroundColor: 'transparent',
			type: 'area',
		},
		credits: {
			enabled: false,
		},

		legend: {
			itemStyle: {
				color: color,
			},
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y} </b>',
		},
		xAxis: {
			categories: data.map((row) => {
				const date = new Date(row.date * 1000);
				const hours = date.getHours();
				const minutes = '0' + date.getMinutes();

				return hours + ':' + minutes.substr(-2);
			}),
			labels: {
				style: {
					color: color,
				},
			},
		},
		yAxis: {
			title: {
				text: null,
			},
			labels: {
				style: {
					color: color,
				},
			},
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: false,
				},
			},
		},
		title: {
			text: null,
		},
		series: [
			{
				name: 'Volume',

				data: data.map((row) => {
					return row.volume;
				}),
			},
		],
		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 500,
					},
					chartOptions: {
						yAxis: {
							title: {
								text: null,
							},
						},
					},
				},
			],
		},
	};
	return (
		<Container>
			<HighchartsReact
				updateArgs={[true, true, true]}
				highcharts={Highcharts}
				options={options}
			/>
		</Container>
	);
}

export default React.memo(Chart);
