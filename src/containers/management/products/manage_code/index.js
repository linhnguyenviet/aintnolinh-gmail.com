import React, { Component } from "react";
import "./style.scss";
import Button from "../../../../components/common/button";
import ManageCodeProduct from "./product/index";
import { connect } from "react-redux";
import {
  getProductConstruction,
  getColumnComponentProduct,
  getTrussComponentProduct,
  getMainGirderComponentProduct,
  getAllProductCommonType
} from "../../../../actions/product";
import {
  getBarcodeProduct,
  getBarcodeColumn,
  getBarcodeTruss,
  getBarcodeMainGirder,
  getProductCodeLayout,
  getComponentColumnCodeLayout,
  getComponentMainGirderCodeLayout,
  getComponentTrussCodeLayout
} from "../../../../actions/manage_code";

const buttons = {
  product: false,
  column: false,
  truss: false,
  main_girder: false
};

class ManageCodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { ...buttons };
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
    this.props.getBarcodeTruss({ id_constructions: id_constructions });
    this.props.getBarcodeColumn({ id_constructions: id_constructions });
    this.props.getBarcodeMainGirder({ id_constructions: id_constructions });
    this.props.getAllProductCommonType();
    this.props.getTrussComponentProduct({ id_constructions: id_constructions });
    this.props.getColumnComponentProduct({
      id_constructions: id_constructions
    });
    this.props.getMainGirderComponentProduct({ id_constructions: id_constructions })
    this.props.getProductConstruction({ id_constructions: id_constructions });
    this.props.getProductCodeLayout({ id_constructions: id_constructions });
    this.props.getComponentColumnCodeLayout({
      id_constructions: id_constructions
    });
    this.props.getComponentTrussCodeLayout({
      id_constructions: id_constructions
    });
    this.props.getComponentMainGirderCodeLayout({
      id_constructions: id_constructions
    });
    this.setState({
      ...buttons,
      product: true
    });
  }
  render() {
    const {
      id_constructions,
      listAllProductCommonType,
      listTrussComponentProduct,
      listColumnComponentProduct,
      listMainGirderComponentProduct,
      listColumnCodeLayout,
      listTrussCodeLayout,
      listMainGirderCodeLayout,
      listBarcodeTruss,
      listBarcodeColumn,
      listBarcodeMainGirder,
      listProductCodeLayout
    } = this.props;
    return (
      <div className="manage-code">
        <div className="manage-code-header">
          <div className="label-menu">
            <div className="label-menu-button">
              <Button
                onClickButton={event =>
                  this.handleClickButton(event, "product")
                }
                classNameButton={this.state.product ? "active" : ""}
                titleButton="Sản phẩm"
              />
            </div>
          </div>
          <div className="label-menu">
            <div className="label-menu-button">
              <Button
                onClickButton={event => this.handleClickButton(event, "column")}
                classNameButton={this.state.column ? "active" : ""}
                titleButton="Cột"
              />
              <Button
                onClickButton={event => this.handleClickButton(event, "truss")}
                classNameButton={this.state.truss ? "active" : ""}
                titleButton="Giàn"
              />
              <Button
                onClickButton={event =>
                  this.handleClickButton(event, "main_girder")
                }
                classNameButton={this.state.main_girder ? "active" : ""}
                titleButton="Dầm chính"
              />
            </div>
            <div className="label-details">
              <span>List cấu kiện</span>
            </div>
          </div>
        </div>
        {this.state.product ? (
          <ManageCodeProduct
            id_constructions={id_constructions}
            listLayout={listProductCodeLayout}
            typeLayout="product"
          />
        ) : this.state.truss ? (
          <ManageCodeProduct
            id_constructions={id_constructions}
            listParts={listTrussComponentProduct}
            listType={listAllProductCommonType}
            listBarcodePart={listBarcodeTruss}
            listLayout={listTrussCodeLayout}
            typeLayout="part"
            id_part="id_pd_components_truss"
          />
        ) : this.state.column ? (
          <ManageCodeProduct
            id_constructions={id_constructions}
            listParts={listColumnComponentProduct}
            listType={listAllProductCommonType}
            listBarcodePart={listBarcodeColumn}
            id_part="id_pd_components_column"
            listLayout={listColumnCodeLayout}
            typeLayout="part"
          />
        ) : this.state.main_girder ? (
          <ManageCodeProduct
            id_constructions={id_constructions}
            listParts={listMainGirderComponentProduct}
            listType={listAllProductCommonType}
            listBarcodePart={listBarcodeMainGirder}
            id_part="id_pd_components_main_girder"
            listLayout={listMainGirderCodeLayout}
            typeLayout="part"
          />
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
  getProductCodeLayout: data => dispatch(getProductCodeLayout(data)),
  getComponentColumnCodeLayout: data =>
    dispatch(getComponentColumnCodeLayout(data)),
  getComponentTrussCodeLayout: data =>
    dispatch(getComponentTrussCodeLayout(data)),
  getComponentMainGirderCodeLayout: data =>
    dispatch(getComponentMainGirderCodeLayout(data)),
  getBarcodeProduct: data => dispatch(getBarcodeProduct(data)),
  getBarcodeColumn: data => dispatch(getBarcodeColumn(data)),
  getBarcodeTruss: data => dispatch(getBarcodeTruss(data)),
  getBarcodeMainGirder: data => dispatch(getBarcodeMainGirder(data))
});
const mapStateToProps = state => ({
  isLoading: state.productReducer.isLoading,
  error: state.productReducer.error,
  listProductConstruction: state.productReducer.listProductConstruction,
  listColumnComponentProduct: state.productReducer.listColumnComponentProduct,
  listTrussComponentProduct: state.productReducer.listTrussComponentProduct,
  listMainGirderComponentProduct: state.productReducer.listMainGirderComponentProduct,
  listAllProductCommonType: state.productReducer.listAllProductCommonType,
  listProductCodeLayout: state.manageCodeReducer.listProductCodeLayout,
  listColumnCodeLayout: state.manageCodeReducer.listColumnCodeLayout,
  listTrussCodeLayout: state.manageCodeReducer.listTrussCodeLayout,
  listMainGirderCodeLayout: state.manageCodeReducer.listMainGirderCodeLayout,
  listBarcodeProduct: state.manageCodeReducer.listBarcodeProduct,
  listBarcodeColumn: state.manageCodeReducer.listBarcodeColumn,
  listBarcodeTruss: state.manageCodeReducer.listBarcodeTruss,
  listBarcodeMainGirder: state.manageCodeReducer.listBarcodeMainGirder
});
export default connect(mapStateToProps, mapDispatchToProps)(ManageCodeScreen);
