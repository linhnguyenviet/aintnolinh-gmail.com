import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import ActionButtons from "../../../../../components/action-buttons";
import icons from "../../../../../constants/icons";
import Button from "../../../../../components/common/button";
import Input from "../../../../../components/common/input";
import { connect } from "react-redux";
import {
  getSteelSheetOrder,
  findSteelSheetOrder,
  delSteelSheetOrder
} from "../../../../../actions/order";

class ListOrderPlateSteel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataColumn: [
        { name: "Bộ Phận Công Trình", value: "constructions_part" },
        { name: "Loại", value: "type" },
        { name: "Tên", value: "name" },
        { name: "Chất Liệu", value: "material" },
        { name: "Chiều Dày", value: "thick" },
        { name: "Trọng Lượng Đơn Vị", value: "weight_unit" },
        { name: "X", value: "x" },
        { name: "Y", value: "y" },
        { name: "Số Tấm", value: "quantity_sheet" },
        { name: "Trọng Lượng", value: "weight" },
        { name: "Hình Lỗ", value: "shape_hole" },
        { name: "Số Lỗ", value: "number_hole" },
        { name: "Hãng Sản Xuất", value: "manufacturer" },
        { name: "Nơi Mua Hàng", value: "place_purchases" },
        { name: "Nơi Nhập Hàng", value: "place_order_product" },
        { name: "Nơi Gia Công Thô", value: "place_roughing" },
        { name: "Nơi Gia Công Thành Phẩm", value: "place_machining_done" },
        { name: "Ngày Mua Hàng", value: "date_order" },
        { name: "Ngày Yêu Cầu Hàng Tới", value: "date_request_coming" },
        { name: "Giá Gia Công Thô", value: "price_roughing" },
        { name: "Giá Gia Công Thành Phẩm", value: "price_machining_done" },
        { name: "Ghi Chú 1", value: "note1" },
        { name: "Ghi Chú 2", value: "note2" },
        { name: "Ngày Tạo", value: "create_at" },
        { name: "Ngày Thay Đổi", value: "update_at" }
      ],
      successNoti: true,
      name_find: "",
      checkedItems: []
    };
    this.findListSheet = this.findListSheet.bind(this);
    this.handleChangeChecked = this.handleChangeChecked.bind(this);

  }
  componentDidMount() {
    const { id_constructions } = this.props;
    this.props.getSteelSheetOrder({ id_constructions: id_constructions });
    setTimeout(() => { this.setState({ successNoti: false }) }, 3000);
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

  handleDelSteelSheet = () => {
    const { id_constructions } = this.props;
    const { checkedItems } = this.state;
    if (window.confirm("Are you sure you wish to delete this item?")) {
      if (checkedItems.length > 0) {
        checkedItems.map(value =>
          this.props.delSteelSheetOrder({
            id_constructions: Number(id_constructions),
            id_steel_sheet: Number(value)
          })
        );
        this.setState({ checkedItems: [] });
      }
    }
  };

  findListSheet(event) {
    const name_find = event.target.value;
    this.setState({
      name_find: name_find
    });
  }
  render() {
    const { dataColumn, name_find, checkedItems } = this.state;
    const { listSteelSheetOrder } = this.props;
    const lowerCaseNameFind = name_find.toLowerCase();
    var dataSteelSheetOrder = [];
    if (listSteelSheetOrder.length > 0) {
      dataSteelSheetOrder = listSteelSheetOrder.filter(steelSheetOrder => {
        if (steelSheetOrder.name) {
          return steelSheetOrder.name.toLowerCase().includes(lowerCaseNameFind);
        }
      });
    }


    var leftmenu = [];
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
      <div className="order-content">
        <div className="left-menu">
          <div className="left-menu-control">
            <p>Lorem text</p>
            <Button iconButton={icons.icon_arrow_left} />
          </div>
          <div className="left-menu-content">{leftmenu}</div>
        </div>
        <div className="order-content-data">
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
              <div className="search">
                <Input
                  typeInput="text"
                  placeholderInput="Search"
                  onKeyDownInput={this.findListSheet}
                />
                <Button iconButton={icons.icon_search} />
              </div>
              <button className="add">
                <img src={icons.icon_plus} alt="add" />
              </button>
              {checkedItems.length > 0 ? (
                <Button
                  iconButton={icons.icon_delete}
                  onClickButton={this.handleDelSteelSheet}
                />
              ) : null}
            </div>
          </div>
          <div className="tableBody">
            <div className="tableCheckbox">
              {dataSteelSheetOrder.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataSteelSheetOrder.map(steelSheet => {
                      return (
                        <tr>
                          <td key={steelSheet.id}>
                            <Input
                              typeInput="checkbox"
                              nameInput={steelSheet.id.toString()}
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
            <Table dataColumn={dataColumn} dataRow={dataSteelSheetOrder} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSteelSheetOrder: data => dispatch(getSteelSheetOrder(data)),
  findSteelSheetOrder: data => dispatch(findSteelSheetOrder(data)),
  delSteelSheetOrder: data => dispatch(delSteelSheetOrder(data))
});

const mapStateToProps = state => ({
  isLoading: state.orderReducer.isLoading,
  error: state.orderReducer.error,
  success: state.orderReducer.success,
  listSteelSheetOrder: state.orderReducer.listSteelSheetOrder
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOrderPlateSteel);
