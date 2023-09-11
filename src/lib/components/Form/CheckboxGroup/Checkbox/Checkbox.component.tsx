import React from 'react';
import { Checkbox as $Checkbox } from '@boruei.chen/materials';
import { Props } from './Checkbox.types';

const Checkbox: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <$Checkbox {...restProps}>
      {children}
    </$Checkbox>
  );
};

Checkbox.displayName = $Checkbox.displayName;

export default Checkbox;
