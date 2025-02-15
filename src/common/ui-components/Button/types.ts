import type { GestureResponderEvent } from 'react-native';

import type { Func } from '../../types';

export interface IButtonProps {
    onPress: Func<[GestureResponderEvent]>;
}
