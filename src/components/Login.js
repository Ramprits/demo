import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      login: "Login"
    };
  }
  submitHandler = event => {
    event.preventDefault();
    if (this.isFormEmpty(this.state)) {
      return this.setState({ message: "Please your username/password" });
    }
    this.props.history.push("/dashboard");
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  isFormEmpty({ username, password }) {
    return !username || !password;
  }
  render() {
    const { login, message } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12 p-md-6 p-md-offset-3">
          <div className="card card-w-title">
            <h1>Welcome back</h1>
            <form onSubmit={this.submitHandler} autoComplete="off">
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
                  <label htmlFor="password">Password:</label>
                </div>
                <div className="p-col-9 p-md-9">
                  <InputText
                    style={{ width: "100%" }}
                    name="password"
                    type="password"
                    onChange={this.changeHandler}
                    placeholder="Password"
                  />
                </div>

                <div className="p-col-3 p-md-3" />
                <div className="p-col-9 p-md-9">{message}</div>

                <div className="p-col-9 p-md-9 p-offset-3">
                  <Button type="submit" label={login} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
