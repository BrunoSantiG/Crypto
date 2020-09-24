import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from 'styled-icons/feather';
export const Container = styled.header`
	height: 60px;
	background: var(--secondary);
	display: flex;
	align-items: center;
	vertical-align: middle;
	justify-content: space-between;
	padding: 0 30px;
`;

export const LogoArea = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	> img {
		width: 50px;
		height: 50px;
	}

	> span {
		font: 400 2rem Archivo;
		color: var(--logo);
	}

	@media (max-width: 400px) {
		> span {
			display: none;
		}
	}
`;
export const RightArea = styled.div`
	display: flex;
	align-items: center;
`;

export const ExternalLink = styled.a`
	margin-right: 1rem;
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
export const GithubIcon = styled(Github)`
	flex-shrink: 0;
	width: 30px;
	height: 30px;
	color: var(--text);
`;
