import React from 'react';
import { Radio as $Radio } from '@boruei.chen/materials';
import { Props } from './Radio.types';

const Radio: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <$Radio {...restProps}>
      {children}
    </$Radio>
  );
};

Radio.displayName = $Radio.displayName;

export default Radio;
