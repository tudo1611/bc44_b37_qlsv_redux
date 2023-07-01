import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  UPDATE_USER,
  GET_USER_ID,
  UPDATE_IS_UPDATE_USER,
} from "../constants/UserType";

export const addUser = (student) => {
  return {
    type: ADD_USER,
    student,
  };
};
export const editUser = (maSV) => {
  return {
    type: EDIT_USER,
    payload: maSV,
  };
};
export const updateUser = (userUpdate, isDisabledInput) => {
  return {
    type: UPDATE_USER,
    payload: {
      userUpdate,
      isDisabledInput,
    },
  };
};
export const deleteUser = (index) => {
  return {
    type: DELETE_USER,
    index,
  };
};
export const getUserID = (maSV) => {
  return {
    type: GET_USER_ID,
    payload: {maSV}
  }
}
export const updateIsUpdateUser = (boolean, isDisabledInput) => {
  return {
    type: UPDATE_IS_UPDATE_USER,
    payload: {boolean, isDisabledInput}
  }
}
