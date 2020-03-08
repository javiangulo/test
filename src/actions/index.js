import skill from "../api";
import {
  GET_DATA_SKILL2,
  GET_DATA_SKILL23,
  UPDATE_SKILL2,
  UPDATE_SKILL23
} from "./types";

export const getDataSkill2 = () => async dispatch => {
  const response = await skill.get("/skills/2/milestones");
  dispatch({ type: GET_DATA_SKILL2, payload: response.data });
};

export const getDataSkill23 = () => async dispatch => {
  const response = await skill.get("/skills/23/milestones");
  dispatch({ type: GET_DATA_SKILL23, payload: response.data });
};

export const updateAnswer2 = response => {
  return {
    type: UPDATE_SKILL2,
    payload: response
  };
};
export const updateAnswer23 = response => {
  return {
    type: UPDATE_SKILL23,
    payload: response
  };
};
