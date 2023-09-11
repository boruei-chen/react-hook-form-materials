# React Hook Form Materials

![npm (scoped)](https://img.shields.io/npm/v/@boruei.chen/react-hook-form-materials)
[![Release](https://github.com/boruei-chen/react-hook-form-materials/actions/workflows/release.yml/badge.svg)](https://github.com/boruei-chen/react-hook-form-materials/actions/workflows/release.yml)
[![Coverage Status](https://coveralls.io/repos/github/boruei-chen/react-hook-form-materials/badge.svg?branch=main)](https://coveralls.io/github/boruei-chen/react-hook-form-materials?branch=main)
![npm](https://img.shields.io/npm/dm/@boruei.chen/react-hook-form-materials)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/boruei-chen/react-hook-form-materials)
![GitHub](https://img.shields.io/github/license/boruei-chen/react-hook-form-materials?color=important)

BRC Materials with React Hook Form.

To see examples and documentation go to https://boruei-chen.github.io/react-hook-form-materials/.

## Installation
BRC React Hook Form Materials is available as an [npm package](https://www.npmjs.com/package/@boruei.chen/react-hook-form-materials).

**npm**
```bash
npm install @boruei.chen/react-hook-form-materials
```

**yarn**
```bash
yarn add @boruei.chen/react-hook-form-materials
```

## Usage
- [Form](#form)
  - [Textbox](#textbox)
  - [Textarea](#textarea)
  - [Password](#password)
  - [Select](#select)
  - [Switch](#switch)
  - [Checkbox](#checkbox)
  - [Checkbox Group](#checkbox-group)
  - [Radio](#radio)
  - [Radio Group](#radio-group)

### Form

#### Textbox
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Textbox } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: ''
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Textbox name="field" control={form.control} placeholder="Placeholder text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

#### Textarea
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Textarea } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: ''
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Textarea name="field" control={form.control} placeholder="Placeholder text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

#### Password
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Password } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: ''
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Password name="field" control={form.control} toggleMask placeholder="Placeholder text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

#### Select
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Select } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: ''
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Select name="field" control={form.control} placeholder="Placeholder text">
        <Select.Option value="0">Option 1</Select.Option>
        <Select.Option value="1">Option 2</Select.Option>
        <Select.Option value="2">Option 3</Select.Option>
      </Select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

#### Switch
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: false
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Switch name="field" control={form.control}>Label text</Switch>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

#### Checkbox
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: false
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Checkbox name="field" control={form.control}>Label text</Checkbox>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

#### Checkbox Group
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { CheckboxGroup } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: []
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <CheckboxGroup name="field" control={form.control}>
        <CheckboxGroup.Checkbox value="0">Option 1</CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox value="1">Option 2</CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox value="2">Option 3</CheckboxGroup.Checkbox>
      </CheckboxGroup>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

#### Radio
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Radio } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: ''
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Radio name="field" control={form.control} value="0">Label text</Radio>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

#### Radio Group
```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { RadioGroup } from '@boruei.chen/react-hook-form-materials';

const App: React.FC = () => {
  const form = useForm({
    defaultValues: {
      field: ''
    }
  });

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <RadioGroup name="field" control={form.control}>
        <RadioGroup.Radio value="0">Option 1</RadioGroup.Radio>
        <RadioGroup.Radio value="1">Option 2</RadioGroup.Radio>
        <RadioGroup.Radio value="2">Option 3</RadioGroup.Radio>
      </RadioGroup>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

## Technologies
[![My Skills](https://skillicons.dev/icons?i=react,typescript)](https://skillicons.dev)

## License
This project is licensed under the terms of the [MIT license](/LICENSE).
