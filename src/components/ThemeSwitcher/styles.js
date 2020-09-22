import styled, { css } from 'styled-components';
import { Moon, Sun } from 'styled-icons/feather';

export const Container = styled.div`
	background: var(--secondary-hover);
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	transition: background ease-in-out 0.2s;

	&:hover {
		background: var(--secondary);
	}
`;

const iconCSS = css`
	flex-shrink: 0;
	width: 30px;
	height: 30px;
	color: var(--white);
`;

export const SunIcon = styled(Sun)`
	${iconCSS}
`;
export const MoonIcon = styled(Moon)`
	${iconCSS}
`;
