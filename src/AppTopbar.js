import React, { Component } from "react";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";

export class AppTopbar extends Component {
  static defaultProps = {
    onToggleMenu: null
  };

  static propTypes = {
    onToggleMenu: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="layout-topbar clearfix">
        <a className="layout-menu-button" onClick={this.props.onToggleMenu}>
          <span className="pi pi-bars" />
        </a>
        <div className="layout-topbar-icons">
          <span className="layout-topbar-search">
            <InputText type="text" placeholder="Search" />
            <span className="layout-topbar-search-icon pi pi-search" />
          </span>
          <a style={{ display: "none" }}>
            <span className="layout-topbar-item-text">Events</span>
            <span className="layout-topbar-icon pi pi-calendar" />
            <span className="layout-topbar-badge">5</span>
          </a>
          <a style={{ display: "none" }}>
            <span className="layout-topbar-item-text">Settings</span>
            <span className="layout-topbar-icon pi pi-cog" />
          </a>
          <Link to="/login">
            <span className="layout-topbar-item-text">User</span>
            <span className="layout-topbar-icon pi pi-user" />
          </Link>
        </div>
      </div>
    );
  }
}
