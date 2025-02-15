import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT } from './constants';

export const useAppStyles = () => {

    return useMemo(() => ({
        styles: StyleSheet.create({
             background: {
                height: WINDOW_HEIGHT,
                backgroundColor: '#A45DB9',
            },

            text:{
                fontFamily: 'Iskra-Regular', // Убедитесь, что имя шрифта совпадает с именем файла
                fontSize: 20,
                color: 'white',
            },
        }),
    }), []);
};
