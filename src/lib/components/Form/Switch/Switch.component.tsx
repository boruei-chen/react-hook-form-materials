import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Switch as $Switch } from '@boruei.chen/materials';
import { Props } from './Switch.types';

const Switch = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, ...restProps } = props;
  const { field } = useController({ name, rules, shouldUnregister, defaultValue, control });

  return (
    <$Switch {...restProps} {...field} checked={!!field.value} />
  );
};

export default Switch;
