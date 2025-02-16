import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from '../../common/context/ThemeContext';
import { fontStyles } from '../../common/styles/fonts';

export const useInitScreenStyles = () => {
    const theme = useThemeContext();

    return useMemo(() => ({
        theme,
        styles: StyleSheet.create({
            title: {
                ...fontStyles.title,
                marginBottom: 40,
                color: theme.textColor,
            },

            inputs: {
                gap: 20,
                marginBottom: 40,
            },

        }),
    }), [theme]);
};
