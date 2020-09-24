import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

function Crypto() {
	let { crypto } = useParams();
	useEffect(() => {}, [crypto]);
	return <Container></Container>;
}

export default Crypto;
