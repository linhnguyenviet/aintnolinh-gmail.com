import React, { Component } from "react";
import icons from "../../constants/icons";
import "./style.scss";
import Button from "../common/button";

export default class ActionButtons extends Component {
  render() {
    return (
      <div className="group-button">
        <Button iconButton={icons.icon_previous} />
        <Button iconButton={icons.icon_continuos} />
        <Button iconButton={icons.icon_print} />
      </div>
    );
  }
}
