import * as ActionType from "./../constant";

export const actDeleteUser = (user) => {
  return {
    type: ActionType.DELETE_USER,
    payload: user,
  };
};

export const actEditUser = (user) => {
  return {
    type: ActionType.EDIT_USER,
    payload: user,
  };
};

export const actSubmitUser = (user) => {
  return {
    type: ActionType.SUBMIT_USER,
    payload: user,
  };
};

export const actGetKeyword = (keyword) => {
  return {
    type: ActionType.GET_KEYWORD,
    payload: keyword,
  };
};
