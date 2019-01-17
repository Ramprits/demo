import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  submitHandler = event => {
    event.preventDefault();
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="p-grid">
        <div className="p-col-6 p-lg-6 p-offset-3">
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
                    onChange={this.changeHandler}
                    placeholder="Password"
                  />
                </div>
                <div className="p-col-9 p-md-9 p-offset-3">
                  <Button type="submit" label="Login" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
