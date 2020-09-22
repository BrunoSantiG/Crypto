import React from 'react';

import { Container, LogoArea } from './styles';
import LogoSrc from '../../assets/img/logo.png';
import ThemeSwitcher from '../ThemeSwitcher';

function Header() {
	return (
		<Container>
			<LogoArea to="/">
				<img src={LogoSrc} alt="Logo da Crypto" />

				<span>Crypto</span>
			</LogoArea>
			<ThemeSwitcher />
		</Container>
	);
}

export default Header;
