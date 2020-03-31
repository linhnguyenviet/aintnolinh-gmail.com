import React, { Component } from "react";
import "./style.scss";
import { ReactSVG } from "react-svg";

export default class LabelComponent extends Component {
  render() {
    const { colorImg } = this.props;
    return (
      <div className="label">
        <ReactSVG
          src={this.props.srcImg}
          alt="label"
          beforeInjection={svg => {
            svg.classList.add(colorImg);
          }}
        />
        <span>{this.props.textLabel}</span>
      </div>
    );
  }
}
