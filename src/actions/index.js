import { SET_USER, CLEAR_USER, SET_CURRENT_CHANNEL } from "./types";

// passing the user data that we are getting
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: {
      currentUser: user, // data that our state needs to be changed with
    },
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

/* Channel Actions */
export const setCurrentChannel = (channel) => {
  return {
    type: SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel,
    },
  };
};
