import React, { Component } from "react";
import "./style.scss";
import InputParametersScreen from "./input_parameters";
import OrderScreen from "./orders";
import ProductInputList from "./product";
import ManageCodeScreen from "./manage_code";
import OriginalDataScreen from "./original_data";

const menus = {
  input_data: false,
  order_data: false,
  product_data: false,
  manage_code_data: false,
  original_data: false
};

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { ...menus };
    this.handleClickMenu = this.handleClickMenu.bind(this);
    //this.handleClickButton = this.handleClickButton.bind(this);
  }
  componentDidMount() {
    this.setState({
      ...menus,
      input_data: true
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
    const { id_construction } = this.props;
    return (
      <div className="FMCT1210">
        <div className="menu">
          <ul>
            <li
              key="input_data"
              onClick={event => this.handleClickMenu(event, "input_data")}
              className={this.state.input_data ? "active" : ""}
            >
              <span>Thông Số Đầu Vào</span>
            </li>
            <li
              key="order_data"
              onClick={event => this.handleClickMenu(event, "order_data")}
              className={this.state.order_data ? "active" : ""}
            >
              <span>Đặt Hàng</span>
            </li>
            <li
              key="product_data"
              onClick={event => this.handleClickMenu(event, "product_data")}
              className={this.state.product_data ? "active" : ""}
            >
              <span>Sản Phẩm</span>
            </li>
            <li>
              <span>Nhập Hàng</span>
            </li>
            <li
              key="original_data"
              onClick={event => this.handleClickMenu(event, "original_data")}
              className={this.state.original_data ? "active" : ""}
            >
              <span>Dữ Liệu Gốc</span>
            </li>
            <li
              key="manage_code_data"
              onClick={event => this.handleClickMenu(event, "manage_code_data")}
              className={this.state.manage_code_data ? "active" : ""}
            >
              <span>Quản Lí Code</span>
            </li>
          </ul>
        </div>
        {this.state.input_data ? (
          <InputParametersScreen id_construction={id_construction} />
        ) : null}
        {this.state.order_data ? (
          <OrderScreen id_constructions={id_construction} />
        ) : null}
        {this.state.product_data ? (
          <ProductInputList id_constructions={id_construction} />
        ) : null}
        {this.state.manage_code_data ? (
          <ManageCodeScreen id_constructions={id_construction} />
        ) : null}
        {this.state.original_data ? (
          <OriginalDataScreen id_constructions={id_construction} />
        ) : null}
      </div>
    );
  }
}

export default ProductsScreen;
