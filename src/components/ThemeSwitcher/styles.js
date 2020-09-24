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
	transition: all ease-in-out 0.3s;

	&:hover {
		transform: scale(0.91);
	}
`;

const iconCSS = css`
	flex-shrink: 0;
	width: 30px;
	height: 30px;
	color: var(--text);
`;

export const SunIcon = styled(Sun)`
	${iconCSS}
`;
export const MoonIcon = styled(Moon)`
	${iconCSS}
`;
