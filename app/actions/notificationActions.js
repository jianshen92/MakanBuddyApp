/* notification actions */
import * as types from './types';

export function addNotification(notification) {
    return {
        type: types.ADD_NOTIFICATION,
        notification
    };
}

export function removeNotification(notification) {
    return {
        type: types.REMOVE_NOTIFICATION,
        notification
    };
}