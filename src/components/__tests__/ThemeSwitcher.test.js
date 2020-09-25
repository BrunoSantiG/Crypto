import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import store from '../../store';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import ThemeSwitcher from '../ThemeSwitcher';
import UsePersistedState from '../../utils/UsePersistedState';
describe('ThemeSwitcher component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(
			<Provider store={store}>
				<ThemeSwitcher />
			</Provider>
		);
	});
	it('Should render svg icons', () => {
		expect(wrapper.exists('svg')).toEqual(true);
	});

	it('Should change localStorage when click on div', () => {
		const currentTheme = JSON.parse(UsePersistedState('theme'));
		const button = wrapper.find('div').at(1);
		button.simulate('click');

		expect(JSON.parse(UsePersistedState('theme'))).toStrictEqual(
			currentTheme.title === 'dark' ? light : dark
		);
	});
});
