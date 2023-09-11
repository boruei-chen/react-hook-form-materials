import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormProvider from '../../../providers/FormProvider';
import $RadioGroup from './RadioGroup.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: []
  }
};

const RadioGroup: React.FC = () => {
  const formContext = useFormContext();
  return (
    <$RadioGroup name="field" control={formContext.control} data-testid="mock-component">
      <$RadioGroup.Radio value="0">Option 1</$RadioGroup.Radio>
      <$RadioGroup.Radio value="1">Option 2</$RadioGroup.Radio>
      <$RadioGroup.Radio value="2">Option 3</$RadioGroup.Radio>
    </$RadioGroup>
  );
};

describe('Radio Group', () => {
  it('renders the Radio Group component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <RadioGroup />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Radio Group component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <RadioGroup />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
