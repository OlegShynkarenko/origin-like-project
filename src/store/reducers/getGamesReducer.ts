import { FETCH_GAMES_SUCCESS } from "@store/types/games";

const initialState = {
  games: []
};

// @ts-ignore
export const getGamesReducer = (state = initialState, action) => {
  if (action.type === FETCH_GAMES_SUCCESS) {
    return {
      ...state,
      games: action.games
    };
  } else {
    return state;
  }
};
