import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

function Crypto() {
	let { crypto } = useParams();
	return <Container></Container>;
}

export default Crypto;
