import {
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FOR_CURRENT_PAGE_SUCCESS
} from "@store/types/games";

const initialState: Array<Game> = [];

export interface State {
  games: Array<Game>;
}

export interface Game {
  id: number;
  title: string;
  category: string;
  worksOnWindows: boolean;
  worksOnMac: boolean;
  worksOnLinux: boolean;
  price: string;
}

interface Data {
  data: Array<Game>;
  type: string;
}

// @ts-ignore
export const getGamesReducer = (state = initialState, action: Data) => {
  if (action.type === FETCH_GAMES_SUCCESS) {
    return [...state, ...action.data];
  } else if (action.type === FETCH_GAMES_FOR_CURRENT_PAGE_SUCCESS) {
    return [...action.data];
  } else {
    return state;
  }
};
