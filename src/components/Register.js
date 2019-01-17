import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Growl } from "primereact/growl";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      message: "",
      register: "Register"
    };
    this.showError = this.growelMessage.bind(this);
  }

  growelMessage(severity, summary, detail) {
    this.growl.show({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }
  submitHandler = async e => {
    e.preventDefault();
    if (this.isFormEmpty(this.state)) {
      return this.setState({ message: "Please fill all fields" });
    }
    this.setState({ register: "Please wait ..." });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  };
  render() {
    const { message, register } = this.state;
    return (
      <div className="p-grid">
        <Growl ref={el => (this.growl = el)} />

        <div className="p-col-6 p-lg-6 p-offset-3">
          <div className="card card-w-title">
            <h1>Register</h1>
            <form onSubmit={this.submitHandler} noValidate autoComplete="off">
              <div className="p-grid">
                <div className="p-col-3 p-md-3">
                  <label htmlFor="username">User Name:</label>
                </div>
                <div className="p-col-9 p-md-9">
                  <InputText
                    style={{ width: "100%" }}
                    placeholder="User Name"
                    name="username"
                    onChange={this.changeHandler}
                  />
                </div>

                <div className="p-col-3 p-md-3">
                  <label htmlFor="username">Email:</label>
                </div>
                <div className="p-col-9 p-md-9">
                  <InputText
                    style={{ width: "100%" }}
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.changeHandler}
                  />
                </div>

                <div className="p-col-3 p-md-3">
                  <label htmlFor="password">Password:</label>
                </div>
                <div className="p-col-9 p-md-9">
                  <InputText
                    style={{ width: "100%" }}
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="p-offset-3">{message}</div>
                <div className="p-col-9 p-md-9 p-offset-3">
                  <Button type="submit" label={register} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
