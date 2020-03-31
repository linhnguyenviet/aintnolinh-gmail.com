import React, { Component } from "react";
import "./style.scss";
import Header from "../../components/header";
import Button from "../../components/common/button";
import icons from "../../constants/icons";
import ProductsScreen from "./products";
import ProcessingScreen from "./processing";
import InspectionScreen from "./inspection";
import SprintsScreen from "./sprints";
import {
  getParameterConstruction,
  getTypeParameterConstruction
} from "../../actions/parameter";
import {
  getAllConstruction
} from "../../actions"
import ShipmentScreen from "./shipment";
import { connect } from "react-redux";
import ReportsScreen from "./reports";

const menus = {
  blueprint: false,
  products: false,
  processing: false,
  inspection: false,
  shipment: false,
  sprint: false,
  reports: false,
  progressing: false
};

class ManageConstructionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...menus,
      id_type_parameter: 1,
      isActive: "Sản Phẩm",
      listMenu: [
        { key: "blueprint", value: "Bản Vẽ" },
        { key: "products", value: "Sản Phẩm" },
        { key: "processing", value: "Gia Công" },
        { key: "inspection", value: "Kiểm Tra" },
        { key: "shipment", value: "Xuất Hàng" },
        { key: "sprint", value: "Công Đoạn" },
        { key: "reports", value: "Báo Cáo" },
        { key: "progressing", value: "Tiến Độ" },
      ]

    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleSetName = this.handleSetName.bind(this);
  }

  componentDidMount() {
    const { id_construction } = this.props.match.params;
    this.props.getParameterConstruction({
      id_constructions: id_construction,
      id_type_parameter: this.state.id_type_parameter
    });
    this.props.getTypeParameterConstruction();
    this.setState({
      ...menus,
      products: true
    });
    this.props.getAllConstruction();
  }

  handleClickMenu(event, key) {
    event.stopPropagation();
    this.setState({
      ...menus,
      [key]: true,
    });
    this.handleSetName(key)
  }
  handleSetName(key) {
    var name = [...this.state.listMenu].filter(val => val.key === key)[0].value
    this.setState({
      isActive: name
    })
  }

  render() {
    const { id_construction } = this.props.match.params;
    const { listConstruction } = this.props;
    var nameConstruction = "";
    if (listConstruction.length > 0) {
      nameConstruction = [...listConstruction].filter(val => val.id === Number(id_construction))[0].name
    }
    return (
      <div className="manage-construction">
        <Header />
        <div className="title-ct">
          <Button iconButton={icons.icon_back} />
          <span className="title-1">Quản Lý Công Trình :</span>
          <span className="title-2">CT — {nameConstruction} : </span>
          <span>{this.state.isActive}</span>
        </div>
        <div className="mini-menu-bar">
          <ul>
            <li
              key="blueprint"
              onClick={event => this.handleClickMenu(event, "blueprint")}
              className={this.state.blueprint ? "active" : ""}
            >
              <span>Bản Vẽ</span>
            </li>
            <li
              key="products"
              onClick={event => this.handleClickMenu(event, "products")}
              className={this.state.products ? "active" : ""}
            >
              <span>Sản Phẩm</span>
            </li>
            <li
              key="processing"
              onClick={event => this.handleClickMenu(event, "processing")}
              className={this.state.processing ? "active" : ""}
            >
              <span>Gia Công</span>
            </li>
            <li
              key="inspection"
              onClick={event => this.handleClickMenu(event, "inspection")}
              className={this.state.inspection ? "active" : ""}
            >
              <span>Kiểm Tra</span>
            </li>
            <li
              key="shipment"
              onClick={event => this.handleClickMenu(event, "shipment")}
              className={this.state.shipment ? "active" : ""}
            >
              <span>Xuất Hàng</span>
            </li>
            <li
              key="reports"
              onClick={event => this.handleClickMenu(event, "reports")}
              className={this.state.reports ? "active" : ""}
            >
              <span>Báo Cáo</span>
            </li>
            <li
              key="sprint"
              onClick={event => this.handleClickMenu(event, "sprint")}
              className={this.state.sprint ? "active" : ""}
            >
              <span>Công Đoạn</span>
            </li>
            <li
              key="progressing"
              onClick={event => this.handleClickMenu(event, "progressing")}
              className={this.state.progressing ? "active" : ""}
            >
              <span>Tiến Độ</span>
            </li>
          </ul>
        </div>
        {this.state.products ? (
          <ProductsScreen id_construction={id_construction} />
        ) : null}
        {this.state.processing ? (
          <ProcessingScreen id_constructions={id_construction} />
        ) : null}
        {this.state.inspection ? <InspectionScreen /> : null}
        {this.state.sprint ? (
          <SprintsScreen id_constructions={id_construction} />
        ) : null}
        {this.state.reports ? <ReportsScreen /> : null}
        {this.state.shipment ? <ShipmentScreen /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTypeParameterConstruction: () => dispatch(getTypeParameterConstruction()),
  getParameterConstruction: data => dispatch(getParameterConstruction(data)),
  getAllConstruction: data => dispatch(getAllConstruction(data))

});
const mapStateToProps = state => ({
  isLoading: state.homeReducer.isLoading,
  error: state.homeReducer.error,
  success: state.homeReducer.success,
  listConstruction: state.homeReducer.listConstruction
});


export default connect(mapStateToProps, mapDispatchToProps)(ManageConstructionScreen);
