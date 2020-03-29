import { FETCH_GAMES_SUCCESS } from "@store/types/games";

const initialState = {
  games: []
};

export interface State {
  games: {
    games: Array<Game>;
  };
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
    return {
      ...state,
      games: action.data
    };
  } else {
    return state;
  }
};
