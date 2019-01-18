import React, { Component } from "react";
import classNames from "classnames";

export class AppInlineProfile extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({ expanded: !this.state.expanded });
    event.preventDefault();
  }

  render() {
    return (
      <div className="profile">
        <a className="profile-link" href="#/" onClick={this.onClick}>
          <h2 className="username">St. Anthony High School</h2>
        </a>
        <ul className={classNames({ "profile-expanded": this.state.expanded })}>
          <li>
            <a href="#/">
              <i className="pi pi-fw pi-user" />
              <span>Account</span>
            </a>
          </li>
          <li>
            <a href="#/">
              <i className="pi pi-fw pi-inbox" />
              <span>Notifications</span>
              <span className="menuitem-badge">2</span>
            </a>
          </li>
          <li>
            <a href="#/">
              <i className="pi pi-fw pi-power-off" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
