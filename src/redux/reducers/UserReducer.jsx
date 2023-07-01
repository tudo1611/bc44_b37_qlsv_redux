const stateDefault = {
  mangSinhVien: [],
  student: null,
  isUpdateStudent: false,
  isDisabledInput: false,
  edittingStudentID: null,
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_USER": {
      //thêm dữ liệu sinh viên vào mangSinhVien
      const mangSVUpdate = [...state.mangSinhVien, action.student];
      state.mangSinhVien = mangSVUpdate;
      return { ...state };
    }
    case "DELETE_USER": {
      const mangSVUpdate = [...state.mangSinhVien];
      //xóa sv dựa vào index
      mangSVUpdate.splice(action.index, 1);
      state.mangSinhVien = mangSVUpdate;
      return { ...state };
    }
    case "GET_USER_ID": {
      // state.student = action.payload.
      const listStudents = [...state.mangSinhVien];
      let maSVUpdate = action.payload.maSV;
      // console.log("get maSVUpdate: ", maSVUpdate)
      let sinhVien = listStudents.find(({maSV}) => maSV === maSVUpdate);
      // console.log("get sinh vien: ", sinhVien)
      state.student = sinhVien
      state.isUpdateStudent = true
      state.isDisabledInput = true

      return {...state};
    }
    case "UPDATE_IS_UPDATE_USER": {
      state.isUpdateStudent = action.payload.boolean

      return {...state}
    }
    case "UPDATE_USER": {
      let cloneMangSinhVien = [...state.mangSinhVien]
      let index = cloneMangSinhVien.findIndex(item => item.maSV === action.payload.userUpdate.maSV)
      cloneMangSinhVien[index] = action.payload.userUpdate
      console.log("get update user: ", cloneMangSinhVien)
      state.mangSinhVien = cloneMangSinhVien
      state.isDisabledInput = action.payload.isDisabledInput
      return { ...state };
    }
  }
  return { ...state };
};
