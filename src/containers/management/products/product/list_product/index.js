import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import ActionButtons from "../../../../../components/action-buttons";
import icons from "../../../../../constants/icons";
import Button from "../../../../../components/common/button";
import Input from "../../../../../components/common/input";
import {
  getProductConstruction,
  delProductConstruction
} from "../../../../../actions/product";
import { connect } from "react-redux";

class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_pd_steel_part: 99,
      dataColumn: [
        { name: "Bộ phận công trình", value: "constructions_part" },
        { name: "Bộ phận thép", value: "pd_steel_part" },
        { name: "Khu", value: "area" },
        { name: "Khu xây dựng", value: "area_construction" },
        { name: "Đốt", value: "burning" },
        { name: "Tầng", value: "layer" },
        { name: "Loại", value: "type" },
        { name: "Phân loại tên", value: "name_type" },
        { name: "Tên sản phẩm", value: "name" },
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
      name_find: "",
      successNoti: true,
      checkedItems: []
    };
    this.findProduct = this.findProduct.bind(this);
    this.handleChangeChecked = this.handleChangeChecked.bind(this);
  }
  findProduct(event) {
    const name_find = event.target.value;
    this.setState({
      name_find
    });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ successNoti: false });
    }, 3000);
  }
  handleDelProductConstruction = () => {
    const { id_constructions } = this.props;
    const { checkedItems } = this.state;
    if (window.confirm("Are you sure you wish to delete this item?")) {
      if (checkedItems.length > 0) {
        checkedItems.map(value =>
          this.props.delProductConstruction({
            id_constructions: Number(id_constructions),
            id: Number(value)
          })
        );
        this.setState({ checkedItems: [] });
      }
    }
  };
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

  render() {
    var leftmenu = [];
    const { dataColumn, name_find, checkedItems } = this.state;
    const { listProductConstruction } = this.props;
    const lowerCaseNameFind = name_find.toLowerCase();
    const dataProductConstruction = listProductConstruction.filter(
      productConstruction => {
        if (productConstruction.name) {
          return productConstruction.name
            .toLowerCase()
            .includes(lowerCaseNameFind);
        }
      }
    );
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
            <p>List sản phẩm</p>
            <Button iconButton={icons.icon_arrow_left} />
          </div>
          <div className="left-menu-content">{leftmenu}</div>
        </div>
        <div className="product-content-data">
          <div className="action-center">
            {this.props.success ? (
              this.state.successNoti ? (
                <p className="notification">{this.props.success}</p>
              ) : null
            ) : this.props.error ? (
              this.props.messages ? (
                <p className="notification">
                  {this.props.error.messages.message}
                </p>
              ) : (
                <p className="notification">Không thể kết nối đến server</p>
              )
            ) : null}
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
              <button className="add">
                <img src={icons.icon_plus} alt="add" />
              </button>
              {checkedItems.length > 0 ? (
                <Button
                  iconButton={icons.icon_delete}
                  onClickButton={this.handleDelProductConstruction}
                />
              ) : null}
            </div>
          </div>
          <div className="tableBody">
            <div className="tableCheckbox">
              {dataProductConstruction.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataProductConstruction.map(product => {
                      return (
                        <tr>
                          <td key={product.id}>
                            <Input
                              typeInput="checkbox"
                              nameInput={product.id.toString()}
                              onchangeInput={this.handleChangeChecked}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : null}
            </div>
            <Table dataColumn={dataColumn} dataRow={dataProductConstruction} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProductConstruction: data => dispatch(getProductConstruction(data)),
  delProductConstruction: data => dispatch(delProductConstruction(data))
});

const mapStateToProps = state => ({
  isLoading: state.productReducer.isLoading,
  error: state.productReducer.error,
  success: state.productReducer.success,
  listProductConstruction: state.productReducer.listProductConstruction
});
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
