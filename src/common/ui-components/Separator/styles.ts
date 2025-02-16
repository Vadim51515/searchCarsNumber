import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from '../../context/ThemeContext';
import { type ISeparatorProps } from './types';

export const useSeparatorStyle = ({ mix }: ISeparatorProps) => {
    const theme = useThemeContext();

    const separatorVariants = StyleSheet.create({
        separator: {
            margin: 0,
            borderBottomWidth: 1,
            borderBottomColor: theme.borderColor,
        },
    });

    return useMemo(() => [
        separatorVariants.separator,
        mix,
    ], [
        theme,
        mix,
    ]);
};
