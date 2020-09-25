import React from 'react';
import { mount } from 'enzyme';
import TextInput from '../TextInput';

describe('TexInput Component', () => {
	let value = '';
	function setValue(new_value) {
		value = new_value;
	}
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<TextInput value={value} setValue={setValue} />);
	});
	it('should render an input tag', () => {
		expect(wrapper.exists('input')).toEqual(true);
	});

	it('should add label props as placeholder', () => {
		wrapper.setProps({ label: 'Type here' });
		const input = wrapper.find('input');
		expect(input.get(0).props.placeholder).toEqual('Type here');
	});

	it('should change value', () => {
		const input = wrapper.find('input');
		input.simulate('change', { target: { value: 'new value' } });
		expect(value).toEqual('new value');
	});
});
