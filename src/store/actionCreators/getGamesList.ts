import { GET_GAMES_LIST, GET_GAMES_FOR_CURRENT_PAGE } from "@store/types/games";

interface Payload {
  page?: number;
  limit?: number;
}

export interface Action {
  type: typeof GET_GAMES_FOR_CURRENT_PAGE;
  payload: Payload;
}

export const getGamesList = () => {
  return {
    type: GET_GAMES_LIST
  };
};

export const getGamesListForACertainPage = (payload: Payload): Action => {
  return {
    type: GET_GAMES_FOR_CURRENT_PAGE,
    payload: payload
  };
};
