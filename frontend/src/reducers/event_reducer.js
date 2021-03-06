import {
  RECEIVE_EVENTS,
  RECEIVE_USER_EVENTS,
  RECEIVE_NEW_EVENT,
  REMOVE_EVENT,
} from "../actions/event_actions";

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      newState = Object.assign({}, newState, action.events.data);
      return newState;
    case RECEIVE_USER_EVENTS:
      newState = Object.assign({}, newState, action.events.data);
      return newState;
    case RECEIVE_NEW_EVENT:
      newState = Object.assign({}, newState, action.event.data);
      return newState;
    case REMOVE_EVENT:
      const id = action.event.config.url.replace("/api/events/", "");
      let i = 0;
      Object.values(newState).forEach((event) => {
        if (event._id === id) {
          delete newState[i];
        }
        i = i + 1;
      });
      return newState;

    default:
      return state;
  }
};

export default EventsReducer;
