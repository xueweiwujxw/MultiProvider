import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('App', () => {
  it('increments count when Child "click here to add count" button is clicked', async () => {
    const { getByText } = render(<App />);
    const addButton = getByText('click here to add count');
    const countDisplay = getByText(/count is (\d+)/i);

    const countText = countDisplay.textContent;
    const countVal = parseInt(countText?.match(/count is (\d+)/i)?.[1] ?? '0');

    userEvent.click(addButton);

    await waitFor(() => {
      expect(countDisplay).toHaveTextContent(`count is ${countVal + 1}`);
    });
  });

  it('resets count to 0 when Child "click here to clear count" button is clicked', async () => {
    const { getByText } = render(<App />);
    const clearButton = getByText('click here to clear count');
    const countDisplay = getByText(/count is (\d+)/i);

    userEvent.click(clearButton);

    await waitFor(() => {
      expect(countDisplay).toHaveTextContent('count is 0');
    });
  });

  it('updates name in App when Child "name-input" input value is changed', async () => {
    const { getByLabelText, getByText } = render(<App />);
    const nameInput = getByLabelText('name-input');
    const nameDisplay = getByText(/Hello (.+)/i);

    userEvent.clear(nameInput);
    userEvent.type(nameInput, 'John');

    await waitFor(() => {
      expect(nameDisplay).toHaveTextContent('Hello John');
    });
  });
});
