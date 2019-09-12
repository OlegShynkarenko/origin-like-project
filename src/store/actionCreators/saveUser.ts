import { SAVE_USER } from "../actionTypes";

export const saveUser = (user: object) => {
  console.log("ActionCreator has been called");
  return {
    type: SAVE_USER,
    payload: user
  };
};
