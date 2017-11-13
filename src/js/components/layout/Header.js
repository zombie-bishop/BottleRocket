import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const indexClass = location.pathname === "/" ? "hidden" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div class='header'>
        <div class='header-item top-left'>
          <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>
            <img src='./images/ic_webBack@2x.png' class={indexClass}/>
          </IndexLink>
        </div>
        <div class='header-item top-middle'>
          Lunch Thyme
        </div>
        <div class='header-item top-right'>
          <a><img src='./images/icon_map@2x.png'/></a>
        </div>
      </div>
    );
  }
}
