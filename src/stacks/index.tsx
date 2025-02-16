import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { InitScreen } from '../screens/InitScreen';
import { MainScreen } from '../screens/MainScreen';

const Stack = createStackNavigator();

export const AppView = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='InitScreen'>
                <Stack.Screen
                    component={InitScreen}
                    name='InitScreen'
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    component={MainScreen}
                    name='MainScreen'
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
