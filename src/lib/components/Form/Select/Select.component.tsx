import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Select as $Select } from '@boruei.chen/materials';
import { ChangeEvent } from '@boruei.chen/materials/dist/esm/types/lib/components/Form/Select/Select.types';
import Option from './Option';
import { Props } from './Select.types';

const Select = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, errorMessage, children, onChange, ...restProps } = props;
  const { field, fieldState } = useController({ name, rules, shouldUnregister, defaultValue, control });

  const handleChange = (event: ChangeEvent) => {
    field.onChange(event.value);
    if (onChange) onChange(event);
  };

  return (
    <$Select
      {...restProps}
      {...field}
      errorMessage={fieldState.error?.message ?? errorMessage}
      onChange={handleChange}
    >
      {children}
    </$Select>
  );
};

Select.displayName = 'RHFSelect';

export default Object.assign(Select, { Option });
