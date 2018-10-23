// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
//import * as notificationActions from './notificationActions;

export const ActionCreators = Object.assign(
    {},
    loginActions,
    navigationActions/*,
    notificationActions*/
);
