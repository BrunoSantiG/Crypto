import styled from 'styled-components';

export const Container = styled.div``;

export const TopBar = styled.div`
	height: 100%;
	display: flex;
	align-items: end;
	justify-content: space-between;
	margin-bottom: 1rem;

	@media (max-width: 550px) {
		flex-direction: column;
	}
`;
