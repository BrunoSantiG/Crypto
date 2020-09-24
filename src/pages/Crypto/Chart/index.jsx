import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Container } from './styles';
import { useSelector } from 'react-redux';

function Chart({ data, yAxis }) {
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
			pointFormat: '{series.name}: <b>{point.y} ' + yAxis + '</b>',
		},
		xAxis: {
			categories: data.map((row) => {
				const date = new Date(row.date * 1000);
				const hours = date.getHours();
				const minutes = '0' + date.getMinutes();

				return hours + ':' + minutes.substr(-2);
			}),
			reversed: true,
			labels: {
				style: {
					color: color,
				},
			},
		},
		yAxis: {
			title: {
				text: yAxis,
				style: {
					color: color,
				},
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
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Container>
	);
}

export default Chart;
