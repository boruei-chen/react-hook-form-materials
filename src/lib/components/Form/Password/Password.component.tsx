import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Password as $Password } from '@boruei.chen/materials';
import { Props } from './Password.types';

const Password = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, errorMessage, ...restProps } = props;
  const { field, fieldState } = useController({ name, rules, shouldUnregister, defaultValue, control });

  return (
    <$Password
      {...restProps}
      {...field}
      errorMessage={fieldState.error?.message ?? errorMessage}
    />
  );
};

Password.displayName = 'RHFPassword';

export default Password;
