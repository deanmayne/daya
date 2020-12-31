import axios from "axios";

export const getEvents = () => {
  return axios.get("/api/events/");
};

export const getUserEvents = (username) => {
  return axios.get(`/api/events/${username}`);
};

export const getEvent = (event_id) => {
  return axios.get(`/api/events/${event_id}`);
};

export const writeEvent = (data) => {
  return axios.post("/api/events/", data);
};

export const updateEvent = (event) => {
    debugger
  return axios.patch(`/api/events/${event.id}`, event);
};