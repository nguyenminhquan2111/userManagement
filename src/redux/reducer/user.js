import data from "../../page/data.json";
import * as ActionType from "../constant";

let initialState = {
  userList: data,
  userEdit: null,
  keyword: "",
};

//child reducer
const userReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.DELETE_USER: {
      let userList = [...state.userList];
      const index = state.userList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        userList.splice(index, 1);
        state.userList = userList;
      }
      return { ...state };
    }

    case ActionType.SUBMIT_USER: {
      let userList = [...state.userList];

      if (action.payload.id) {
        const index = state.userList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          userList[index] = action.payload;
        }
      } else {
        const userNew = { ...action.payload, id: Math.random() };
        userList = [...state.userList, userNew];
      }

      state.userList = userList;
      return { ...state };
    }

    case ActionType.EDIT_USER: {
      state.userEdit = action.payload;
      return { ...state };
    }

    case ActionType.GET_KEYWORD: {
      state.keyword = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
