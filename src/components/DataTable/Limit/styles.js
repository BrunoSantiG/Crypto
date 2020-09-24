import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: end;
	justify-content: center;
	@media (max-width: 550px) {
		width: 100vw;
		margin-bottom: 1.2rem;
	}
`;

export const Label = styled.label`
	margin-right: 1rem;
`;

export const Select = styled.select`
	border-radius: 0.2rem;
	width: 3rem;
	height: 1.5rem;
`;
