import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormProvider from '../../../providers/FormProvider';
import $Textarea from './Textarea.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: ''
  }
};

const Textarea: React.FC = () => {
  const formContext = useFormContext();
  return <$Textarea name="field" control={formContext.control} data-testid="mock-component" />;
};

describe('Textarea', () => {
  it('renders the Textarea component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <Textarea />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Textarea component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <Textarea />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
