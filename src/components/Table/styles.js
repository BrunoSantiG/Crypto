import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 1rem;
`;

export const TableContainer = styled.table`
	width: 100%;
	border-collapse: collapse;

	> thead,
	th,
	td {
		padding: 1rem;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		text-align: center;
	}

	@media (max-width: 550px) {
		tbody,
		tr,
		td {
			display: block;
			width: 100%;
		}

		tr {
			margin-bottom: 0.9rem;
		}
		td {
			text-align: right !important;
			padding-left: 50%;
			position: relative;
		}

		td::before {
			content: attr(data-label);
			position: absolute;
			left: 0;
			width: 50%;
			padding-left: 1rem;
			font-weight: bold;
			text-align: left;
		}
	}
`;
export const TableHeader = styled.thead`
	font-size: 1.3rem;

	@media (max-width: 550px) {
		display: none;
	}
`;
export const TableBody = styled.tbody`
	font-size: 1.2rem;
`;
export const TableRow = styled.tr`
	&:hover {
		background: var(--secondary-hover);
	}

	&:hover > th {
		background: var(--background);
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: var(--text);
	&:hover {
		color: var(--text);
	}

	&:after {
		display: block;
		content: '';
		border-bottom: 1px solid var(--text);
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	}

	&:hover:after {
		transform: scaleX(1);
	}
`;

export const HeadCell = styled.th``;
export const DataCell = styled.td`
	> span {
		font-size: 0.6rem;
	}
`;
