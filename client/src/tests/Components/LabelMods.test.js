import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import LabelMods from '../../Components/LabelMods';

describe('<NewService /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render NewService', () => {
    const { getByTestId } = render(
      <Router>
        <LabelMods />
      </Router>
    );
    const lableMods = getByTestId('labelMods');
    expect(lableMods).toBeInTheDocument();
  });

  test('Input good info in form fields ', async () => {
    const { getByTestId, getByLabelText } = render(
      <Router>
        <LabelMods />
      </Router>
    );

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
        <LabelMods />
      </Router>
    );
    await act(async () => {
      fireEvent.submit(getByTestId('add-submit'));
    });

    const labelError = getByText('Label is Required');
    expect(labelError).toBeInTheDocument();
  });
});
