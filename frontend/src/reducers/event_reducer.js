import {
  RECEIVE_EVENTS,
  RECEIVE_USER_EVENTS,
  RECEIVE_NEW_EVENT,
} from "../actions/event_actions";

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_EVENTS:

      newState = Object.assign({}, newState, action.events.data)
      
      return newState;
    case RECEIVE_USER_EVENTS:
      // newState.user = action.events.data;
      newState = Object.assign({}, newState, action.events.data);
      return newState;
    // case RECEIVE_NEW_EVENT:
    //   newState.new = action.event.data;
    //   return newState;
    default:
      return state;
  }
};

export default EventsReducer;
