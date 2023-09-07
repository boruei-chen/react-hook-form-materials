import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Textbox as $Textbox } from '@boruei.chen/materials';
import { Props } from './Textbox.types';

const Textbox = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, errorMessage, ...restProps } = props;
  const { field, fieldState } = useController({ name, rules, shouldUnregister, defaultValue, control });

  return (
    <$Textbox
      {...restProps}
      {...field}
      errorMessage={fieldState.error?.message ?? errorMessage}
    />
  );
};

Textbox.displayName = 'RHFTextbox';

export default Textbox;
