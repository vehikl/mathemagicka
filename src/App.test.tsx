import React from 'react';
import {getByText, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('can solve simple equations', () => {
  render(<App />);
  const equationInput = screen.getByRole('textbox');
  equationInput.focus();

  const buttonInput = screen.getByRole('button');
  //type simple eqn
  userEvent.keyboard('2+2');
  //click submit button
  userEvent.click(buttonInput);

  expect(screen.getByText("4")).toBeInTheDocument();
});
