import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddItem from './add-item';

describe('AddItem Component', () => {
  it('should add item to the list when form is submitted', () => {
    const setListMock = jest.fn();
    render(<AddItem setList={setListMock} />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');

    // Simulate typing into input
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    expect(inputElement).toHaveValue('New Task');

    // Simulate form submission
    fireEvent.click(buttonElement);

    // Check if setList was called
    expect(setListMock).toHaveBeenCalledTimes(1);

    // Retrieve the function passed to setListMock
    const updateFunction = setListMock.mock.calls[0][0];
    const initialList = [];
    const newList = updateFunction(initialList);

    // Check if setList was called with correct parameters
    expect(newList).toEqual([{ isDone: false, title: 'New Task' }]);

    // Check if input value is cleared
    expect(inputElement).toHaveValue('');
  });

  it('should not add item to the list if input is empty', () => {
    const setListMock = jest.fn();
    render(<AddItem setList={setListMock} />);

    const buttonElement = screen.getByRole('button');

    // Simulate form submission with empty input
    fireEvent.click(buttonElement);

    // Check if setList was not called
    expect(setListMock).not.toHaveBeenCalled();
  });
});
