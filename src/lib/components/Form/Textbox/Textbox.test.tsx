import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormProvider from '../../../providers/FormProvider';
import $Textbox from './Textbox.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: ''
  }
};

const Textbox: React.FC = () => {
  const formContext = useFormContext();
  return <$Textbox name="field" control={formContext.control} data-testid="mock-component" />;
};

describe('Textbox', () => {
  it('renders the Textbox component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <Textbox />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Textbox component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <Textbox />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
