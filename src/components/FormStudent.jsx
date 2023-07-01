import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, updateIsUpdateUser, updateUser } from "../action/UserAction";

class FormStudent extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
  };

  handleOnChange = (e) => {
    // console.log("get e: ", e)
    let { name, value, type, pattern } = e.target;
    let errorMessage = "";
    //kiểm tra rỗng

    if (value.trim() === "") {
      errorMessage = name + " không được để trống !";
    } else {
      if (pattern) {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errorMessage = name + " không đúng định dạng !";
        } else {
          errorMessage = "";
        }
      }
    }

    //kiểm tra email
    if (type === "email") {
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        errorMessage = name + " không đúng định dạng !";
      } else {
        errorMessage = "";
      }
    }

    let values = { ...this.state.values, [name]: value }; //cập nhật giá trị values cho state
    let errors = { ...this.state.errors, [name]: errorMessage }; //cập nhật lỗi cho state

    this.setState({
      ...this.state,
      values: values,
      errors: errors,
    });
  };
  handleOnBlur = (e) => {
    //lấy giá trị mỗi lần value input thay đổi bởi người dùng
    // let tagInput = e.target;
    let { name, value, type, pattern } = e.target;
    let errorMessage = "";

    //kiểm tra rỗng

    if (value.trim() === "") {
      errorMessage = name + " không được để trống !";
    } else {
      if (pattern) {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errorMessage = name + " không đúng định dạng !";
        } else {
          errorMessage = "";
        }
      }
    }

    //kiểm tra email
    if (type === "email") {
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        errorMessage = name + " không đúng định dạng !";
      } else {
        errorMessage = "";
      }
    }
    let values = { ...this.state.values, [name]: value }; //cập nhật giá trị values cho state
    let errors = { ...this.state.errors, [name]: errorMessage }; //cập nhật lỗi cho state

    this.setState({
      ...this.state,
      values: values,
      errors: errors,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.addStudent(this.state.values);
  // };
  render() {
    // eslint-disable-next-line no-unused-vars
    let { editingProduct, values, errors } = this.state;
    
    // eslint-disable-next-line react/prop-types
    let {sinhVien, isUpdateStudent, isDisabledInput} = this.props;
    let isDisabled = isDisabledInput;
    if(isUpdateStudent){
      this.setState({
        ...this.state,
        values: sinhVien
      })
      isDisabled = true
      // eslint-disable-next-line react/prop-types
      this.props.updateIsUpdateStudent(false, false)
      
    }
    let { maSV, hoTen, email, soDT } = values;
    
    
    return (
      <div className="container">
        <div className="card text-left p-0">
          <div className="card-header bg-dark text-white">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    type="text"
                    pattern="^(0|[1-9][0-9]*)$"
                    className="form-control"
                    name="maSV"
                    value={maSV}
                    disabled={isDisabled}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}
                  />
                  <p className="text-danger">{errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ Tên</span>
                  <input
                    type="text"
                    className="form-control"
                    name="hoTen"
                    value={hoTen}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}
                  />
                  <p className="text-danger">{errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Số điện thoaị</span>
                  <input
                    type="text"
                    pattern="^(0|[1-9][0-9]*)$"
                    className="form-control"
                    name="soDT"
                    value={soDT}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}
                  />
                  <p className="text-danger">{errors.soDT}</p>
                </div>
                <div className="form-group col-6">
                  <span>email</span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}
                  />
                  <p className="text-danger">{errors.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-left">
                  <button onClick={() => {
                    this.props.addStudent(this.state.values)
                    this.setState({
                      ...this.state,
                      values: {
                        maSV: "",
                        hoTen: "",
                        email: "",
                        soDT: "",
                      }
                    })
                  }} type="button" className="btn btn-success">
                    Thêm sinh viên
                  </button>
                  <button onClick={() => {
                    this.props.updateStudent(this.state.values)
                    this.setState({
                      ...this.state,
                      values: {
                        maSV: "",
                        hoTen: "",
                        email: "",
                        soDT: "",
                      }
                    })
                  }}
                  
                  type="button" className="btn btn-success" style={{marginLeft: "5px"}}>
                    Sửa sinh viên
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    edittingStudentID: state.UserReducer.edittingStudentID,
    sinhVien: state.UserReducer.student,
    isUpdateStudent: state.UserReducer.isUpdateStudent,
    isDisabledInput: state.UserReducer.isDisabledInput
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => {
      dispatch(addUser(student));
    },
    updateIsUpdateStudent: (boolean) => {
      dispatch(updateIsUpdateUser(boolean))
    },
    updateStudent: (studentUpdated) => {
      dispatch(updateUser(studentUpdated));
    }
  };
};
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(FormStudent);
