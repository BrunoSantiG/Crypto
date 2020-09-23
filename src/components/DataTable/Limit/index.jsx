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
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="50">50</option>
				<option value="all">Todos</option>
			</Select>
		</div>
	);
}

export default Limit;
