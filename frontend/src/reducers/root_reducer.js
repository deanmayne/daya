import { combineReducers } from 'redux';
import session from './session_reducer';
import events from './event_reducer';

const RootReducer = combineReducers({
    session,
    events
});

export default RootReducer;
