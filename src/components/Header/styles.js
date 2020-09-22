import styled from 'styled-components';

export const Container = styled.header`
	height: 60px;
	background: var(--secondary);
	display: flex;
	align-items: center;
	vertical-align: middle;
	justify-content: space-between;
	padding: 0 30px;
`;

export const LogoArea = styled.div`
	display: flex;
	align-items: center;
	> img {
		width: 50px;
		height: 50px;
	}

	> span {
		font: 400 2rem Archivo;
		color: var(--logo);
	}
`;
