import styled from 'styled-components';
import { ArrowBack } from 'styled-icons/evaicons-solid/';
export const Container = styled.div`
	margin-top: 1rem;
	padding: 1rem 5rem;
	display: flex;
	flex-direction: column;

	@media (max-width: 850px) {
		padding: 1rem 0.5rem;
	}
`;

export const TopRow = styled.header`
	width: 100%;
	margin-bottom: 3rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
`;

export const PrevArea = styled.div`
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	transition: background ease-in-out 0.3s;

	&:hover {
		background: var(--secondary-hover);
	}
`;

export const PrevIcon = styled(ArrowBack)`
	flex-shrink: 0;
	width: 30px;
	height: 30px;
	color: var(--text);
`;

export const Title = styled.div`
	font: 700 2rem Archivo;
`;
