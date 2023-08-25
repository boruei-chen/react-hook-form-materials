import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox as $Checkbox } from '@boruei.chen/materials';
import FormDecorator from '../../../../plugins/storybook/decorators/FormDecorator';
import Checkbox from '../Checkbox.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: []
  }
};

const Meta: ComponentMeta<typeof Checkbox.Group> = {
  title: 'form/Checkbox Group',
  component: Checkbox,
  argTypes: {
    label: {
      type: {
        name: 'string',
        required: false
      }
    },
    name: {
      type: {
        name: 'string',
        required: false
      }
    },
    errorMessage: {
      type: {
        name: 'string',
        required: false
      }
    },
    disabled: {
      type: {
        name: 'boolean',
        required: false
      }
    },
    onChange: {
      type: {
        name: 'function',
        required: false
      }
    }
  }
};

const Story: ComponentStory<typeof Checkbox.Group> = (args) => {
  const formContext = useFormContext();
  return (
    <Checkbox.Group {...args} name="field" control={formContext.control}>
      <$Checkbox value="0">Option 1</$Checkbox>
      <$Checkbox value="1">Option 2</$Checkbox>
      <$Checkbox value="2">Option 3</$Checkbox>
    </Checkbox.Group>
  );
};

// Primary
export const Primary = Story.bind({});
Primary.decorators = [
  FormDecorator(formConfig, 'normal')
];
Primary.args = {
  label: 'Label text'
};

// With Form Template
export const WithFormTemplate = Story.bind({});
WithFormTemplate.decorators = [
  FormDecorator(formConfig, 'template')
];
WithFormTemplate.args = {
  label: 'Label text',
  rules: {
    required: 'This field is required'
  }
};

export default Meta;
