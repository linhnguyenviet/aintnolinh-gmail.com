import React, { Component } from "react";
import "./style.scss";
import SecondaryProcessing from "./secondary_processing";
import HistoryProcessing from "./history_processing";
import PrimaryProcessing from "./primary_processing";

const menus = {
  primary_processing: false,
  secondary_processing: false,
  history_processing: false
};

export default class ProcessingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { ...menus };
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }
  componentDidMount() {
    this.setState({
      ...menus,
      primary_processing: true
    });
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
      <div className="FMCT1320">
        <div className="menu">
          <ul>
            <li
              key="primary_processing"
              onClick={event =>
                this.handleClickMenu(event, "primary_processing")
              }
              className={this.state.primary_processing ? "active" : ""}
            >
              <span>Gia công thô</span>
            </li>
            <li
              key="secondary_processing"
              onClick={event =>
                this.handleClickMenu(event, "secondary_processing")
              }
              className={this.state.secondary_processing ? "active" : ""}
            >
              <span>Gia công thành phẩm</span>
            </li>
            <li
              key="history_processing"
              onClick={event =>
                this.handleClickMenu(event, "history_processing")
              }
              className={this.state.history_processing ? "active" : ""}
            >
              <span>Lịch sử</span>
            </li>
          </ul>
        </div>
        {this.state.primary_processing ? (
          <PrimaryProcessing id_constructions={id_constructions} />
        ) : null}
        {this.state.secondary_processing ? <SecondaryProcessing /> : null}
        {this.state.history_processing ? <HistoryProcessing /> : null}
      </div>
    );
  }
}
