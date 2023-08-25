import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Checkbox as $Checkbox } from '@boruei.chen/materials';
import Group from './Group';
import { Props } from './Checkbox.types';

const Checkbox = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, children, ...restProps } = props;
  const { field } = useController({ name, rules, shouldUnregister, defaultValue, control });

  return (
    <$Checkbox {...restProps} {...field} checked={!!field.value}>
      {children}
    </$Checkbox>
  );
};

Checkbox.displayName = 'RHFCheckbox';

export default Object.assign(Checkbox, { Group });
