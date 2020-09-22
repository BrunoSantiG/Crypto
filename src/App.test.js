import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render Crypto message', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Crypto/i);
	expect(linkElement).toBeInTheDocument();
});
