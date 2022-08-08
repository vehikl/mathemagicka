import React from 'react';
import { render, screen } from '@testing-library/react';
import MagickInput from './MagickInput';

test('renders placeholder text', () => {
    render(<MagickInput />);
    const inputElement = screen.getByPlaceholderText(/Enter Expression.../i);
    expect(inputElement).toBeInTheDocument();
});
