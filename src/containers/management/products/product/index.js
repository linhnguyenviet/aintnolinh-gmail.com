import React, { Component } from "react";
import "./style.scss";
import Button from "../../../../components/common/button";
import InputColumnsComponents from "./columns/index";
import InputGirderComponents from "./girders/index";
import InputTrussComponents from "./truss/index";
import ListParts from "./list_parts";
import AddProductScreen from "./add_product";
import ListProducts from "./list_product";
import {
  getProductConstruction,
  getColumnComponentProduct,
  getTrussComponentProduct,
  getMainGirderComponentProduct,
  getAllProductCommonType
} from "../../../../actions/product";
import {
  getAllParameter,
  getSteelPart,
  getInitMaterial,
  getInitType,
  getInitSize
} from "../../../../actions/order";
import { connect } from "react-redux";

const buttons = {
  input_columns: false,
  input_girder: false,
  input_truss: false,
  list_columns: false,
  list_girder: false,
  list_truss: false,
  add_product: false,
  list_product: false,
  modalExcelImportIsOpen: false
};

class ProductInputList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...buttons
    };
    this.handleClickButton = this.handleClickButton.bind(this);
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
    const { id_constructions } = this.props;
    this.props.getProductConstruction({ id_constructions: id_constructions });
    this.props.getColumnComponentProduct({
      id_constructions: id_constructions
    });
    this.props.getTrussComponentProduct({ id_constructions: id_constructions });
    this.props.getMainGirderComponentProduct({
      id_constructions: id_constructions
    });
    this.props.getAllParameter({
      id_constructions: id_constructions
    });
    this.props.getSteelPart({
      id_constructions: id_constructions
    });
    this.props.getInitSize({
      id_constructions: id_constructions
    });
    this.props.getInitType({
      id_constructions: id_constructions
    });
    this.props.getInitMaterial({
      id_constructions: id_constructions
    });
    this.setState({
      ...buttons,
      list_product: true
    });
  }

  render() {
    const { id_constructions } = this.props;
    return (
      <div className="product-input-list">
        <div className="product-header">
          <div className="label-menu">
            <div className="label-menu-button">
              <Button
                titleButton="Nhập sản phẩm"
                classNameButton={
                  this.state.add_product
                    ? "active first-button"
                    : "first-button"
                }
                onClickButton={event =>
                  this.handleClickButton(event, "add_product")
                }
              />
            </div>
          </div>
          <div className="label-menu">
            <div className="label-menu-button">
              <Button
                onClickButton={event =>
                  this.handleClickButton(event, "input_columns")
                }
                classNameButton={this.state.input_columns ? "active" : ""}
                titleButton="Cột"
              />
              <Button
                onClickButton={event =>
                  this.handleClickButton(event, "input_truss")
                }
                classNameButton={this.state.input_truss ? "active" : ""}
                titleButton="Giàn"
              />
              <Button
                onClickButton={event =>
                  this.handleClickButton(event, "input_girder")
                }
                classNameButton={this.state.input_girder ? "active" : ""}
                titleButton="Dầm chính"
              />
            </div>
            <div className="label-details">
              <span>Nhập cấu kiện</span>
            </div>
          </div>
          <div className="label-menu">
            <div className="label-menu-button">
              <Button
                titleButton="List sản phẩm"
                classNameButton={
                  this.state.list_product
                    ? "active first-button"
                    : "first-button"
                }
                onClickButton={event =>
                  this.handleClickButton(event, "list_product")
                }
              />
            </div>
          </div>
          <div className="label-menu">
            <div className="label-menu-button">
              <Button
                onClickButton={event =>
                  this.handleClickButton(event, "list_columns")
                }
                classNameButton={this.state.list_columns ? "active" : ""}
                titleButton="Cột"
              />
              <Button
                onClickButton={event =>
                  this.handleClickButton(event, "list_truss")
                }
                classNameButton={this.state.list_truss ? "active" : ""}
                titleButton="Giàn"
              />
              <Button
                onClickButton={event =>
                  this.handleClickButton(event, "list_girder")
                }
                classNameButton={this.state.list_girder ? "active" : ""}
                titleButton="Dầm chính"
              />
            </div>
            <div className="label-details">
              <span>List cấu kiện</span>
            </div>
          </div>
        </div>

        {this.state.input_columns ? (
          <InputColumnsComponents />
        ) : this.state.input_girder ? (
          <InputGirderComponents />
        ) : this.state.input_truss ? (
          <InputTrussComponents />
        ) : this.state.list_columns ? (
          <ListParts
            listParts={this.props.listColumnComponentProduct}
            listProduct={this.props.listProductConstruction}
            listType={this.props.listAllProductCommonType}
            findPart="column"
          />
        ) : this.state.list_girder ? (
          <ListParts
            listParts={this.props.listMainGirderComponentProduct}
            listProduct={this.props.listProductConstruction}
            listType={this.props.listAllProductCommonType}
            findPart="main_girder"
          />
        ) : this.state.list_truss ? (
          <ListParts
            listParts={this.props.listTrussComponentProduct}
            listProduct={this.props.listProductConstruction}
            listType={this.props.listAllProductCommonType}
            findPart="truss"
          />
        ) : this.state.add_product ? (
          <AddProductScreen id_constructions={id_constructions} />
        ) : this.state.list_product ? (
          <ListProducts id_constructions={id_constructions} />
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProductConstruction: data => dispatch(getProductConstruction(data)),
  getColumnComponentProduct: data => dispatch(getColumnComponentProduct(data)),
  getTrussComponentProduct: data => dispatch(getTrussComponentProduct(data)),
  getMainGirderComponentProduct: data =>
    dispatch(getMainGirderComponentProduct(data)),
  getAllProductCommonType: data => dispatch(getAllProductCommonType(data)),
  getAllParameter: data => dispatch(getAllParameter(data)),
  getSteelPart: data => dispatch(getSteelPart(data)),
  getInitType: data => dispatch(getInitType(data)),
  getInitMaterial: data => dispatch(getInitMaterial(data)),
  getInitSize: data => dispatch(getInitSize(data))
});
const mapStateToProps = state => ({
  isLoading: state.productReducer.isLoading,
  error: state.productReducer.error,
  listProductConstruction: state.productReducer.listProductConstruction,
  listColumnComponentProduct: state.productReducer.listColumnComponentProduct,
  listTrussComponentProduct: state.productReducer.listTrussComponentProduct,
  listMainGirderComponentProduct:
    state.productReducer.listMainGirderConstruction,
  listAllProductCommonType: state.productReducer.listAllProductCommonType
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductInputList);
