import type { FC } from 'react';
import {
    Text,
    TextInput,
    View,
} from 'react-native';

import { useInputStyles } from './styles';
import type { IInputProps } from './types';

export const Input: FC<IInputProps> = ({
    label,
    keyboardType = 'default',
    value = '',
    onChange,
}) => {
    const { styles } = useInputStyles();

    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <TextInput
                keyboardType={keyboardType}
                onChangeText={onChange}
                style={styles.input}
                value={String(value)}
            />
        </View>
    );
};
