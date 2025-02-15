import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from '../../context/ThemeContext';
import { fontStyles } from '../../styles/fonts';

export const useButtonStyles = () => {
    const theme = useThemeContext();

    return useMemo(() => ({
        theme,
        styles: StyleSheet.create({
            button: {
                backgroundColor: theme.primaryColor,
                padding: 10,
                borderRadius: 4,
                alignItems: 'center',
            },

            text: {
                ...fontStyles.button,
                color: theme.textForPrimaryColor,
            },
        }),
    }), [theme]);
};
