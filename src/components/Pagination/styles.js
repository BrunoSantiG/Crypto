import styled, { css } from 'styled-components';
import {
	FirstPage,
	LastPage,
	ArrowBackIos,
	ArrowForwardIos,
} from 'styled-icons/material';

export const Controls = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--text);

	margin-top: 8px;
	> * {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text);
	}
`;
export const Numbers = styled.div`
	font: 400 1.5rem Poppins;
`;
export const PageItem = styled.div`
	color: ${(props) => {
		return props.active ? '#858585' : props.theme.colors.text;
	}};
	margin-left: 0.8rem;
	&:first-child {
		margin-left: 0;
	}
	&:hover {
		color: #858585;
	}
`;
const iconCSS = css`
	flex-shrink: 0;
	width: 30px;
	height: 28px;
	&:hover {
		color: #858585;
	}
`;

export const First = styled(FirstPage)`
	${iconCSS}
`;
export const Prev = styled(ArrowBackIos)`
	${iconCSS}
	height: 20px;
`;
export const Next = styled(ArrowForwardIos)`
	${iconCSS}
	height: 20px;
`;
export const Last = styled(LastPage)`
	${iconCSS}
`;
