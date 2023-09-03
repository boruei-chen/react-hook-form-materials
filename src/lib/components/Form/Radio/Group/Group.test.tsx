import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Radio as $Radio } from '@boruei.chen/materials';
import FormProvider from '../../../../providers/FormProvider';
import Radio from '../Radio.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: []
  }
};

const RadioGroup: React.FC = () => {
  const formContext = useFormContext();
  return (
    <Radio.Group name="field" control={formContext.control} data-testid="mock-component">
      <$Radio value="0">Option 1</$Radio>
      <$Radio value="1">Option 2</$Radio>
      <$Radio value="2">Option 3</$Radio>
    </Radio.Group>
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
