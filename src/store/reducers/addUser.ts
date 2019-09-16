const initialState = {
  auth: {}
};

interface Data {
  payload: {
    id: number;
    email: string;
    password: string;
  };
  type: string;
}

export const userLogIn = (state = initialState, action: Data) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        auth: {
          id: action.payload.id,
          email: action.payload.email,
          password: action.payload.password
        }
      };
    case "SOME_ACTION":
      return "something";
    default:
      return state;
  }
};
