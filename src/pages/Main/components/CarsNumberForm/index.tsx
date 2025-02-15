import type { FC } from 'react';
import {
    Text, View,
} from 'react-native';

import { useParamSelector } from '../../../../common/hooks/useParamSelector';
import { Button } from '../../../../common/ui-components/Button';
import { searchNumberSelector } from '../../redux/selectors';
import type { ICarsNumberForm } from '../../types';
import { useCarsNumberFormStyles } from './styles';

export const CarsNumberForm: FC<ICarsNumberForm> = ({
    changeSearchNumber,
    type,
}) => {
    const { styles } = useCarsNumberFormStyles();

    const searchNumber = useParamSelector(searchNumberSelector, type);

    return (
        <View>
            <Text style={styles.title}>{`Следующий номер: ${searchNumber}`}</Text>
            <Button onPress={() => { changeSearchNumber(); }}>Номер был найден!</Button>
        </View>
    );
};
