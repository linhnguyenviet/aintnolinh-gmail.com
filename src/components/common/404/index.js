import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../button";

export default class Page404 extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <h2>Day la trang 404</h2>
        <Button titleButton="Về Trang Chủ" />
      </div>
    );
  }
}
