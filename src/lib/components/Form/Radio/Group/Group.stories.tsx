import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio as $Radio } from '@boruei.chen/materials';
import FormDecorator from '../../../../plugins/storybook/decorators/FormDecorator';
import Radio from '../Radio.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: ''
  }
};

const Meta: ComponentMeta<typeof Radio.Group> = {
  title: 'form/Radio Group',
  component: Radio,
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

const Story: ComponentStory<typeof Radio.Group> = (args) => {
  const formContext = useFormContext();
  return (
    <Radio.Group {...args} name="field" control={formContext.control}>
      <$Radio value="0">Option 1</$Radio>
      <$Radio value="1">Option 2</$Radio>
      <$Radio value="2">Option 3</$Radio>
    </Radio.Group>
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
