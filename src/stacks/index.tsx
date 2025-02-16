import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    navigationRef, resetNavigationWithSplash,
} from '../common/utils/rootNavigation';
import { isInitSelector } from '../common/redux/selectors';
import { InitScreen } from '../screens/InitScreen';
import { MainScreen } from '../screens/MainScreen';

const Stack = createStackNavigator();

export const AppView = () => {
    const isInit = useSelector(isInitSelector);

    useEffect(() => {
        console.log('useEffect');

        if (!isInit) {
            resetNavigationWithSplash('InitScreen');

            return;
        }

        resetNavigationWithSplash('MainScreen');
    }, [isInit]);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    component={InitScreen}
                    name='InitScreen'
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    component={MainScreen}
                    name='MainScreen'
                    options={{ header: () => null }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
