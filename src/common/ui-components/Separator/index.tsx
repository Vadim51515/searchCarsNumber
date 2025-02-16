import { type FC } from 'react';
import { View } from 'react-native';

import { useSeparatorStyle } from './styles';
import { type ISeparatorProps } from './types';

export const Separator: FC<ISeparatorProps> = ({ mix }) => {
    const separatorStyles = useSeparatorStyle({ mix });

    return <View style={separatorStyles} />;
};
