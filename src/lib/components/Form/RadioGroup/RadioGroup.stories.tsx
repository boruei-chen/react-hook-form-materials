import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormDecorator from '../../../plugins/storybook/decorators/FormDecorator';
import RadioGroup from './RadioGroup.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: ''
  }
};

const Meta: ComponentMeta<typeof RadioGroup> = {
  title: 'form/Radio Group',
  component: RadioGroup,
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

const Story: ComponentStory<typeof RadioGroup> = (args) => {
  const formContext = useFormContext();
  return (
    <RadioGroup {...args} name="field" control={formContext.control}>
      <RadioGroup.Radio value="0">Option 1</RadioGroup.Radio>
      <RadioGroup.Radio value="1">Option 2</RadioGroup.Radio>
      <RadioGroup.Radio value="2">Option 3</RadioGroup.Radio>
    </RadioGroup>
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
