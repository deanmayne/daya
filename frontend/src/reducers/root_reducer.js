import { combineReducers } from 'redux';
import session from './session_reducer';
import events from './event_reducer';
import errors from './errors_reducer'

const RootReducer = combineReducers({
    session,
    events,
    errors
});

export default RootReducer;
