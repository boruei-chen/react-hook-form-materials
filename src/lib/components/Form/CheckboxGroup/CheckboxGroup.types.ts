import { UseControllerProps, FieldValues } from 'react-hook-form';
import { Props as $Props } from '@boruei.chen/materials/dist/esm/types/lib/components/Form/Checkbox/Group/Group.types';

export type Props<TFieldValues extends FieldValues> = IProps & UseControllerProps<TFieldValues>;

export interface IProps extends $Props {}