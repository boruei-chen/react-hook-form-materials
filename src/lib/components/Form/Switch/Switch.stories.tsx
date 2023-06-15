import React from 'react';
import { useFormContext, UseFormProps } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormDecorator from '../../../plugins/storybook/decorators/FormDecorator';
import Switch from './Switch.component';

const formConfig: UseFormProps = {
  defaultValues: {
    field: false
  }
};

const Meta: ComponentMeta<typeof Switch> = {
  title: 'form/Switch',
  component: Switch,
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
    checked: {
      type: {
        name: 'boolean',
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

const Story: ComponentStory<typeof Switch> = (args) => {
  const formContext = useFormContext();
  return <Switch {...args} name="field" control={formContext.control} />;
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
  label: 'Label text'
};

export default Meta;
