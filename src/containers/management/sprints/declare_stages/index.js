import React, { Component } from "react";
import "./style.scss";
import ActionButtons from "../../../../components/action-buttons";
import Button from "../../../../components/common/button";
import icons from "../../../../constants/icons";
import Input from "../../../../components/common/input";
import DeclareStagesFinishedSprint from "./finished";
import DeclareStagesRoughingSprint from "./roughing";

const buttons = {
  finished: false,
  roughing: false
};

class DeclareStagesSprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...buttons,
    };
    this.handleClickButton = this.handleClickButton.bind(this);
  }
  componentDidMount() {
    this.setState({
      finished: true
    })
  }
  handleClickButton(event, key) {
    event.stopPropagation();
    this.setState(
      prevState => {
        return {
          ...buttons,
          [key]: !prevState[key]
        }
      }
    );
  }
  render() {
    const { id_constructions } = this.props;
    return (
      <div className="declare-stages-sprint">
        <div className="action-center">
          <div className="left-control">
            <Button
              titleButton="Gia công thô"
              onClickButton={e => this.handleClickButton(e, "roughing")}
              classNameButton={this.state.roughing ? "active" : ""}
            />
            <Button
              titleButton="Gia công thành phẩm"
              onClickButton={e => this.handleClickButton(e, "finished")}
              classNameButton={this.state.finished ? "active" : ""}

            />
          </div>
          <div className="button-control">
            <ActionButtons />
            <div className="action-button">
              <form className="search">
                <Input typeInput="text" placeholderInput="Search" />
                <Button iconButton={icons.icon_search} />
              </form>
              <button className="add">
                <img src={icons.icon_plus} alt="add" />
              </button>
            </div>
          </div>
        </div>
        {
          this.state.finished ? <DeclareStagesFinishedSprint id_constructions={id_constructions} /> : null
        }
        {
          this.state.roughing ? <DeclareStagesRoughingSprint id_constructions={id_constructions} /> : null
        }
      </div>
    );
  }
}
export default DeclareStagesSprint

