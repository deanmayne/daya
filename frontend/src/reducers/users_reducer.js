import {
  RECEIVE_ALL_USERS
} from "../actions/session_actions";


export default function(state = {}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS: 
         newState = Object.assign({}, newState, action.users.data)
      // debugger
      return newState;
        default:
            return state;
    }
}