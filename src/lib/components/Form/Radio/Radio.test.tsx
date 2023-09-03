import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormProvider from '../../../providers/FormProvider';
import $Radio from './Radio.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: false
  }
};

const Radio: React.FC = () => {
  const formContext = useFormContext();
  return <$Radio name="field" value="0" control={formContext.control} data-testid="mock-component" />;
};

describe('Radio', () => {
  it('renders the Radio component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <Radio />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Radio component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <Radio />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
