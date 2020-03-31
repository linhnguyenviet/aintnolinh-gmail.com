import React, { Component } from "react";
import "./style.scss";

import InputOrderShapedSteel from "./input_orders/input_order_shaped_steel";
import InputOrderPlateSteel from "./input_orders/input_order_plate_steel";
import InputOrderBolts from "./input_orders/input_order_bolts";
import InputOrderOther from "./input_orders/input_order_other";
import ListOrderPlateSteel from "./list_orders/list_order_plate_steel";
import ListOrderShapedSteel from "./list_orders/list_order_shaped_steel";
import ListOrderOther from "./list_orders/list_order_other";
import ListOrderBolts from "./list_orders/list_order_bolts";
import { connect } from "react-redux";
import {
  getAllParameter,
  getSteelPart,
  getInitMaterial,
  getInitType,
  getInitSize,
  getInitMachined,
  getInitPaintType,
  getInitProducerSearch
} from "../../../../actions/order";

const buttons = {
  input_shaped: false,
  input_plate: false,
  input_bolts: false,
  input_other: false,
  list_shaped: false,
  list_plate: false,
  list_bolts: false,
  list_other: false,
  coupon_shaped: false,
  coupon_plate: false,
  coupon_bolts: false,
  coupon_other: false
};

class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { ...buttons };
    this.handleClickButton = this.handleClickButton.bind(this);
  }
  componentDidMount() {
    const { id_constructions } = this.props;
    this.props.getAllParameter({ id_constructions: id_constructions });
    this.props.getSteelPart({ id_constructions: id_constructions });
    this.props.getInitMaterial({ id_constructions: id_constructions });
    this.props.getInitType({ id_constructions: id_constructions });
    this.props.getInitSize({ id_constructions: id_constructions });
    this.props.getInitMachined({ id_constructions: id_constructions });
    this.props.getInitPaintType({ id_constructions: id_constructions });
    this.props.getInitProducerSearch({
      id_constructions: id_constructions,
      name: ""
    });
    this.setState({
      ...buttons,
      list_shaped: true
    });
  }

  handleClickButton(event, key) {
    event.stopPropagation();
    this.setState({
      ...buttons,
      [key]: true
    });
  }

  render() {
    const { id_constructions } = this.props;
    return (
      <div className="order-form">
        <div className="order-header">
          <div className="label-menu">
            <div className="label-menu-button">
              <button
                onClick={event => this.handleClickButton(event, "input_shaped")}
                className={this.state.input_shaped ? "active" : ""}
              >
                <span>Thép hình</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "input_plate")}
                className={this.state.input_plate ? "active" : ""}
              >
                <span>Thép tấm</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "input_bolts")}
                className={this.state.input_bolts ? "active" : ""}
              >
                <span>Bulong</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "input_other")}
                className={this.state.input_other ? "active" : ""}
              >
                <span>Khác</span>
              </button>
            </div>
            <div className="label-details">
              <span>Nhập list mua hàng</span>
            </div>
          </div>
          <div className="label-menu">
            <div className="label-menu-button">
              <button
                onClick={event => this.handleClickButton(event, "list_shaped")}
                className={this.state.list_shaped ? "active" : ""}
              >
                <span>Thép hình</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "list_plate")}
                className={this.state.list_plate ? "active" : ""}
              >
                <span>Thép tấm</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "list_bolts")}
                className={this.state.list_bolts ? "active" : ""}
              >
                <span>Bulong</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "list_other")}
                className={this.state.list_other ? "active" : ""}
              >
                <span>Khác</span>
              </button>
            </div>
            <div className="label-details">
              <span>List mua hàng</span>
            </div>
          </div>
          <div className="label-menu">
            <div className="label-menu-button">
              <button
                onClick={event => this.handleClickButton(event, "coupon_sharped")}
                className={this.state.coupon_sharped ? "active" : ""}
              >
                <span>Thép hình</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "coupon_plate")}
                className={this.state.coupon_plate ? "active" : ""}
              >
                <span>Thép tấm</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "coupon_bolt")}
                className={this.state.coupon_bolt ? "active" : ""}
              >
                <span>Bulong</span>
              </button>
              <button
                onClick={event => this.handleClickButton(event, "coupon_other")}
                className={this.state.coupon_other ? "active" : ""}
              >
                <span>Khác</span>
              </button>
            </div>
            <div className="label-details">
              <span>Phiếu mua hàng</span>
            </div>
          </div>
        </div>

        {this.state.input_shaped ? (
          <InputOrderShapedSteel id_constructions={id_constructions} />
        ) : null}
        {this.state.input_plate ? (
          <InputOrderPlateSteel id_constructions={id_constructions} />
        ) : null}
        {this.state.input_bolts ? (
          <InputOrderBolts id_constructions={id_constructions} />
        ) : null}
        {this.state.input_other ? (
          <InputOrderOther id_constructions={id_constructions} />
        ) : null}
        {this.state.list_shaped ? (
          <ListOrderShapedSteel id_constructions={id_constructions} />
        ) : null}
        {this.state.list_plate ? (
          <ListOrderPlateSteel id_constructions={id_constructions} />
        ) : null}
        {this.state.list_other ? (
          <ListOrderOther id_constructions={id_constructions} />
        ) : null}
        {this.state.list_bolts ? (
          <ListOrderBolts id_constructions={id_constructions} />
        ) : null}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getAllParameter: data => dispatch(getAllParameter(data)),
  getSteelPart: data => dispatch(getSteelPart(data)),
  getInitType: data => dispatch(getInitType(data)),
  getInitMaterial: data => dispatch(getInitMaterial(data)),
  getInitSize: data => dispatch(getInitSize(data)),
  getInitMachined: data => dispatch(getInitMachined(data)),
  getInitPaintType: data => dispatch(getInitPaintType(data)),
  getInitProducerSearch: data => dispatch(getInitProducerSearch(data))
});
// const mapStateToProps = state => ({
//   isLoading: state.orderReducer.isLoading,
//   error: state.orderReducer.error,
//   listAllParameter: state.orderReducer.listAllParameter,
//   listSteelPart: state.orderReducer.listSteelPart,
//   listInitType: state.orderReducer.listInitType,
//   listInitMaterial: state.orderReducer.listInitMaterial,
//   listInitSize: state.orderReducer.listInitSize,
//   listInitMachined: state.orderReducer.listInitMachined,
//   listInitPaintType: state.orderReducer.listInitPaintType,
//   listInitProducerSearch: state.orderReducer.listInitProducerSearch
// });
export default connect(null, mapDispatchToProps)(OrderScreen);
