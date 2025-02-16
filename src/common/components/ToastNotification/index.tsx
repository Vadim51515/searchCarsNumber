import type { FC } from 'react';
import {
    Text, View,
} from 'react-native';
import type { ToastConfigParams } from 'react-native-toast-message';

import { useToastNotificationStyle } from './styles';
import type { ToastNotificationProps } from './types';

export const ToastNotification: FC<ToastConfigParams<ToastNotificationProps>> = ({
    text1: title,
    text2: description,
    type,
    props: { children = null },
    isVisible,
}) => {
    const {
        styles,
        theme,
    } = useToastNotificationStyle(!!children);

    if (!isVisible) return null;

    return (
        <View
            testID='toastNotification'
            style={[
                styles.wrapper,
                styles.successWrapper,
            ]}
        >
            <View
                style={styles.text}
                testID='toastNotificationText'
            >
                {!!title && (
                    <Text
                        style={styles.title}
                        testID='toastNotificationTitle'
                    >
                        {title}
                    </Text>
                )}

                {!!description && (
                    <Text
                        style={styles.description}
                        testID='toastNotificationDescription'
                    >
                        {description}
                    </Text>
                )}
            </View>

            {!!children && <View style={styles.content}>{children}</View>}
        </View>
    );
};
