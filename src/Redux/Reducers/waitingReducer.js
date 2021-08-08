import { DISPLAY_WAITING, HIDDEN_WAITING } from "../Types/waitingType";

const initialState = {
  isWaiting: false,
};

export const waitingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_WAITING: {
      return { ...state, isWaiting: true };
    }
    case HIDDEN_WAITING: {
      return { ...state, isWaiting: false };
    }

    default: {
      return state;
    }
  }
};
