import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from './common/context/ThemeContext';

export const useAppStyles = () => {
    const theme = useThemeContext();

    return useMemo(() => ({
        theme,
        styles: StyleSheet.create({
            app: {
                height: '100%',
                backgroundColor: theme.backgroundColor,
                padding: 16,
            },

            text: {
                fontFamily: 'Iskra-Regular', // Убедитесь, что имя шрифта совпадает с именем файла
                fontSize: 20,
                color: 'white',
            },
        }),
    }), [theme]);
};
