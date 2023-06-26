import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../action/UserAction";

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state.values);
  };
  render() {
    let { editingProduct, values, errors } = this.state;
    let { maSV, hoTen, email, soDT } = values;
    return (
      <div className="container">
        <div className="card text-left p-0">
          <div className="card-header bg-dark text-white">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    type="text"
                    pattern="^(0|[1-9][0-9]*)$"
                    className="form-control"
                    name="maSV"
                    value={maSV}
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
                  <button type="submit" className="btn btn-success">
                    Thêm sinh viên
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
const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => {
      dispatch(addUser(student));
    },
  };
};
export default connect(null, mapDispatchToProps)(FormStudent);
