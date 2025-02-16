import type { KeyboardTypeOptions } from 'react-native';

import type {
    Func, TNumStr,
} from '../../types';

export interface IInputProps {
    label: string;
    keyboardType?: KeyboardTypeOptions;
    value: TNumStr;
    onChange: Func<[string]>;
}
