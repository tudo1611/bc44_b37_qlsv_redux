import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  UPDATE_USER,
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
export const updateUser = (maSV, newUser) => {
  return {
    type: UPDATE_USER,
    payload: {
      maSV,
      newUser,
    },
  };
};
export const deleteUser = (index) => {
  return {
    type: DELETE_USER,
    index,
  };
};
