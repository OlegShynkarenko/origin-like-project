import { SAVE_USER } from "../actionTypes";

interface authObject {
  id: number;
  email: string;
  password: string;
}

export const saveUser = (auth: authObject) => {
  console.log("ActionCreator has been called");
  return {
    type: SAVE_USER,
    payload: auth
  };
};
