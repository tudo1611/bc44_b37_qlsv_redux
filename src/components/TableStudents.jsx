// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser, getUserID } from "../action/UserAction";

class TableStudents extends Component {
  renderStudent = () => {
    // eslint-disable-next-line react/prop-types
    const { mangSinhVien, deleteStudent, getStudentID } = this.props;
    // eslint-disable-next-line react/prop-types
    return mangSinhVien.map((student, index) => {
      return (
        <tr key={index}>
          <td>{student.maSV}</td>
          <td>{student.hoTen}</td>
          <td>{student.soDT}</td>
          <td>{student.email}</td>
          <td>
            <button
              onClick={() => {
                deleteStudent(index);
              }}
              className="btn btn-danger mr-3"
            >
              Xóa
            </button>
            <button
             onClick={() => {
              getStudentID(student.maSV);
             }}
             className="btn btn-warning">Sửa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.renderStudent()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.UserReducer.mangSinhVien,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (index) => {
      dispatch(deleteUser(index));
    },
    getStudentID: (maSV) => {
      dispatch(getUserID(maSV));
    }
  };
};
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(TableStudents);
