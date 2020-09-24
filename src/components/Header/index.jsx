import React from 'react';
import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

import {
	Container,
	LogoArea,
	RightArea,
	ExternalLink,
	GithubIcon,
} from './styles';
import LogoSrc from '../../assets/img/logo.png';
import ThemeSwitcher from '../ThemeSwitcher';

function Header() {
	return (
		<Container>
			<LogoArea to="/">
				<img src={LogoSrc} alt="Logo da Crypto" />

				<span>Crypto</span>
			</LogoArea>
			<RightArea>
				<Tooltip title={'Acessar reposório'} position="bottom">
					<ExternalLink
						target="_blank"
						href="https://github.com/BrunoSantiG/Crypto"
					>
						<GithubIcon />
					</ExternalLink>
				</Tooltip>
				<ThemeSwitcher />
			</RightArea>
		</Container>
	);
}

export default Header;
