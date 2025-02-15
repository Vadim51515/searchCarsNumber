import {
    Text, View,
} from 'react-native';

import { Button } from '../../../../common/ui-components/Button';
import { useCarsNumberFormStyles } from './styles';

export const CarsNumberForm = () => {
    const { styles } = useCarsNumberFormStyles();

    return (
        <View>
            <Text style={styles.title}>Следующий номер: 067</Text>
            <Button onPress={() => {}}>Номер был найден!</Button>
        </View>
    );
};
