import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

function Crypto() {
	let { crypto } = useParams();
	return <Container>{crypto}</Container>;
}

export default Crypto;
