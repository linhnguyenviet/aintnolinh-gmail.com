import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import Input from "../../../../../components/common/input";
import "./style.scss";
import Button from "../../../../../components/common/button";
import icons from "../../../../../constants/icons";
import ActionButtons from "../../../../../components/action-buttons";
import LayoutCode from "./layout_code";
import { getProductConstruction } from "../../../../../actions/product";
import { connect } from "react-redux";
import {
  getBarcodeProduct,
  postBarcodeProduct
} from "../../../../../actions/manage_code";
class ManageCodeProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout_code: false,
      productColumn: [
        { name: "Bộ phận công trình", value: "constructions_part" },
        { name: "Bộ phận thép", value: "pd_steel_part" },
        { name: "Khu", value: "area" },
        { name: "Khu xây dựng", value: "area_construction" },
        { name: "Loại", value: "type" },
        { name: "Phân loại tên", value: "name_type" },
        { name: "Tên sản phẩm", value: "name" },
        { name: "Chất liệu", value: "material" },
        { name: "Hãng sản xuất", value: "" },
        { name: "Nơi mua hàng", value: "" },
        { name: "Nơi nhập hàng", value: "" },
        { name: "Nơi gia công thô", value: "place_roughing" },
        { name: "Nơi gia công thành phẩm", value: "place_machining_done" },
        { name: "Ngày mua hàng", value: "" },
        { name: "Ngày yêu cầu nhập hàng", value: "" },
        { name: "Ngày nhập hàng", value: "" },
        { name: "Mã barcode", value: "barcode_name" },
        { name: "Ngày xuất barcode", value: "barcode_date" },
        { name: "Màu ribon", value: "" },
        { name: "Số hiệu bản vẽ", value: "drawing_number" }
      ],
      partColumn: [
        { name: "Tên sản phẩm", value: "id_pd_product" },
        { name: "Bộ phận công trình", value: "constructions_part" },
        { name: "Bộ phận thép", value: "pd_steel_part" },
        { name: "Phân loại tên", value: "id_pd_product_common_type" },
        { name: "Tên cấu kiện", value: "name" },
        { name: "Chất liệu", value: "material" },
        { name: "Hãng sản xuất", value: "" },
        { name: "Nơi mua hàng", value: "" },
        { name: "Nơi nhập hàng", value: "" },
        { name: "Nơi gia công thô", value: "place_roughing" },
        { name: "Nơi gia công thành phẩm", value: "place_machining_done" },
        { name: "Ngày mua hàng", value: "" },
        { name: "Ngày yêu cầu nhập hàng", value: "" },
        { name: "Ngày nhập hàng", value: "" },
        { name: "Giá gia công thô", value: "" },
        { name: "Giá gia công thành phẩm", value: "" },
        { name: "Giá gia công", value: "" },
        { name: "Mã barcode", value: "barcode_name" },
        { name: "Ngày xuất barcode", value: "barcode_date" },
        { name: "Màu ribon", value: "" },
        { name: "Số hiệu bản vẽ", value: "drawing_number" }
      ],
      name_find: "",
      items: [],
      successNoti: true
    };
    this.handleClickButton = this.handleClickButton.bind(this);
    this.findProduct = this.findProduct.bind(this);
    this.handleChangeChecked = this.handleChangeChecked.bind(this);
  }

  handleClickButton(event, key) {
    event.stopPropagation();
    this.setState(prevState => {
      return {
        [key]: !prevState[key]
      };
    });
  }
  componentDidMount() {
    const id_constructions = this.props.id_constructions;
    this.props.getBarcodeProduct({ id_constructions: id_constructions });
    this.props.getProductConstruction({ id_constructions: id_constructions });
    setTimeout(() => { this.setState({ successNoti: false }) }, 3000);

  }
  findProduct(event) {
    const name_find = event.target.value;
    this.setState({
      name_find
    });
  }
  handleChangeChecked(e) {
    const id_item = e.target.name;
    const isChecked = e.target.checked;
    const items = [...this.state.items];
    if (isChecked) {
      items.push({
        id_pd_product: id_item,
        code_type: 1,
        comment1: "comment barcdode 1",
        comment2: "comment barcdode 2",
        comment3: "comment barcdode 3"
      });
      this.setState({ items });
    } else {
      this.setState(prevState => {
        const items = prevState.items.filter(
          item => item.id_pd_product !== id_item
        );
        return { items };
      });
    }
  }
  exportCode = () => {
    const { items } = this.state;
    if (items.length > 0) {
      this.props.postBarcodeProduct({
        id_constructions: this.props.id_constructions,
        items: items
      });
    } else {
      alert("Vui lòng chọn sản phẩm để xuất barcode");
    }
  };

  render() {
    const {
      id_constructions,
      listProductConstruction,
      listBarcodeProduct,
      listParts,
      listType,
      listLayout,
      typeLayout,
      listBarcodePart,
      id_part
    } = this.props;
    const { productColumn, partColumn, name_find } = this.state;
    var leftmenu = [];
    const dataProduct = [];
    const dataPart = [];
    //Map barcode of product
    if (listBarcodeProduct && listProductConstruction) {
      listProductConstruction.map((val, ind) => {
        var data = { ...val };
        var barcode = listBarcodeProduct.filter(
          bar => {
            if (bar.pd_barcode) {
              return bar.id_pd_product === data.id
            }
          }
        );
        if (barcode.length > 0) {
          data.barcode_name = barcode[0].pd_barcode.code;
          data.barcode_date = barcode[0].pd_barcode.create_at;
          data.pd_steel_part = val.pd_steel_part.name;
          dataProduct.push(data);
        } else {
          dataProduct.push(data);
        }
        return dataProduct;
      });
    }
    console.log(listProductConstruction);

    const lowerCaseNameFind = name_find.toLowerCase();
    const dataProductConstruction = dataProduct.filter(productConstruction => {
      if (productConstruction.name) {
        return productConstruction.name.toLowerCase().includes(lowerCaseNameFind)
      }
    }
    );

    //Map barcode of part
    if (listParts && listBarcodePart && id_part && listProductConstruction) {
      listParts.map((val, ind) => {
        var data = { ...val };
        console.log(data)
        var name_product = listProductConstruction.filter(
          product => product.id === val.id_pd_product
        );
        console.log(name_product);

        var name_type = listType.filter(
          type => type.id === val.id_pd_product_common_type
        );
        console.log(name_type);

        var barcodePart = listBarcodePart.filter(
          bar => bar.pd_barcode[id_part] === val.id
        );
        if (name_product.length > 0) {
          data.id_pd_product = name_product[0].name;
        }
        if (name_type.length > 0) {
          data.id_pd_product_common_type = name_type[0].name;
        }
        if (barcodePart.length > 0) {
          data.barcode_name = barcodePart[0].pd_barcode.code;
          data.barcode_type = barcodePart[0].pd_barcode.code_type;
          data.barcode_date = barcodePart[0].pd_barcode.create_at;
        }

        return dataPart.push(data);
      });
    }
    for (let i = 1; i < 22; i++) {
      leftmenu.push(
        <div className="check-list">
          <ul>
            <li>
              <Input typeInput="checkbox" />
              <span>All</span>
              <button>Change</button>
            </li>
            <li>
              <Input typeInput="checkbox" />
              <span>Lorem</span>
            </li>
            <li>
              <Input typeInput="checkbox" />
              <span>Lorem</span>
            </li>
            <li>
              <Input typeInput="checkbox" />
              <span>Lorem</span>
            </li>
            <li>
              <Input typeInput="checkbox" />
              <span>Lorem</span>
            </li>
            <li>
              <Input typeInput="checkbox" />
              <span>Lorem</span>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <>
        <div className="action-center">
          <div className="left-menu-control">
            <p>Nhập sản phẩm</p>
            <Button iconButton={icons.icon_arrow_left} />
          </div>
          {
            this.props.success ?
              this.state.successNoti ?
                <p className="notification">{this.props.success}</p>
                : null :
              this.props.error ?
                this.props.messages ?
                  <p className="notification">{this.props.error.messages.message}</p> :
                  <p className="notification">Không thể kết nối đến server</p>
                : null
          }
          <ActionButtons />
          <div className="action-button">
            <div className="search">
              <Input
                typeInput="text"
                placeholderInput="Search"
                onchangeInput={this.findProduct}
              />
              <Button iconButton={icons.icon_search} />
            </div>
            <Button
              iconButton={icons.icon_export_code}
              titleButton="Export code"
              onClickButton={this.exportCode}
            />
            <Button
              iconButton={icons.icon_layout_code}
              titleButton="Layout code"
              onClickButton={event =>
                this.handleClickButton(event, "layout_code")
              }
              classNameButton={this.state.layout_code ? "active" : ""}
            />
          </div>
        </div>
        <div className="manage-code-product">
          {this.state.layout_code === true ? (
            <LayoutCode
              id_constructions={id_constructions}
              listLayout={listLayout}
              listBarcodePart={listBarcodePart}
              typeLayout={typeLayout}
              dataPart={dataPart}
              id_part={id_part}
            />
          ) : (
              <>
                <div className="left-menu">
                  <div className="left-menu-content">{leftmenu}</div>
                </div>
                <div className="tableCheckbox">
                  {dataProductConstruction.length > 0 ? (
                    <table>
                      <tr>
                        <th></th>
                      </tr>
                      {dataProductConstruction.map(product => {
                        return (
                          <tr>
                            <td key={product.id}>
                              <Input
                                typeInput="checkbox"
                                nameInput={product.id}
                                onchangeInput={this.handleChangeChecked}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </table>
                  ) : null}
                </div>

                {this.props.listParts ? (
                  <Table dataColumn={partColumn} dataRow={dataPart} />
                ) : (
                    <Table
                      dataColumn={productColumn}
                      dataRow={dataProductConstruction}
                    />
                  )}
              </>
            )}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProductConstruction: data => dispatch(getProductConstruction(data)),
  getBarcodeProduct: data => dispatch(getBarcodeProduct(data)),
  postBarcodeProduct: product => dispatch(postBarcodeProduct(product))
});

const mapStateToProps = state => ({
  isLoading: state.productReducer.isLoading,
  error: state.productReducer.error,
  success: state.productReducer.success,
  listProductConstruction: state.productReducer.listProductConstruction,
  listProductCodeLayout: state.manageCodeReducer.listProductCodeLayout,
  listBarcodeProduct: state.manageCodeReducer.listBarcodeProduct
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCodeProduct);
