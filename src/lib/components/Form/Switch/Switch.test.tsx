import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormProvider from '../../../providers/FormProvider';
import $Switch from './Switch.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: false
  }
};

const Switch: React.FC = () => {
  const formContext = useFormContext();
  return <$Switch name="field" control={formContext.control} data-testid="mock-component" />;
};

describe('Switch', () => {
  it('renders the Switch component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <Switch />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Switch component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <Switch />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
