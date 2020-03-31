import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import ActionButtons from "../../../../../components/action-buttons";
import icons from "../../../../../constants/icons";
import Button from "../../../../../components/common/button";
import Input from "../../../../../components/common/input";
import {
  findColumnComponentProduct,
  findMainGirderComponentProduct,
  findTrussComponentProduct
} from "../../../../../actions/product";
import { connect } from "react-redux";

class ListParts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      product_name: "Test SP H0 DAN 001",
      dataColumn: [
        { name: "Tên sản phẩm", value: "id_pd_product" },
        { name: "Bộ phận công trình", value: "constructions_part" },
        { name: "Bộ phận thép", value: "pd_steel_part" },
        { name: "Khu", value: "area" },
        { name: "Khu xây dựng", value: "area_construction" },
        { name: "Đốt", value: "burning" },
        { name: "Tầng", value: "layer" },
        { name: "Loại", value: "type" },
        { name: "Phân loại tên", value: "id_pd_product_common_type" },
        { name: "Tên cấu kiện", value: "name" },
        { name: "Chất liệu", value: "material" },
        { name: "Kích thước", value: "size_pd" },
        { name: "Trọng lượng đơn vị", value: "weight_unit" },
        { name: "Chiều dài", value: "width" },
        { name: "Số lượng", value: "quantity" },
        { name: "Trọng lượng", value: "weight" },
        { name: "Bộ phận gia công", value: "" },
        { name: "Loại sơn", value: "" },
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
        { name: "Chiều dài hàn", value: "welding_length" },
        { name: "Diện tích bề mặt", value: "surface_area" },
        { name: "Bản nối trái", value: "left_connector" },
        { name: "Bản nối phải", value: "right_connector" },
        { name: "Đỡ xiên trái", value: "left_slant_bar" },
        { name: "Đỡ xiên phải", value: "right_slant_bar" },
        { name: "Chỉ thị sơn", value: "paint_directive" },
        { name: "Màu ribon", value: "" },
        { name: "Số hiệu bản vẽ", value: "drawing_number" }
      ],
      successNoti: true
    };
    this.findParts = this.findParts.bind(this);
  }
  findParts(event) {
    if (
      event.keyCode === 13 ||
      event.key === "Enter" ||
      event.key === "Return"
    ) {
      const name_find = event.target.value;
      switch (this.props.findPart) {
        case "column":
          this.props.findColumnComponentProduct({
            name: name_find,
            id_constructions: this.props.id_constructions,
            product_name: this.state.product_name
          });
          break;
        case "truss":
          this.props.findTrussComponentProduct({
            name: name_find,
            id_constructions: this.props.id_constructions,
            product_name: this.state.product_name
          });
          break;
        case "main_girder":
          this.props.findMainGirderComponentProduct({
            name: name_find,
            id_constructions: this.props.id_constructions,
            product_name: this.state.product_name
          });
          break;
        default:
          this.setState({ datas: [] });
      }
    }
    this.setState({
      datas: []
    });
  }
  componentDidMount() {
    setTimeout(() => { this.setState({ successNoti: false }) }, 3000);

  }
  render() {
    const { listParts, listProduct, listType } = this.props;
    const dataColumn = this.state.dataColumn;
    var leftmenu = [];
    const dataTable = [];
    if (listParts) {
      listParts.map((val, ind) => {
        var data = { ...val };
        var name_product = listProduct.filter(
          product => product.id === val.id_pd_product
        );
        var name_type = listType.filter(
          type => type.id === val.id_pd_product_common_type
        );
        console.log(name_type)
        if (name_product.length > 0) {
          data.id_pd_product = name_product[0].name;
        }
        if (name_type.length > 0) {
          data.id_pd_product_common_type = name_type[0].name;
        }
        return dataTable.push(val);
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
      <div className="product-list-content">
        <div className="left-menu">
          <div className="left-menu-control">
            <p>List cấu kiện</p>
            <Button iconButton={icons.icon_arrow_left} />
          </div>
          <div className="left-menu-content">{leftmenu}</div>
        </div>
        <div className="product-content-data">
          <div className="action-center">
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
              <form className="search">
                <Input typeInput="text" placeholderInput="Search" />
                <Button iconButton={icons.icon_search} />
              </form>
              <button className="add">
                <img src={icons.icon_plus} alt="add" />
              </button>
            </div>
          </div>
          <Table dataColumn={dataColumn} dataRow={dataTable} />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  findColumnComponentProduct: data =>
    dispatch(findColumnComponentProduct(data)),
  findTrussComponentProduct: data => dispatch(findTrussComponentProduct(data)),
  findMainGirderComponentProduct: data =>
    dispatch(findMainGirderComponentProduct(data))
});

const mapStateToProps = state => ({
  isLoading: state.productReducer.isLoading,
  error: state.productReducer.error,
  success: state.productReducer.success,
  listAllProductCommonType: state.productReducer.listAllProductCommonType
});
export default connect(mapStateToProps, mapDispatchToProps)(ListParts);
