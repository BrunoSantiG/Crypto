import React from 'react';
import { mount } from 'enzyme';
import Cards from '../Cards';
import { CardBody, CardTitle } from '../Cards/styles';

describe('Card Component', () => {
	let wrapper;
	//title, content, sufix
	beforeEach(() => {
		wrapper = mount(<Cards />);
	});

	it('Should render title prop', () => {
		wrapper.setProps({ title: 'Title' });
		expect(wrapper.find(CardTitle).text()).toEqual('Title');
	});

	it('Should render content prop', () => {
		wrapper.setProps({ content: 'Content' });
		expect(wrapper.find(CardBody).text()).toEqual('Content');
	});

	it('Should render sufix as prop', () => {
		wrapper.setProps({ sufix: 'sufix' });
		expect(wrapper.find('span').text()).toEqual('sufix');
	});
});
