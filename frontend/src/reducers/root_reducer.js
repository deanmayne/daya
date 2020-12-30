import { combineReducers } from 'redux';
import session from './session_reducer';
import events from './event_reducer';
import errors from './errors_reducer';
import users from './users_reducer';

const RootReducer = combineReducers({
    session,
    users,
    events,
    errors
});

export default RootReducer;
