import {
    Text, TouchableOpacity,
} from 'react-native';

import type { CFC } from '../../types';
import { useButtonStyles } from './styles';
import type { IButtonProps } from './types';

export const Button: CFC<IButtonProps> = ({
    onPress,
    children,
}) => {
    const { styles } = useButtonStyles();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
