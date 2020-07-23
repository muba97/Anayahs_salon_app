import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import NewService from '../../Components/NewService';

describe('<NewService /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render NewService', () => {
    const { getByTestId } = render(
      <Router>
        <NewService />
      </Router>
    );
    const newService = getByTestId('newServiceInfo');
    expect(newService).toBeInTheDocument();
  });

  test('Input good info in form fields ', async () => {
    const { getByTestId, getByLabelText } = render(
      <Router>
        <NewService />
      </Router>
    );
    await act(async () => {
      fireEvent.click(getByTestId('itemButton'));
    });

    const titleInput = getByLabelText('Title *');
    await act(async () => {
      fireEvent.change(titleInput, { target: { id: 'title', value: 'eyebrows' } });
    });
    expect(titleInput.value).toBe('eyebrows');

    const timeInput = getByLabelText('Time *');
    await act(async () => {
      fireEvent.change(timeInput, { target: { id: 'time', value: '10' } });
    });
    expect(timeInput.value).toBe('10');
    const priceInput = getByLabelText('Price *');
    await act(async () => {
      fireEvent.change(priceInput, { target: { id: 'price', value: '7' } });
    });
    expect(priceInput.value).toBe('7');
    const descriptionInput = getByLabelText('Description *');
    await act(async () => {
      fireEvent.change(descriptionInput, {
        target: { id: 'description', value: 'get eyebrows done' },
      });
    });
    expect(descriptionInput.value).toBe('get eyebrows done');
    const labelInput = getByLabelText('Label *');
    await act(async () => {
      fireEvent.change(labelInput, {
        target: { id: 'label', value: 'threading' },
      });
    });
    expect(labelInput.value).toBe('threading');
    await act(async () => {
      fireEvent.submit(getByTestId('add-submit'));
    });
  });

  test('Should give an error', async () => {
    const { getByTestId, getByText } = render(
      <Router>
        <NewService />
      </Router>
    );
    await act(async () => {
      fireEvent.click(getByTestId('labelButton'));
    });
    await act(async () => {
      fireEvent.click(getByTestId('itemButton'));
    });
    await act(async () => {
      fireEvent.click(getByTestId('labelButton'));
    });
    await act(async () => {
      fireEvent.click(getByTestId('itemButton'));
    });

    await act(async () => {
      fireEvent.submit(getByTestId('add-submit'));
    });
    const titleError = getByText('Title is Required');
    expect(titleError).toBeInTheDocument();

    const timeError = getByText('Time is Required');
    expect(timeError).toBeInTheDocument();

    const priceError = getByText('Price is Required');
    expect(priceError).toBeInTheDocument();

    const descriptionError = getByText('Description is Required');
    expect(descriptionError).toBeInTheDocument();

    const labelError = getByText('Label is Required');
    expect(labelError).toBeInTheDocument();
  });
});
