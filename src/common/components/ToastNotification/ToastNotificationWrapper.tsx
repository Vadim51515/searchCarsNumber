import Toast, { type ToastConfigParams } from 'react-native-toast-message';

import type { ToastNotificationProps } from './types';

import { ToastNotification } from '.';

export const ToastNotificationWrapper = () => {
    const toastConfig = {
        success: (props: ToastConfigParams<ToastNotificationProps>) => (
            <ToastNotification {...props} />
        ),
    };

    return (
        <Toast config={toastConfig} />
    );
};
