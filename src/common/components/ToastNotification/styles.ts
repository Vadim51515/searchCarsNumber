import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from '../../context/ThemeContext';
import { fontStyles } from '../../styles/fonts';

export const useToastNotificationStyle = (hasChildren: boolean) => {
    const theme = useThemeContext();

    return useMemo(() => ({
        theme,
        styles: StyleSheet.create({
            wrapper: {
                width: '90%',
                flexDirection: 'row',
                alignItems: hasChildren
                    ? 'center'
                    : 'flex-start',
                gap: 8,
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12,
                height: 'auto',
            },

            successWrapper: { backgroundColor: theme.successColor },

            text: {
                gap: 4,
                ...(!hasChildren && { flex: 1 }),
            },

            content: { marginLeft: 'auto' },

            title: {
                ...fontStyles.subTitle,
                color: theme.textForPrimaryColor,
            },

            description: {
                ...fontStyles.defaultText,
                color: theme.textForPrimaryColor,
            },
        }),
    }), [theme]);
};
