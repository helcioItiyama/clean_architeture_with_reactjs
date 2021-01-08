import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Context from '@/presentation/context/form/form-context';
import Input from './input';

const makeSut = ():RenderResult => render(
  <Context.Provider value={{ state: {} }}>
    <Input name="field" />
  </Context.Provider>,
);

describe('InputComponent', () => {
  it('should begin with readonly', () => {
    const sut = makeSut();
    const input = sut.getByTestId('field') as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });
});
