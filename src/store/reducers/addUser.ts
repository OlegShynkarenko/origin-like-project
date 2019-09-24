import { UserAction, SAVE_USER, SOME_ACTION } from "../types/user";

const initialState = {
  auth: {}
};

export const userLogIn = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        auth: {
          id: action.payload.id,
          email: action.payload.email,
          password: action.payload.password
        }
      };
    case SOME_ACTION:
      return "something";
    default:
      return state;
  }
};
