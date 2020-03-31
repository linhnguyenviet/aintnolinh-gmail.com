import React, { Component } from "react";
import "./style.scss";
import DeclareStagesSprint from "./declare_stages";
import ColumnsSprint from "./columns";
import OthersSprint from "./other";
import PrimaryGirdersSprint from "./primary_girder";
import SecondaryGirdersSprint from "./secondary_girder";
import SecondaryColumnsSprint from "./secondary_columns";
import BeamSprint from "./beam";
import TrussSprint from "./truss";

const menus = {
  declare_stage: false,
  columns_sprint: false,
  primary_girder: false,
  secondary_girder: false,
  secondary_columns: false,
  beam: false,
  truss: false,
  other: false
};

export default class SprintsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { ...menus };
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }
  componentDidMount() {
    this.setState({
      ...menus,
      declare_stage: true
    })
  }
  handleClickMenu(event, key) {
    event.stopPropagation();
    this.setState({
      ...menus,
      [key]: true
    });
  }
  render() {
    const { id_constructions } = this.props;
    return (
      <div className="FMCT1700">
        <div className="menu">
          <ul>
            <li
              key="declare_stage"
              onClick={event => this.handleClickMenu(event, "declare_stage")}
              className={this.state.declare_stage ? "active" : ""}
            >
              <span>Khai báo công đoạn</span>
            </li>
            <li
              key="columns_sprint"
              onClick={event => this.handleClickMenu(event, "columns_sprint")}
              className={this.state.columns_sprint ? "active" : ""}
            >
              <span>Cột</span>
            </li>
            <li
              key="primary_girder"
              onClick={event => this.handleClickMenu(event, "primary_girder")}
              className={this.state.primary_girder ? "active" : ""}
            >
              <span>Dầm chính</span>
            </li>
            <li
              key="secondary_girder"
              onClick={event => this.handleClickMenu(event, "secondary_girder")}
              className={this.state.secondary_girder ? "active" : ""}
            >
              <span>Dầm phụ</span>
            </li>
            <li
              key="secondary_columns"
              onClick={event =>
                this.handleClickMenu(event, "secondary_columns")
              }
              className={this.state.secondary_columns ? "active" : ""}
            >
              <span>Cột phụ</span>
            </li>
            <li
              key="beam"
              onClick={event => this.handleClickMenu(event, "beam")}
              className={this.state.beam ? "active" : ""}
            >
              <span>Giằng</span>
            </li>
            <li
              key="truss"
              onClick={event => this.handleClickMenu(event, "truss")}
              className={this.state.truss ? "active" : ""}
            >
              <span>Giàn</span>
            </li>
            <li
              key="other"
              onClick={e => this.handleClickMenu(e, "other")}
              className={this.state.other ? "active" : ""}
            >
              <span>Khác</span>
            </li>
          </ul>
        </div>
        {this.state.declare_stage ? (
          <DeclareStagesSprint id_constructions={id_constructions} />
        ) : this.state.columns_sprint ? (
          <ColumnsSprint />
        ) : this.state.primary_girder ? (
          <PrimaryGirdersSprint id_constructions={id_constructions} />
        ) : this.state.secondary_girder ? (
          <SecondaryGirdersSprint />
        ) : this.state.secondary_columns ? (
          <SecondaryColumnsSprint />
        ) : this.state.beam ? (
          <BeamSprint />
        ) : this.state.truss ? (
          <TrussSprint />
        ) : this.state.other ? (
          <OthersSprint />
        ) : null}
      </div>
    );
  }
}
