const stateDefault = {
  mangSinhVien: [],
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
    case "EDIT_USER": {
      return {};
    }
  }
  return { ...state };
};
