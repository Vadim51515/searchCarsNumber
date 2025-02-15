import { View } from 'react-native';

import { CarsNumberForm } from './components/CarsNumberForm';
import { useMainPageStyles } from './styles';

export const Main = () => {
    const {
        styles,
        theme,
    } = useMainPageStyles();

    return (
        <View style={styles.wrapper}>
            <CarsNumberForm />
            <CarsNumberForm />
        </View>
    );
};
