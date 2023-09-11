import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormDecorator from '../../../plugins/storybook/decorators/FormDecorator';
import CheckboxGroup from './CheckboxGroup.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: []
  }
};

const Meta: ComponentMeta<typeof CheckboxGroup> = {
  title: 'form/Checkbox Group',
  component: CheckboxGroup,
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

const Story: ComponentStory<typeof CheckboxGroup> = (args) => {
  const formContext = useFormContext();
  return (
    <CheckboxGroup {...args} name="field" control={formContext.control}>
      <CheckboxGroup.Checkbox value="0">Option 1</CheckboxGroup.Checkbox>
      <CheckboxGroup.Checkbox value="1">Option 2</CheckboxGroup.Checkbox>
      <CheckboxGroup.Checkbox value="2">Option 3</CheckboxGroup.Checkbox>
    </CheckboxGroup>
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
