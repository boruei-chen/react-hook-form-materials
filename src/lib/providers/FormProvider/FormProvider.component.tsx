import React from 'react';
import { useForm, FormProvider as $FormProvider } from 'react-hook-form';
import { Props } from './FormProvider.types';
import './FormProvider.styles.scss';

const FormProvider: React.FC<Props> = (props) => {
  const form = useForm(props.config);
  return (
    <$FormProvider {...form}>
      {props.variant === 'normal' && (
        <form>
          {props.children}
        </form>
      )}
      {props.variant === 'template' && (
        <form className="form-provider" onSubmit={props.onSubmit ? form.handleSubmit(props.onSubmit) : undefined}>
          <h1 className="form-provider__title">Form</h1>
          <div className="form-provider__body">
            {props.children}
          </div>
          <button type="submit" className="form-provider__submit-btn">Submit</button>
        </form>
      )}
    </$FormProvider>
  );
};

export default FormProvider;
