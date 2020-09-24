import styled from 'styled-components';

export const Container = styled.div`
	padding: 0px 24px;
	width: min(250px, 100%);

	max-height: 57px;
	@media (max-width: 550px) {
		width: 100vw;
		margin-bottom: 1.2rem;
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 2rem;
	font-size: 14px;
	border-color: var(--grey);
	padding: 0 10px 0 20px;
	border-radius: 0.2rem;
`;
