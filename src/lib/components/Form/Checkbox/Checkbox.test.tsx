import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormProvider from '../../../providers/FormProvider';
import $Checkbox from './Checkbox.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: false
  }
};

const Checkbox: React.FC = () => {
  const formContext = useFormContext();
  return <$Checkbox name="field" control={formContext.control} data-testid="mock-component" />;
};

describe('Checkbox', () => {
  it('renders the Checkbox component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <Checkbox />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Checkbox component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <Checkbox />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
