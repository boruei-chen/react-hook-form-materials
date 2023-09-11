import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Radio as $Radio } from '@boruei.chen/materials';
import Radio from './Radio';
import { Props } from './RadioGroup.types';

const RadioGroup = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, errorMessage, children, ...restProps } = props;
  const { field, fieldState } = useController({ name, rules, shouldUnregister, defaultValue, control });

  return (
    <$Radio.Group
      {...restProps}
      {...field}
      errorMessage={fieldState.error?.message ?? errorMessage}
    >
      {children}
    </$Radio.Group>
  );
};

RadioGroup.displayName = 'RHFRadioGroup';

export default Object.assign(RadioGroup, { Radio });
