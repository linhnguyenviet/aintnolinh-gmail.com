import React, { Component } from "react";
import icons from "../../../../constants/icons";
import ActionButtons from "../../../../components/action-buttons";
import Button from "../../../../components/common/button";
import Input from "../../../../components/common/input";
import "./style.scss";
import { connect } from "react-redux";
import {
  getParameterConstruction,
  postParameterConstruction,
  delParameterConstruction,
  editParameterConstruction
} from "../../../../actions/parameter";

class InputParametersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      id_type_parameter: 1,
      checkedItems: [],
      name_find: "",
      isActive: 1,
      buttons: {
        okay: false,
        add: false,
        edit: false,
        del: false,
        allDel: false
      },
      buttonActive: false,
      successNoti: true
    };
    this.postParameter = this.postParameter.bind(this);
    this.editParameter = this.editParameter.bind(this);
    this.findParameter = this.findParameter.bind(this);
    this.handleChangeChecked = this.handleChangeChecked.bind(this);
    this.setActive = this.setActive.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ successNoti: false });
    }, 3000);
  }
  componentWillReceiveProps(nextProps) {
    const { listParameter } = this.props;
    if (nextProps.listParameter !== listParameter) {
      this.setState({
        datas: [
          <tr key={nextProps.listParameter.length}>
            <td>{nextProps.listParameter.length + 1}</td>
            <td>
              <Input typeInput="checkbox" />
            </td>
            <td>
              <Input
                typeInput="text"
                placeholderInput="Input text"
                onKeyDownInput={this.postParameter}
                autoFocus
              />
            </td>
          </tr>
        ]
      });
    }
  }
  chooseTypeParameter = event => {
    const { id_construction } = this.props;
    this.props.getParameterConstruction({
      id_constructions: id_construction,
      id_type_parameter: event.id
    });
    const { listParameter } = this.props;
    this.setState({
      id_type_parameter: event.id,
      datas: [
        <tr key={listParameter.length}>
          <td>{listParameter.length + 1}</td>
          <td>
            <Input typeInput="checkbox" />
          </td>
          <td>
            <Input
              typeInput="text"
              placeholderInput="Input text"
              onKeyDownInput={this.postParameter}
            />
          </td>
        </tr>
      ],
      checkedItems: [],
      buttons: {
        okay: false,
        add: false,
        edit: false,
        del: false,
        allDel: false
      },
      buttonActive: false,
      name_find: ""
    });
    this.setActive(event);
  };
  setActive = event => {
    this.setState({
      isActive: event.id
    });
  };
  addParameter = () => {
    const datas = [...this.state.datas];
    const { listParameter } = this.props;
    datas.push(
      <tr key={listParameter.length + datas.length + 1}>
        <td>{listParameter.length + datas.length + 1}</td>
        <td>
          <Input typeInput="checkbox" />
        </td>
        <td>
          <Input
            typeInput="text"
            placeholderInput="Input text"
            onKeyDownInput={this.postParameter}
          />
        </td>
      </tr>
    );
    this.setState({
      datas
    });
  };

  async postParameter(event) {
    if (
      event.keyCode === 13 ||
      event.key === "Enter" ||
      event.key === "Return"
    ) {
      const name_parameter = event.target.value;
      await this.props.postParameterConstruction({
        name: name_parameter,
        id_constructions: this.props.id_construction,
        id_type_parameter: this.state.id_type_parameter
      });
      const { listParameter } = this.props;
      this.setState({
        datas: [
          <tr key={listParameter.length}>
            <td>{listParameter.length + 1}</td>
            <td>
              <Input typeInput="checkbox" />
            </td>
            <td>
              <Input
                typeInput="text"
                placeholderInput="Input text"
                onKeyDownInput={this.postParameter}
              />
            </td>
          </tr>
        ]
      });
    }
  }

  findParameter(event) {
    const { listParameter } = this.props;
    const name_find = event.target.value;
    this.setState({
      name_find: name_find.trim(),
      datas:
        name_find.trim() === ""
          ? [
              <tr key={listParameter.length}>
                <td>{listParameter.length + 1}</td>
                <td>
                  <Input typeInput="checkbox" />
                </td>
                <td>
                  <Input
                    typeInput="text"
                    placeholderInput="Input text"
                    onKeyDownInput={this.postParameter}
                  />
                </td>
              </tr>
            ]
          : []
    });
  }

  handleChangeChecked(e) {
    const id_item = e.target.name;
    const isChecked = e.target.checked;
    const checkedItems = [...this.state.checkedItems];
    if (isChecked) {
      checkedItems.push(id_item);
      this.setState({ checkedItems });
    } else {
      var index = checkedItems.indexOf(id_item);
      if (index !== -1) {
        checkedItems.splice(index, 1);
        this.setState({ checkedItems });
      }
    }
  }

  editParameter(event) {
    if (
      event.keyCode === 13 ||
      event.key === "Enter" ||
      event.key === "Return"
    ) {
      const name_parameter = event.target.value;
      const id_item = event.target.name;
      this.props.editParameterConstruction({
        id: Number(id_item),
        name: name_parameter,
        id_constructions: this.props.id_construction,
        id_type_parameter: this.state.id_type_parameter
      });
      const checkedItems = [...this.state.checkedItems];
      var index = checkedItems.indexOf(id_item);
      if (index !== -1) {
        checkedItems.splice(index, 1);
        this.setState({ checkedItems });
      }
    }
  }

  deleteParameter() {
    const { id_type_parameter } = this.state;
    const checkedItems = [...this.state.checkedItems];
    const { id_construction } = this.props;
    if (checkedItems.length > 0) {
      checkedItems.map(value => {
        this.props.delParameterConstruction({
          id_parameter: value,
          id_constructions: id_construction,
          id_type_parameter: id_type_parameter
        });
        checkedItems.splice(value, 1);
        return this.setState({ checkedItems });
      });
    }
  }
  handleMouse = (event, key) => {
    if (event.type === "mousedown") {
      this.setState({ buttonActive: true, buttons: { [key]: true } });
    } else {
      this.setState({ buttonActive: false, buttons: { [key]: false } });
    }
  };

  render() {
    const { listTypeParameter, listParameter } = this.props;
    const { datas, checkedItems, name_find, buttons } = this.state;
    const lowerCaseNameFind = name_find.toLowerCase();
    const dataParameter = listParameter.filter(parameter => {
      if (parameter.name) {
        return parameter.name.toLowerCase().includes(lowerCaseNameFind);
      }
    });
    const renderInput = (id_item, value) => {
      return (
        <Input
          typeInput="text"
          placeholderInput="Input text"
          defaultValue={value}
          nameInput={id_item.toString()}
          onKeyDownInput={this.editParameter}
        />
      );
    };
    console.log(listTypeParameter,"linh test")
    return (
      <div className="input-parameter">
        <div className="action-center">
          {this.props.success ? (
            this.state.successNoti ? (
              <p>{this.props.success}</p>
            ) : null
          ) : this.props.error ? (
            this.props.messages ? (
              <p>{this.props.error.messages.message}</p>
            ) : (
              <p>Không thể kết nối đến server</p>
            )
          ) : null}
          <ActionButtons />
          <div className="action-button">
            <div className="search">
              <Input
                typeInput="text"
                placeholderInput="Search"
                onchangeInput={this.findParameter}
              />
              <button className="search-button" type="submit">
                <img src={icons.icon_search} alt="search" />
              </button>
            </div>
            <Button
              titleButton="Okay"
              onMouseDownButton={event => this.handleMouse(event, "okay")}
              classNameButton={buttons.okay ? "active" : ""}
            />
            <Button
              titleButton="Add"
              onClickButton={event => this.addParameter(datas, event)}
              onMouseDownButton={event => this.handleMouse(event, "add")}
              classNameButton={buttons.add ? "active" : ""}
            />
            <Button
              titleButton="Edit"
              onMouseDownButton={event =>
                checkedItems.length > 0
                  ? this.handleMouse(event, "edit")
                  : alert("Vui lòng chọn item để sửa")
              }
              classNameButton={buttons.edit ? "active" : ""}
            />
            <Button
              titleButton="Delete"
              onClickButton={event => this.deleteParameter(checkedItems, event)}
              onMouseDownButton={event => this.handleMouse(event, "del")}
              classNameButton={buttons.del ? "active" : ""}
            />
            <Button
              titleButton="All Delete"
              onMouseDownButton={event => this.handleMouse(event, "allDel")}
              classNameButton={buttons.allDel ? "active" : ""}
            />
          </div>
        </div>
        <div className="input-table">
          <div className="input-info">
            <ul>
              {listTypeParameter.length > 0
                ? listTypeParameter.map((parameter, index) => (
                    <li
                      key={index}
                      onClick={event =>
                        this.chooseTypeParameter(parameter, event)
                      }
                      className={
                        index + 1 === this.state.isActive ? "active" : ""
                      }
                    >
                      <span>{parameter.name}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          {dataParameter.length > 0 || datas.length > 0 ? (
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th></th>
                    <th>No Name</th>
                  </tr>
                </thead>
                <tbody>
                  {dataParameter.map((parameter, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Input
                          typeInput="checkbox"
                          nameInput={parameter.id.toString()}
                          onchangeInput={this.handleChangeChecked}
                          checkedInput={
                            checkedItems.length > 0 &&
                            checkedItems.indexOf(parameter.id.toString()) !== -1
                              ? true
                              : false
                          }
                        />
                      </td>
                      <td>
                        {buttons.edit &&
                        checkedItems.length > 0 &&
                        checkedItems.indexOf(parameter.id.toString()) !== -1 ? (
                          renderInput(parameter.id, parameter.name)
                        ) : (
                          <span>{parameter.name}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {datas}
                </tbody>
              </table>
            </div>
          ) : (
            <h4>Không có dữ liệu</h4>
          )}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getParameterConstruction: data => dispatch(getParameterConstruction(data)),
  postParameterConstruction: data => dispatch(postParameterConstruction(data)),
  delParameterConstruction: data => dispatch(delParameterConstruction(data)),
  editParameterConstruction: data => dispatch(editParameterConstruction(data))
});
const mapStateToProps = state => ({
  isLoading: state.parameterReducer.isLoading,
  error: state.parameterReducer.error,
  success: state.parameterReducer.success,
  listParameter: state.parameterReducer.listParameter,
  listTypeParameter: state.parameterReducer.listTypeParameter
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputParametersScreen);
