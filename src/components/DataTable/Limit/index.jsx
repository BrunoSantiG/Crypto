import React from 'react';

import { Label, Select } from './styles';

function Limit({ value, setValue }) {
	return (
		<div>
			<Label forHtml="limit">Linhas por página:</Label>
			<Select
				id="limit"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="15">15</option>
				<option value="20">20</option>
			</Select>
		</div>
	);
}

export default Limit;
