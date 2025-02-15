import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { WINDOW_HEIGHT } from './common/constants';
import { useThemeContext } from './common/context/ThemeContext';

export const useAppStyles = () => {
    const theme = useThemeContext();

    return useMemo(() => ({
        theme,
        styles: StyleSheet.create({
            app: {
                height: WINDOW_HEIGHT,
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
