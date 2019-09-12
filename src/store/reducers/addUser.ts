const initialState = {
  users: []
};

interface Data {
  payload: {
    id: number;
    email: string;
    password: string;
  };
  type: string;
}

export const saveUserReducer = (state = initialState, action: Data) => {
  console.log("REDUCER", action);
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        users: [
          {
            id: action.payload.id,
            email: action.payload.email,
            password: action.payload.password
          }
        ]
      };
    case "SOME_ACTION":
      return "something";
    default:
      return state;
  }
};
