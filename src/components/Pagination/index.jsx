import React from 'react';

import { Controls, First, Prev, Numbers, PageItem, Next, Last } from './styles';
function Pagination({ limit, page, setPage, totalItems }) {
	const lastPage = Math.ceil(totalItems / limit);
	const controls = {
		next: () => {
			page < lastPage && setPage(page + 1);
		},
		prev: () => {
			page > 1 && setPage(page - 1);
		},
		goTo: (page_number) => {
			setPage(page_number);
		},
	};
	const buttons = {
		update: () => {
			const { maxLeft, maxRight } = buttons.calculateMaxButtons();
			const buttonsArray = [];
			for (let i = maxLeft; i <= maxRight; i++) {
				buttonsArray.push(
					<PageItem
						key={i}
						active={i === page}
						onClick={() => {
							controls.goTo(i);
						}}
					>
						{i}
					</PageItem>
				);
			}
			return buttonsArray;
		},
		calculateMaxButtons: () => {
			const maxButtons = 5;
			let maxLeft = page - Math.floor(maxButtons / 2);
			let maxRight = page + Math.floor(maxButtons / 2);

			if (maxLeft < 1) {
				maxLeft = 1;
				maxRight = maxButtons;
			}
			if (maxRight > lastPage) {
				maxLeft = lastPage - (maxButtons - 1);
				maxRight = lastPage;
				if (maxLeft < 1) {
					maxLeft = 1;
				}
			}
			return { maxLeft, maxRight };
		},
	};
	return (
		<Controls>
			<First
				onClick={() => {
					controls.goTo(1);
				}}
			/>
			<Prev onClick={controls.prev} />
			<Numbers>{buttons.update()}</Numbers>
			<Next onClick={controls.next} />
			<Last
				onClick={() => {
					controls.goTo(lastPage);
				}}
			/>
		</Controls>
	);
}

export default Pagination;
