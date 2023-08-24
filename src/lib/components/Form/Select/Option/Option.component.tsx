import React from 'react';
import { Select as $Select } from '@boruei.chen/materials';
import { Props } from './Option.types';

const Option: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <$Select.Option {...restProps}>
      {children}
    </$Select.Option>
  );
};

Option.displayName = $Select.Option.displayName;

export default Option;
