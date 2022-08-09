import React from 'react';
import { render, screen } from '@testing-library/react';
import Inputtor from './Inputtor';

test('renders placeholder text', () => {
    render(<Inputtor />);
    const inputElement = screen.getByPlaceholderText(/Enter Expression.../i);
    expect(inputElement).toBeInTheDocument();
});
