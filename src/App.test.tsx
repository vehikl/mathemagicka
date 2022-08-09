import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('can solve simple equations', () => {
  render(<App/>);
  const equationInput = screen.getByRole('textbox');

  equationInput.focus();
  userEvent.keyboard('2+2');
  userEvent.click(screen.getByRole('button'));

  expect(screen.getByText("4")).toBeInTheDocument();
});

test('it renders the answer when the form is submitted', () => {
  render(<App/>);
  const equationInput = screen.getByRole('textbox');

  equationInput.focus();
  userEvent.keyboard('2+2');
  fireEvent.submit(equationInput);

  expect(screen.getByText("4")).toBeInTheDocument();
});
