import React, { Component } from "react";
import "./style.scss";
import icons from "../../constants/icons";
import Header from "../../components/header";
import ActionButtons from "../../components/action-buttons";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllConstruction,
  getCompanyTrading,
  getCompanyDesign,
  getCompanyManager,
  getCompanyConstruction,
  getCompanyUtReview,
  getUserEmployee,
  getCompanyStageRoughting,
  getCompanyStageProduction,
  delConstruction,
  getConstruction
} from "../../actions";
import Input from "../../components/common/input";
import AddConstruction from "./add_ construction";
import { ReactSVG } from "react-svg";
import SideNotification from "../../components/common/notification";
import { translate, Trans } from 'react-i18next';
const buttons = {
  add_construction: false,
  edit_construction: false
};
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...buttons,
      name_find: "",
      dataConstruction: [],
      idConstruction: "",
      checkedItems: [],
      successNoti: true
    };
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleChangeChecked = this.handleChangeChecked.bind(this);
    this.setNoti = this.setNoti.bind(this)
  }

  handleClickButton(event, key) {
    event.stopPropagation();
    this.setState(prevState => {
      return {
        ...buttons,
        [key]: !prevState[key]
      };
    });
  }
  componentDidMount() {
    this.props.getAllConstruction();
    this.props.getCompanyTrading();
    this.props.getCompanyDesign();
    this.props.getCompanyManager();
    this.props.getCompanyConstruction();
    this.props.getCompanyUtReview();
    this.props.getUserEmployee();
    this.props.getCompanyStageRoughting();
    this.props.getCompanyStageProduction();
    setTimeout(() => { this.setState({ successNoti: false }) }, 3000);


  }
  componentWillReceiveProps(nextProps) {
    const { listConstruction } = this.props;
    if (nextProps.listConstruction !== listConstruction) {
      this.setState({
        dataConstruction: nextProps.listConstruction
      });
    }
  }

  handleFilter = e => {
    const name_find = e.target.value;
    this.setState({
      name_find
    });
  };

  handleChangeChecked(e) {
    console.log(e.target,"hihuhuuh")
    const id_item = e.target.name;
    const isChecked = e.target.checked;
    const checkedItems = [...this.state.checkedItems];
    if (isChecked) {
      checkedItems.push(id_item);
      this.setState({ idConstruction: id_item, checkedItems });
    } else {
      var index = checkedItems.indexOf(id_item);
      if (index !== -1) {
        checkedItems.splice(index, 1);
        this.setState({ checkedItems });
      }
    }
  }

  editConstruction = () => {
    const { checkedItems } = this.state;
    if (checkedItems.length === 1) {
      this.setState(prevState => {
        return {
          ...buttons,
          edit_construction: !prevState.edit_construction,
          idConstruction: checkedItems[0]
        };
      });
      this.props.getConstruction({ id_constructions: checkedItems[0] });
    } else {
      alert("Vui lòng chỉ chọn 1 công trình!");
      this.setState({ idConstruction: [] });
    }
  };

  deleteConstruction = () => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      const { checkedItems } = this.state;
      if (checkedItems.length > 0) {
        checkedItems.map(value =>
          this.props.delConstruction({ id_constructions: value })
        );
        this.setState({ checkedItems: [] });
      }
    }
  };
  setNoti() {
    this.setState({
      successNoti: true
    })
    setTimeout(() => { this.setState({ successNoti: false }) }, 3000);
  }
  render() {
    console.log(this.props.history,"???")

    const { dataConstruction, name_find, idConstruction } = this.state;
    const { t } = this.props
    const lowerCaseNameFind = name_find.toLowerCase();
    const constructions = dataConstruction.filter((construction) => {
      if (construction.name) {
        return construction.name.toLowerCase().includes(lowerCaseNameFind)
      }
    }
    );
    return (
      <div className="FM0000">
        {
          this.state.successNoti ? (<SideNotification />) : null
        }
        <Header history={this.props.history} />
        <div className="menu-bar">
          <ul>
            <li className="active">
              <Link to="/">
                <ReactSVG src={icons.icon_manage} alt="manage" />
                <span>{t("home.construction_management")}</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <ReactSVG src={icons.icon_process} alt="process" />
                <span>{t("home.process")}</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <ReactSVG src={icons.icon_storage} alt="store" />
                <span>{t("home.stock")}</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <ReactSVG src={icons.icon_fund} alt="money" />
                <span>{t("home.accounting")}</span>
              </Link>
            </li>
            <li>
              <Link to="/employee">
                <ReactSVG src={icons.icon_staff} alt="staff" />
                <span>{t("home.employee")}</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="action-center">
          {
            this.props.success ?
              this.state.successNoti ?
                <p>{this.props.success}</p>
                : null :
              this.props.error ?
                this.props.messages ?
                  <p>{this.props.error.messages.message}</p> :
                  <p>Không thể kết nối đến server</p>
                : null
          }
          <ActionButtons />
          <div className="action-button">
            <div className="search">
              <Input
                typeInput="text"
                placeholderInput="Search"
                onchangeInput={this.handleFilter}
              />
              <button className="search-button" type="submit">
                <img src={icons.icon_search} alt="search" />
              </button>
            </div>
            <Button
              titleButton={t("home.button.add_construction")}
              iconButton={icons.icon_add}
              onClickButton={e => this.handleClickButton(e, "add_construction")}
              classNameButton={this.state.add_construction ? "active" : ""}
            />
            <Button
              titleButton={t("home.button.edit_construction")}
              iconButton={icons.icon_edit}
              onClickButton={this.editConstruction}
              classNameButton={this.state.edit_construction ? "active" : ""}
            />
            <Button
              titleButton={t("home.button.delete_construction")}
              iconButton={icons.icon_delete}
              onClickButton={this.deleteConstruction}
            />
          </div>
        </div>
        <div className="data-table">
          <table>
            <tr>
              <th>No.</th>
              <th></th>
              <th className="title-table">{t("home.table.name_construction")}</th>
              <th></th>
            </tr>
            {constructions.length > 0
              ? constructions.map((construction, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Input
                      typeInput="checkbox"
                      nameInput={construction.id}
                      onchangeInput={this.handleChangeChecked}
                    />
                  </td>
                  <td>
                    <Link to={`/management/${construction.id}`}>
                      {construction.name}
                    </Link>
                  </td>
                  <td></td>
                </tr>
              ))
              : null}
          </table>
          {this.state.add_construction ? (
            <AddConstruction handleClickButton={this.handleClickButton} setNoti={this.setNoti} />
          ) : null}
          {this.state.edit_construction ? (
            <AddConstruction
              handleClickButton={this.handleClickButton}
              id_constructions={idConstruction}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllConstruction: () => dispatch(getAllConstruction()),
  getCompanyTrading: () => dispatch(getCompanyTrading()),
  getCompanyDesign: () => dispatch(getCompanyDesign()),
  getCompanyManager: () => dispatch(getCompanyManager()),
  getCompanyConstruction: () => dispatch(getCompanyConstruction()),
  getCompanyUtReview: () => dispatch(getCompanyUtReview()),
  getUserEmployee: () => dispatch(getUserEmployee()),
  getCompanyStageRoughting: () => dispatch(getCompanyStageRoughting()),
  getCompanyStageProduction: () => dispatch(getCompanyStageProduction()),
  delConstruction: data => dispatch(delConstruction(data)),
  getConstruction: data => dispatch(getConstruction(data))
});
const mapStateToProps = state => ({
  isLoading: state.homeReducer.isLoading,
  error: state.homeReducer.error,
  success: state.homeReducer.success,
  listConstruction: state.homeReducer.listConstruction
});

export default translate('translation')(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));
