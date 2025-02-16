import BootSplash from 'react-native-bootsplash';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const resetNavigation = (name: string) => {
    if (navigationRef.isReady()) {
        navigationRef.reset({
            index: 1,
            history: [{ name }],
            routes: [{ name }],
        });
    }
};

export const resetNavigationWithSplash = (name: string) => {
    resetNavigation(name);
    BootSplash.hide({ fade: true });
};
