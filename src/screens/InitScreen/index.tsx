import { useState } from 'react';
import {
    Text, View,
} from 'react-native';

import {
    MAX_SEARCH_NUMBER, MIN_SEARCH_NUMBER,
} from '../../common/constants';
import type { TNumStr } from '../../common/types';
import { Button } from '../../common/ui-components/Button';
import { Input } from '../../common/ui-components/Input';
import { useInitScreenStyles } from './styles';

export const InitScreen = () => {
    const { styles } = useInitScreenStyles();

    const [minNumber, setMinNumber] = useState<TNumStr>(MIN_SEARCH_NUMBER);
    const [maxNumber, setMaxNumber] = useState<TNumStr>(MAX_SEARCH_NUMBER);

    const onNext = () => {
        
    }


    return (
        <View>
            <Text style={styles.title}>
                Это приложение, с помощью которого вы сможете удобно по порядку собирать номера машин
            </Text>

            <View style={styles.inputs}>
                <Input
                    keyboardType='numeric'
                    label='Минимальный номер который нужно найти'
                    onChange={setMinNumber}
                    value={minNumber}
                />

                <Input
                    keyboardType='numeric'
                    label='Максимальный номер который нужно найти'
                    onChange={setMaxNumber}
                    value={maxNumber}
                />
            </View>

            <Button onPress={() => {}}>Далее</Button>
        </View>
    );
};
