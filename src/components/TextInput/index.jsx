import React from 'react';

import { Container, Input } from './styles';

function TextInput({ label, value, setValue }) {
	return (
		<Container>
			<Input
				type="text"
				placeholder={label}
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</Container>
	);
}

export default TextInput;
