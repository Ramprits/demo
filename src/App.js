import React, { Component } from "react";
import { Route } from "react-router-dom";
import classNames from "classnames";
import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppInlineProfile } from "./AppInlineProfile";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Subjects } from "./components/Subjects";
import { Standards } from "./components/Standards";
import { Divisions } from "./components/Divisions";
import { Semesters } from "./components/Semesters";

import { ScrollPanel } from "primereact/components/scrollpanel/ScrollPanel";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "fullcalendar/dist/fullcalendar.css";
import "./layout/layout.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      layoutMode: "static",
      layoutColorMode: "dark",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick(event) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event) {
    this.menuClick = true;
    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive
      });
    }

    event.preventDefault();
  }

  onSidebarClick(event) {
    this.menuClick = true;
    setTimeout(() => {
      this.layoutMenuScroller.moveBar();
    }, 500);
  }

  onMenuItemClick(event) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }
  }

  createMenu() {
    this.menu = [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-home",
        command: () => {
          window.location = "#/dashboard";
        }
      },
      {
        label: "Administration",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "Users",
            icon: "pi pi-fw pi-circle-off",
            command: () => {
              window.location = "#/empty";
            }
          },
          {
            label: "Roles",
            icon: "pi pi-fw pi-circle-off",
            command: () => {
              window.location = "#/empty";
            }
          },
          {
            label: "Permission",
            icon: "pi pi-fw pi-circle-off",
            command: () => {
              window.location = "#/empty";
            }
          }
        ]
      },
      {
        label: "Master Configuration",
        icon: "pi pi-fw pi-home",
        items: [
          {
            label: "Standards",
            icon: "pi pi-fw pi-star-o",
            command: () => {
              window.location = "#/standards";
              this.setState({ layoutMode: "static" });
            }
          },
          {
            label: "Subjects",
            icon: "pi pi-fw pi-calendar",
            command: () => {
              window.location = "#/subjects";
              this.setState({ layoutMode: "static" });
            }
          },
          {
            label: "Division",
            icon: "pi pi-fw pi-align-justify",
            command: () => {
              window.location = "#/divisions";
            }
          },
          {
            label: "Semesters",
            icon: "pi pi-fw pi-th-large",
            command: () => {
              window.location = "#/semesters";
            }
          },
          {
            label: "Standard-Subjects",
            icon: "pi pi-fw pi-th-large",
            command: () => {
              window.location = "#/panels";
            }
          },
          {
            label: "Standard-Divisions",
            icon: "pi pi-fw pi-th-large",
            command: () => {
              window.location = "#/panels";
            }
          },
          {
            label: "Standard-Semesters",
            icon: "pi pi-fw pi-th-large",
            command: () => {
              window.location = "#/panels";
            }
          }
        ]
      },
      {
        label: "Student Management",
        icon: "pi pi-fw pi-cog",
        items: [
          {
            label: "Students",
            icon: "pi pi-fw pi-bars",
            command: () => {
              window.location = "#/students";
              this.setState({ layoutMode: "static" });
            }
          }
        ]
      },
      {
        label: "Result Declaration",
        icon: "pi pi-fw pi-align-left",
        items: [
          {
            label: "Results",
            icon: "pi pi-fw pi-bars",
            command: () => {
              window.location = "#/results";
              this.setState({ layoutColorMode: "dark", layoutMode: "static" });
            }
          }
        ]
      }
    ];
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  }

  render() {
    let wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });
    let sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark"
    });

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
        <AppTopbar onToggleMenu={this.onToggleMenu} />

        <div
          ref={el => (this.sidebar = el)}
          className={sidebarClassName}
          onClick={this.onSidebarClick}
        >
          <ScrollPanel
            ref={el => (this.layoutMenuScroller = el)}
            style={{ height: "100%" }}
          >
            <div className="layout-sidebar-scroll-content">
              <AppInlineProfile />
              <AppMenu
                model={this.menu}
                onMenuItemClick={this.onMenuItemClick}
              />
            </div>
          </ScrollPanel>
        </div>

        <div className="layout-main">
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="/subjects" component={Subjects} />
          <Route path="/standards" component={Standards} />
          <Route path="/divisions" component={Divisions} />
          <Route path="/semesters" component={Semesters} />

          <Route exact path="/" component={Login} />
        </div>

        <AppFooter />

        <div className="layout-mask" />
      </div>
    );
  }
}

export default App;
