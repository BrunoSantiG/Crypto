import styled from 'styled-components';

export const Container = styled.div`
	box-shadow: 0 4px 8px 0 var(--shadow);
	transition: 0.3s;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background: var(--secondary);

	padding: 0.2rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font: 400 1rem Poppins;
	&:hover {
		box-shadow: 0 8px 16px 0 var(--shadow);
	}
`;
export const CardTitle = styled.div`
	padding: 1rem;
	font-size: 1rem;
`;

export const CardBody = styled.div`
	margin-bottom: 1rem;
	font-size: 1.2rem;
	> span {
		font-size: 0.8rem;
	}
`;
