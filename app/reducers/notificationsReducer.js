import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = []; 

//maybe return to edit this later to full object status rather than array
//ideas for notifications attributes: brief message, some navigation link to claims page, maps etc
//is it enough to store notifications as an array?

export default const notificationsReducer = createReducer(initialState,{
    [types.ADD_NOTIFICATION](state, action) {
        return [
            ...state,
            action.notification
        ]
    },
    [types.REMOVE_NOTIFICATION](state, action) {
        return state.filter(item=>item !== action.notification)
    }
    //fetch more? should this responsibility be here?
}
);
