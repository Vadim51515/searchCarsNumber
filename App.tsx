import type React from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';

import { store } from './src/common/redux';
import { AppView } from './src/stacks';
import { useAppStyles } from './src/styles';
function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const { styles } = useAppStyles();

    const backgroundStyle = {
        backgroundColor: isDarkMode
            ? Colors.darker
            : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <Provider store={store}>
                <StatusBar
                    backgroundColor={backgroundStyle.backgroundColor}
                    barStyle={isDarkMode
                        ? 'light-content'
                        : 'dark-content'}
                />
                <View style={styles.app} >
                    <AppView />
                </View>
            </Provider>
        </SafeAreaView>
    );
}

export default App;
