import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Radio as $Radio } from '@boruei.chen/materials';
import { Props } from './Group.types';

const Group = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
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

Group.displayName = 'RHFRadioGroup';

export default Group;
