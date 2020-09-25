import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;
export const Title = styled.h2`
	font: 700 3rem Poppins;
	margin-bottom: 0.7rem;

	@media (max-width: 500px) {
		font-size: 2rem;
	}
`;
export const Ps = styled.span`
	font: 400 1rem Poppins;
	margin-bottom: 2rem;
	color: var(--text);
`;
