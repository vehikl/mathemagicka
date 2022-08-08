import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mathemagicka title', () => {
  render(<App />);
  const linkElement = screen.getByText(/mathemagicka/i);
  expect(linkElement).toBeInTheDocument();
});
