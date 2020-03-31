import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import ActionButtons from "../../../../../components/action-buttons";
import icons from "../../../../../constants/icons";
import Button from "../../../../../components/common/button";
import Input from "../../../../../components/common/input";
import { connect } from "react-redux";
import { getBoltOrder, findBoltOrder, delBoltOrder } from "../../../../../actions/order";

class ListOrderBolts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataColumn: [
        { name: "ID", value: "id" },
        { name: "Bộ Phận Công Trình", value: "constructions_part" },
        { name: "Khu", value: "area" },
        { name: "Loại", value: "type" },
        { name: "Chất Liệu", value: "material" },
        { name: "Kích Thước", value: "size_pd" },
        { name: "Trọng Lượng Đơn Vị", value: "weight_unit" },
        { name: "Số Hộp", value: "quantity_box" },
        { name: "Trọng Lượng", value: "weight" },
        { name: "Hãng Sản Xuất", value: "manufacturer" },
        { name: "Nơi Mua Hàng", value: "place_purchases" },
        { name: "Nơi Nhập Hàng", value: "place_order_product" },
        { name: "Ngày Mua Hàng", value: "date_order" },
        { name: "Ngày Yêu Cầu Hàng Tới", value: "date_request_coming" },
        { name: "Đơn Giá", value: "price" },
        { name: "Tổng Tiền", value: "total_money" },
        { name: "Ghi Chú 1", value: "note1" },
        { name: "Ghi Chú 2", value: "note2" },
        { name: "Ngày Tạo", value: "create_at" },
        { name: "Ngày Thay Đổi", value: "update_at" }
      ],
      name_find: "",
      successNoti: true,
      checkedItems: []

    };
    this.findListBolt = this.findListBolt.bind(this);
    this.handleChangeChecked = this.handleChangeChecked.bind(this);

  }
  componentDidMount() {
    const { id_constructions } = this.props;
    this.props.getBoltOrder({ id_constructions: id_constructions });
    setTimeout(() => { this.setState({ successNoti: false }) }, 3000);
  }
  findListBolt(event) {
    const name_find = event.target.value;
    this.setState({
      name_find: name_find
    });
  }
  handleDelBolt = () => {
    const { id_constructions } = this.props;
    const { checkedItems } = this.state;
    if (window.confirm("Are you sure you wish to delete this item?")) {
      if (checkedItems.length > 0) {
        checkedItems.map(value =>
          this.props.delBoltOrder({
            id_constructions: Number(id_constructions),
            id_bolt: Number(value)
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
    const { dataColumn, name_find, checkedItems } = this.state;
    const { listBoltOrder } = this.props;
    var dataBoltOrder = [];
    if (listBoltOrder.length > 0) {
      dataBoltOrder = listBoltOrder.filter(boltOrder => {
        if (boltOrder.id) {
          return String(boltOrder.id).includes(name_find);
        }
      });
    }
    console.log(dataBoltOrder);
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
            <p>List đặt hàng bulong</p>
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
                  onchangeInput={this.findListBolt}
                />
                <Button iconButton={icons.icon_search} />
              </div>
              <button className="add">
                <img src={icons.icon_plus} alt="add" />
              </button>
              {checkedItems.length > 0 ? (
                <Button
                  iconButton={icons.icon_delete}
                  onClickButton={this.handleDelBolt}
                />
              ) : null}
            </div>
          </div>
          <div className="tableBody">
            <div className="tableCheckbox">
              {dataBoltOrder.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataBoltOrder.map(steelShape => {
                      return (
                        <tr>
                          <td key={steelShape.id}>
                            <Input
                              typeInput="checkbox"
                              nameInput={steelShape.id.toString()}
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
            <Table dataColumn={dataColumn} dataRow={dataBoltOrder} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getBoltOrder: data => dispatch(getBoltOrder(data)),
  findBoltOrder: data => dispatch(findBoltOrder(data)),
  delBoltOrder: data => dispatch(delBoltOrder(data))
});

const mapStateToProps = state => ({
  isLoading: state.orderReducer.isLoading,
  error: state.orderReducer.error,
  success: state.orderReducer.success,
  listBoltOrder: state.orderReducer.listBoltOrder
});
export default connect(mapStateToProps, mapDispatchToProps)(ListOrderBolts);
