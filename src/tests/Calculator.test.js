import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  
  let container;

  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add one number to another number', () => {
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const operator_add = container.getByTestId('operator-add')
    fireEvent.click(operator_add)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('5')
  });

  it('should be able to subtract one number from another number', () => {
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7)
    const operator_subtract = container.getByTestId('operator-subtract')
    fireEvent.click(operator_subtract)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('3')

  });

  it('should be able to multiply two numbers together', () => {
    const button3 = container.getByTestId('number3')
    fireEvent.click(button3)
    const operator_multiply = container.getByTestId('operator-multiply')
    fireEvent.click(operator_multiply)
    const button5 = container.getByTestId('number5')
    fireEvent.click(button5)
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('15')
  });

  it('should be able to divide a number by another number', () => {
    const button2 = container.getByTestId('number2')
    fireEvent.click(button2)
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const operator_divide = container.getByTestId('operator-divide')
    fireEvent.click(operator_divide)
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7)
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('3')

  });

  it('should be able to concatenate multiple number button clicks', () => {
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('41')
  });

  it('should be able to chain multiple operations together', () => {
    const button2 = container.getByTestId('number2')
    fireEvent.click(button2)
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const operator_divide = container.getByTestId('operator-divide')
    fireEvent.click(operator_divide)
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7)
    const operator_multiply = container.getByTestId('operator-multiply')
    fireEvent.click(operator_multiply)
    const button5 = container.getByTestId('number5')
    fireEvent.click(button5)
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('15')
  });

  it('should be able to clear the running total without affecting the calculation', () => {
    const button8 = container.getByTestId('number8')
    fireEvent.click(button8)
    const operator_subtract = container.getByTestId('operator-subtract')
    fireEvent.click(operator_subtract)
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    fireEvent.click(operator_add)
    fireEvent.click(button1)
    const clear = container.getByTestId('clear')
    fireEvent.click(operator_add)
    const button2 = container.getByTestId('number2')
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('9')
  });
})

