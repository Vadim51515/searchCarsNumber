import Toast from 'react-native-toast-message';

import { COMPLIMENTS_ARRAY } from '../constants';

export const formatNumber = (num: number) => {
    return num.toString().padStart(3, '0');
};

export const showNewNumberToast = () => {
    const text2 = COMPLIMENTS_ARRAY[Math.floor(Math.random() * COMPLIMENTS_ARRAY.length)];

    Toast.show({
        type: 'success',
        text1: 'Был найден новый номер!',
        text2,
    });
};
