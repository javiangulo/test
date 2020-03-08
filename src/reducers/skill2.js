import { GET_DATA_SKILL2, UPDATE_SKILL2 } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_SKILL2:
      return { ...state, ...action.payload };
    case UPDATE_SKILL2:
      let newState = state;
      newState.data.skill.milestones[action.payload.index].answer =
        action.payload.answer;
      return { ...state, ...newState };
    default:
      return state;
  }
};
