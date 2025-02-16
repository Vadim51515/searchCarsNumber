import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from '../../context/ThemeContext';
import { fontStyles } from '../../styles/fonts';

export const useInputStyles = () => {
    const theme = useThemeContext();

    return useMemo(() => ({
        theme,
        styles: StyleSheet.create({
            input: {
                borderColor: theme.borderColor,
                borderWidth: 1,
                padding: 10,
                borderRadius: 4,
            },

            text: {
                ...fontStyles.defaultText,
                marginBottom: 5,
            },
        }),
    }), [theme]);
};
