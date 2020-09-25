import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

import Logo from '../../assets/img/logo.png';
import { CompanyName } from '../Header/styles';

describe('Header Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Header />);
	});
	it('Should render logo', () => {
		expect(wrapper.find('img').get(0).props.src).toEqual(Logo);
	});

	it('Should render company name', () => {
		expect(wrapper.find(CompanyName).dive().text()).toEqual('Crypto');
	});
});
