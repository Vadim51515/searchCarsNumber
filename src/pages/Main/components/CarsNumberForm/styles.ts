import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from '../../../../common/context/ThemeContext';
import { fontStyles } from '../../../../common/styles/fonts';

export const useCarsNumberFormStyles = () => {
    const theme = useThemeContext();

    return useMemo(() => ({
        theme,
        styles: StyleSheet.create({
            title: {
                ...fontStyles.title,
                color: theme.textColor,
            },

        }),
    }), [theme]);
};
