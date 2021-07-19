import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'Flashcard:notifications';

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync
    );
}

function createNotification() {
    return {
        title: 'STUDY NOW!',
        body: 'Do not forget to study today',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        },
    };
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Notifications.requestPermissionsAsync().then(({ granted }) => {
                    if (granted) {
                        Notifications.cancelAllScheduledNotificationsAsync().then(
                            () => {
                                let tommorow = new Date();
                                tommorow.setDate(tommorow.getDate() + 1);
                                tommorow.setHours(20);
                                tommorow.setMinutes(0);
                                Notifications.scheduleNotificationAsync({
                                    content: createNotification(),
                                    trigger: {
                                        time: tommorow,
                                        repeat: 'day',
                                    },
                                }).then(() => {
                                    AsyncStorage.setItem(
                                        NOTIFICATION_KEY,
                                        JSON.stringify(true)
                                    );
                                });
                            }
                        );
                    }
                });
            }
        });
}
