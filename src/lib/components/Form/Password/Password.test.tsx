import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormProvider from '../../../providers/FormProvider';
import $Password from './Password.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: ''
  }
};

const Password: React.FC = () => {
  const formContext = useFormContext();
  return <$Password name="field" control={formContext.control} data-testid="mock-component" />;
};

describe('Password', () => {
  it('renders the Password component', () => {
    render(
      <FormProvider config={formConfig} variant="normal">
        <Password />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('renders the Password component (with form template)', () => {
    render(
      <FormProvider config={formConfig} variant="template">
        <Password />
      </FormProvider>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});
