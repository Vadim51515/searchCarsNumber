import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from '../pages/Main';

const Stack = createStackNavigator();

export const AppView = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={InitialScreen}
                    name='InitialScreen'
                />
                <Stack.Screen
                    component={Main}
                    name='MainScreen'
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
