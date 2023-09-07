import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Textarea as $Textarea } from '@boruei.chen/materials';
import { Props } from './Textarea.types';

const Textarea = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, ...restProps } = props;
  const { field } = useController({ name, rules, shouldUnregister, defaultValue, control });

  return (
    <$Textarea {...restProps} {...field} />
  );
};

Textarea.displayName = 'RHFTextarea';

export default Textarea;
