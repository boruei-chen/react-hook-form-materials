import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormProvider from '../../../providers/FormProvider';
import $Select from './Select.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: ''
  }
};

const Select: React.FC = () => {
  const formContext = useFormContext();
  return (
    <$Select name="field" control={formContext.control} data-testid="mock-component">
      <$Select.Option value="0">Option 1</$Select.Option>
      <$Select.Option value="1">Option 2</$Select.Option>
      <$Select.Option value="2">Option 3</$Select.Option>
    </$Select>
  );
};

describe('Select', () => {
  it('renders the Select component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <Select />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Select component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <Select />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
