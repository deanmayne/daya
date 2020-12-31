import { getEvents, getUserEvents, writeEvent, updateEvent } from "../util/event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events,
});

export const receiveUserEvents = (events) => ({
  type: RECEIVE_USER_EVENTS,
  events,
});

export const receiveNewEvent = (event) => ({
  type: RECEIVE_NEW_EVENT,
  event
});

export const fetchEvents = () => (dispatch) =>
  getEvents()
    .then((events) => dispatch(receiveEvents(events)))
    .catch((err) => console.log(err));

export const fetchUserEvents = (username) => (dispatch) =>
  getUserEvents(username)
    .then((events) => dispatch(receiveUserEvents(events)))
    .catch((err) => console.log(err));

export const composeEvent = (data) => (dispatch) =>
  writeEvent(data)
    .then((event) => dispatch(receiveNewEvent(event)))
    .catch((err) => console.log(err));

export const updateAnEvent = (event) => (dispatch) =>
  updateEvent(event)
    .then((event) => dispatch(receiveNewEvent(event)))
    .catch((err) => console.log(err));