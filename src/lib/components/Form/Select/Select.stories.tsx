import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormDecorator from '../../../plugins/storybook/decorators/FormDecorator';
import Select from './Select.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: ''
  }
};

const Meta: ComponentMeta<typeof Select> = {
  title: 'form/Select',
  component: Select,
  argTypes: {
    variant: {
      options: ['outline', 'underline', 'pill', 'filled'],
      control: {
        type: 'radio'
      }
    },
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

const Story: ComponentStory<typeof Select> = (args) => {
  const formContext = useFormContext();
  return (
    <Select {...args} name="field" control={formContext.control}>
      <Select.Option value="0">Option 1</Select.Option>
      <Select.Option value="1">Option 2</Select.Option>
      <Select.Option value="2">Option 3</Select.Option>
    </Select>
  );
};

// Primary
export const Primary = Story.bind({});
Primary.decorators = [
  FormDecorator(formConfig, 'normal')
];
Primary.args = {
  label: 'Label text',
  placeholder: 'Placeholder text'
};

// With Form Template
export const WithFormTemplate = Story.bind({});
WithFormTemplate.decorators = [
  FormDecorator(formConfig, 'template')
];
WithFormTemplate.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  rules: {
    required: 'This field is required'
  }
};

export default Meta;
