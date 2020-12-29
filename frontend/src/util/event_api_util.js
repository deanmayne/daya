import axios from "axios";

export const getEvents = () => {
  return axios.get("/api/events/");
};


export const getUserEvents = (user_id) => {
  return axios.get(`/api/events/user/${user_id}`);
};

export const getEvent = (event_id) => {
  return axios.get(`/api/events/${event_id}`);
};

export const writeEvent = (data) => {
  return axios.post("/api/events/", data);
};

export const updateEvent = (event) => {
  return axios.post(`/api/events/${event.id}`, event);
};