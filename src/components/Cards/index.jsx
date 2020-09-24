import React from 'react';

import { Container, CardTitle, CardBody } from './styles';

function Cards({ title, content, sufix }) {
	return (
		<Container>
			<CardTitle>{title}</CardTitle>

			<CardBody>
				{content}
				<span>{sufix}</span>
			</CardBody>
		</Container>
	);
}

export default Cards;
