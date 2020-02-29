import { GET_GAMES_LIST } from "@store/types/games";

export const getGamesList = () => {
  return {
    type: GET_GAMES_LIST
  };
};
