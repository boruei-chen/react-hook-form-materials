import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { Checkbox as $Checkbox } from '@boruei.chen/materials';
import { Props as CheckboxProps } from '@boruei.chen/materials/dist/esm/types/lib/components/Form/Checkbox/Checkbox.types';
import Checkbox from './Checkbox';
import { Props } from './CheckboxGroup.types';

const CheckboxGroup = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, errorMessage, children, onChange, ...restProps } = props;
  const { field, fieldState } = useController({ name, rules, shouldUnregister, defaultValue, control });
  const { value, ...restField } = field;

  const handleChange = (values: CheckboxProps['value'][]) => {
    field.onChange(values);
    if (onChange) onChange(values);
  };

  return (
    <$Checkbox.Group
      {...restProps}
      {...restField}
      values={value}
      errorMessage={fieldState.error?.message ?? errorMessage}
      onChange={handleChange}
    >
      {children}
    </$Checkbox.Group>
  );
};

CheckboxGroup.displayName = 'RHFCheckboxGroup';

export default Object.assign(CheckboxGroup, { Checkbox });
