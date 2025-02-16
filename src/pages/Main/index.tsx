import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { useActions } from '../../common/hooks/useActions';
import { Separator } from '../../common/ui-components/Separator';
import { CarsNumberForm } from './components/CarsNumberForm';
import { HeadInformation } from './components/HeadInformation';
import { useMainPageStyles } from './styles';
import { mainPageActions } from './redux/actions';
import {
    isFoundMaxSearchNumberSelector, isFoundMinSearchNumberSelector,
} from './redux/selectors';

export const Main = () => {
    const { styles } = useMainPageStyles();

    const isFoundMaxSearchNumber = useSelector(isFoundMaxSearchNumberSelector);
    const isFoundMinSearchNumber = useSelector(isFoundMinSearchNumberSelector);

    const {
        changeMaxSearchNumber,
        changeMinSearchNumber,
    } = useActions(mainPageActions);

    return (
        <View style={styles.wrapper}>
            <HeadInformation />

            <View style={styles.content}>
                {!isFoundMinSearchNumber && (
                    <CarsNumberForm
                        changeSearchNumber={changeMinSearchNumber}
                        type='min'
                    />
                )}

                {!isFoundMinSearchNumber && !isFoundMaxSearchNumber && <Separator mix={{ marginVertical: 50 }} />}

                {!isFoundMaxSearchNumber && (
                    <CarsNumberForm
                        changeSearchNumber={changeMaxSearchNumber}
                        type='max'
                    />
                )}
            </View>
        </View>
    );
};
