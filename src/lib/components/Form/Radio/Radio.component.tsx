import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Radio as $Radio } from '@boruei.chen/materials';
import Group from './Group';
import { Props } from './Radio.types';

const Radio = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, value, children, onChange, ...restProps } = props;
  const { field } = useController({ name, rules, shouldUnregister, defaultValue, control });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <$Radio
      {...restProps}
      {...field}
      value={value}
      checked={field.value === value}
      onChange={handleChange}
    >
      {children}
    </$Radio>
  );
};

Radio.displayName = 'RHFRadio';

export default Object.assign(Radio, { Group });
