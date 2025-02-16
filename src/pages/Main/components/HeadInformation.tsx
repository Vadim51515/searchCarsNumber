import {
    Text,
    View,
} from 'react-native';
import { useSelector } from 'react-redux';

import {
    MAX_SEARCH_NUMBER, MIN_SEARCH_NUMBER,
} from '../../../common/constants';
import { useMainPageStyles } from '../styles';
import {
    isFoundMaxSearchNumberSelector,
    isFoundMinSearchNumberSelector,
    isSearchNumberCrossedSelector,
    maxSearchNumberSelector,
    minSearchNumberSelector,
} from '../redux/selectors';

export const HeadInformation = () => {
    const { styles } = useMainPageStyles();

    const minSearchNumber = useSelector(minSearchNumberSelector);
    const maxSearchNumber = useSelector(maxSearchNumberSelector);

    const iSearchNumberCrossed = useSelector(isSearchNumberCrossedSelector);
    const isFoundMaxSearchNumber = useSelector(isFoundMaxSearchNumberSelector);
    const isFoundMinSearchNumber = useSelector(isFoundMinSearchNumberSelector);

    console.log('isFoundMaxSearchNumber', isFoundMaxSearchNumber);
    console.log('isFoundMinSearchNumber', isFoundMinSearchNumber);

    return (
        <View>
            {!isFoundMinSearchNumber && <Text style={styles.text}>{`С первого до последнего номера осталось найти: ${MAX_SEARCH_NUMBER - minSearchNumber + 1}`}</Text>}

            {!isFoundMaxSearchNumber && <Text style={styles.text}>{`С последнего до первого номера осталось найти: ${maxSearchNumber - MIN_SEARCH_NUMBER + 1}`}</Text>}

            {!iSearchNumberCrossed && <Text style={styles.text}>{`До пересечения номеров осталось найти: ${maxSearchNumber - minSearchNumber + 1}`}</Text>}
        </View>
    );
};
