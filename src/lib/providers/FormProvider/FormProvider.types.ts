import { UseFormProps, SubmitHandler, FieldValues } from 'react-hook-form';

export interface Props {
  config: UseFormProps;
  variant: 'normal' | 'template';
  children: React.ReactNode;
  onSubmit?: SubmitHandler<FieldValues>;
}
