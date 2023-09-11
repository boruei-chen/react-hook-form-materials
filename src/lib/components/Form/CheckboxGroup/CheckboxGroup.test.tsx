import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Checkbox as $Checkbox } from '@boruei.chen/materials';
import FormProvider from '../../../providers/FormProvider';
import $CheckboxGroup from './CheckboxGroup.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: []
  }
};

const CheckboxGroup: React.FC = () => {
  const formContext = useFormContext();
  return (
    <$CheckboxGroup name="field" control={formContext.control} data-testid="mock-component">
      <$Checkbox value="0">Option 1</$Checkbox>
      <$Checkbox value="1">Option 2</$Checkbox>
      <$Checkbox value="2">Option 3</$Checkbox>
    </$CheckboxGroup>
  );
};

describe('Checkbox Group', () => {
  it('renders the Checkbox Group component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <CheckboxGroup />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Checkbox Group component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <CheckboxGroup />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
