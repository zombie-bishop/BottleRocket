import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div class="container">
        <Header location={location} />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
