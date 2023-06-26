import React, { Component } from "react";
import FormStudent from "./FormStudent";
import TableStudents from "./TableStudents";

export default class Ex_form extends Component {
  render() {
    return (
      <div className="container">
        <h3>Exercise Form</h3>
        <FormStudent />
        <TableStudents />
      </div>
    );
  }
}
