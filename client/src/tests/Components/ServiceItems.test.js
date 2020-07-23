import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ServiceItems from '../../Components/ServiceItems';

const items = {
  title: 'eyebrows',
  time: '10',
  price: '7',
  description: 'get your eyebrows done',
  label: 'threading',
};

describe('<ServiceItems />', () => {
  afterEach(() => {
    cleanup();
  });
  test('render items from services', () => {
    const { getByTestId } = render(<ServiceItems items={{}} />);
    const serviceItems = getByTestId('serviceItems');
    expect(serviceItems).toBeInTheDocument();
  });

  test('Input good info in form fields ', async () => {
    const { getByTestId, getByLabelText } = render(<ServiceItems items={items} />);

    await act(async () => {
      fireEvent.click(getByTestId('edit-submit'));
    });

    const titleInput = getByLabelText('Title');
    await act(async () => {
      fireEvent.change(titleInput, { target: { id: 'title', value: 'chin' } });
    });
    expect(titleInput.value).toBe('chin');

    const timeInput = getByLabelText('Time');
    await act(async () => {
      fireEvent.change(timeInput, {
        target: { id: 'time', value: '13' },
      });
    });
    expect(timeInput.value).toBe('13');

    const priceInput = getByLabelText('Price');
    await act(async () => {
      fireEvent.change(priceInput, {
        target: { id: 'price', value: '10' },
      });
    });
    expect(priceInput.value).toBe('10');

    const descriptionInput = getByLabelText('Description');
    await act(async () => {
      fireEvent.change(descriptionInput, {
        target: { id: 'description', value: 'service for the chin' },
      });
    });
    expect(descriptionInput.value).toBe('service for the chin');

    const labelInput = getByLabelText('Label');
    await act(async () => {
      fireEvent.change(labelInput, {
        target: { id: 'label', value: 'threading' },
      });
    });
    expect(labelInput.value).toBe('threading');
  });

  test('values should go back to default values when user clicks cancel button', async () => {
    const { getByTestId, getByLabelText } = render(<ServiceItems items={items} />);

    await act(async () => {
      fireEvent.click(getByTestId('edit-submit'));
    });

    const titleInput = getByLabelText('Title');
    await act(async () => {
      fireEvent.change(titleInput, { target: { id: 'title', value: 'chin' } });
    });
    expect(titleInput.value).toBe('chin');

    await act(async () => {
      fireEvent.click(getByTestId('cancelButton'));
    });

    expect(titleInput.value).toBe('eyebrows');
  });

  test('should render all errors', async () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <ServiceItems items={items} />
    );
    await act(async () => {
      fireEvent.click(getByTestId('edit-submit'));
    });
    const titleInput = getByLabelText('Title');
    await act(async () => {
      fireEvent.change(titleInput, { target: { id: 'title', value: '' } });
    });
    expect(titleInput.value).toBe('');

    const timeInput = getByLabelText('Time');
    await act(async () => {
      fireEvent.change(timeInput, {
        target: { id: 'time', value: '' },
      });
    });
    expect(timeInput.value).toBe('');

    const priceInput = getByLabelText('Price');
    await act(async () => {
      fireEvent.change(priceInput, {
        target: { id: 'price', value: '' },
      });
    });
    expect(priceInput.value).toBe('');

    const descriptionInput = getByLabelText('Description');
    await act(async () => {
      fireEvent.change(descriptionInput, {
        target: { id: 'description', value: '' },
      });
    });
    expect(descriptionInput.value).toBe('');

    const labelInput = getByLabelText('Label');
    await act(async () => {
      fireEvent.change(labelInput, {
        target: { id: 'label', value: '' },
      });
    });
    expect(labelInput.value).toBe('');
    await act(async () => {
      fireEvent.click(getByTestId('edit-submit'));
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

    await act(async () => {
      fireEvent.click(getByTestId('cancelButton'));
    });
  });
  test('Checking if the fields were deleted ', async () => {
    const { getByTestId, getByLabelText } = render(<ServiceItems items={items} />);

    await act(async () => {
      fireEvent.click(getByTestId('delete-cancel'));
    });
    const titleInput = getByLabelText('Title');
    expect(titleInput.value).toBe('eyebrows');

    await act(async () => {
      fireEvent.click(getByTestId('deleteButton'));
    });
    const serviceItems = getByTestId('serviceItems');
    expect(serviceItems).toBeInTheDocument();
  });
  test('Checking if the delete cancel works', async () => {
    const { getByTestId, getByLabelText } = render(<ServiceItems items={items} />);

    await act(async () => {
      fireEvent.click(getByTestId('delete-cancel'));
    });

    await act(async () => {
      fireEvent.click(getByTestId('delete-cancel'));
    });
    const titleInput = getByLabelText('Title');
    expect(titleInput.value).toBe('eyebrows');
  });
});
