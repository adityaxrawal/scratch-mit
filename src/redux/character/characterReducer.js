import { SET_ANGLE } from "./actionTypes";

const initialState = {
  characters: [{ id: "sprite", angle: 0} ],
  active: "sprite",
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANGLE:
      return {
        ...state,
        characters: {
          ...state.characters,
          angle: action.angle,
        },
      };
    default:
      return state;
  }
};
