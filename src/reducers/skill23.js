import { GET_DATA_SKILL23, UPDATE_SKILL23 } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_SKILL23:
      return { ...state, ...action.payload };
    case UPDATE_SKILL23:
      let newState = state;
      newState.data.skill.milestones[action.payload.index].answer =
        action.payload.answer;
      return { ...state, ...newState };
    default:
      return state;
  }
};
