import { View } from 'react-native';

import { useActions } from '../../common/hooks/useActions';
import { CarsNumberForm } from './components/CarsNumberForm';
import { useMainPageStyles } from './styles';
import { mainPageActions } from './redux/actions';

export const Main = () => {
    const {
        styles,
        theme,
    } = useMainPageStyles();

    const {
        changeMaxSearchNumber,
        changeMinSearchNumber,
    } = useActions(mainPageActions);

    return (
        <View style={styles.wrapper}>
            <CarsNumberForm
                changeSearchNumber={changeMinSearchNumber}
                type='min'
            />
            <CarsNumberForm
                changeSearchNumber={changeMaxSearchNumber}
                type='max'
            />
        </View>
    );
};
