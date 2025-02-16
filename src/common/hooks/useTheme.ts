import { useColorScheme } from 'react-native';

import type { ITheme } from './types';

export const useTheme = (): ITheme => {
    const deviceScheme = useColorScheme();

    const lightTheme = {
        backgroundColor: '#f6f2f2',
        primaryColor: '#a45db9',
        textForPrimaryColor: '#fff',
        textColor: '#0c0c0c',
        borderColor: '#cec7c7',
    };

    const darkTheme = {
        backgroundColor: '#1f1e24',
        primaryColor: '#A45DB9',
        textForPrimaryColor: '#fff',
        textColor: '#f3e9e9',
        borderColor: '#cec7c7',
    };

    switch (deviceScheme) {
        case 'light':
            return lightTheme;
        case 'dark':
            return darkTheme;
        default:
            return lightTheme;
    }
};
