import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getReduxCryptos } from '../../store/reducers/crypto';
import Cards from '../../components/Cards';
import Chart from './Chart';

import {
	Container,
	TopRow,
	PrevArea,
	PrevIcon,
	Title,
	CardBox,
} from './styles';
import { filterCrypto } from '../../utils/filter';

function Crypto() {
	let { crypto } = useParams();

	const response = useSelector((state) => {
		return state.crypto;
	});
	const dispatch = useDispatch();
	let obj;
	useEffect(() => {
		if (response.data.length === 0) {
			dispatch(getReduxCryptos());
		}
	}, [dispatch, response.data]);

	if (response.data.length > 0) {
		obj = filterCrypto(crypto, response.data);
	}
	const sufix = crypto.split('_')[0];
	return (
		<Container>
			<TopRow>
				<Link to="/">
					<PrevArea>
						<PrevIcon />
					</PrevArea>
				</Link>

				<Title>{crypto}</Title>
			</TopRow>
			<Chart />
			{obj && (
				<CardBox>
					<Cards
						title={'Last Price'}
						content={obj.last}
						sufix={sufix}
					/>
					<Cards title={'Variation'} content={obj.percentChange} />
					<Cards
						title={'Highest Bid'}
						content={obj.highestBid}
						sufix={sufix}
					/>
					<Cards
						title={'Lowest Ask'}
						content={obj.lowestAsk}
						sufix={sufix}
					/>

					<Cards
						title={'Volume'}
						content={obj.baseVolume}
						sufix={sufix}
					/>
					<Cards
						title={'Quote Volume'}
						content={obj.quoteVolume}
						sufix={sufix}
					/>
					<Cards
						title={'24h High'}
						content={obj.high24hr}
						sufix={sufix}
					/>
					<Cards
						title={'24h Low'}
						content={obj.low24hr}
						sufix={sufix}
					/>
				</CardBox>
			)}
		</Container>
	);
}

export default Crypto;
