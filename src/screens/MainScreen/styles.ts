import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from '../../common/context/ThemeContext';
import { fontStyles } from '../../common/styles/fonts';

export const useMainScreenStyles = () => {
    const theme = useThemeContext();

    return useMemo(() => ({
        theme,
        styles: StyleSheet.create({
            wrapper: {
                flex: 1,
                justifyContent: 'center',
            },

            content: {
                flex: 1,
                justifyContent: 'flex-end',
            },

            text: {
                ...fontStyles.title,
                marginBottom: 10,
                color: theme.textColor,
            },

        }),
    }), [theme]);
};
