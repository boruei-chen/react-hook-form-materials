import React from 'react';
import { action } from '@storybook/addon-actions';
import FormProvider from '../../../../providers/FormProvider';
import { Props as FormProviderProps } from '../../../../providers/FormProvider/FormProvider.types';

const FormDecorator = (config: FormProviderProps['config'], variant: FormProviderProps['variant']) => {
  const Decorator = (Story: React.FC) => (
    <FormProvider config={config} variant={variant} onSubmit={action('[React Hook Form] Submit')}>
      <Story />
    </FormProvider>
  );
  return Decorator;
};

export default FormDecorator;
