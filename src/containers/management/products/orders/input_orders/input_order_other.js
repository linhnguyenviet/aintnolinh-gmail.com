import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import Input from "../../../../../components/common/input";
import Select from "../../../../../components/common/select";
import ActionButtons from "../../../../../components/action-buttons";
import Button from "../../../../../components/common/button";
import icons from "../../../../../constants/icons";
import { connect } from "react-redux";
import { getParameterConstruction } from "../../../../../actions/parameter";
import { postOtherOrder } from "../../../../../actions/order";

class InputOrderOther extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listParameterCongTrinh: [],
      listParameterKhu: [],
      listParameterNoiMua: [],
      listParameterNoiNhap: [],
      listParameterOther: [],
      constructions_part: "",
      steel_part: "",
      area: "",
      type: "",
      name: "",
      material: "",
      size_pd: "",
      weight_unit: "",
      quantity: "",
      weight: "",
      manufacturer: "",
      place_purchases: "",
      place_order_product: "",
      date_order: "",
      date_request_coming: "",
      price: "",
      total_money: "",
      note1: "",
      note2: "",
      dataColumn: [
        { name: "Bộ Phận Công Trình", value: "constructions_part" },
        { name: "Bộ Phận Thép", value: "steel_part" },
        { name: "Khu", value: "area" },
        { name: "Loại", value: "type" },
        { name: "Tên", value: "name" },
        { name: "Chất Liệu", value: "material" },
        { name: "Kích Thước", value: "size_pd" },
        { name: "Trọng Lượng Đơn Vị", value: "weight_unit" },
        { name: "Số Lượng", value: "quantity" },
        { name: "Trọng Lượng", value: "weight" },
        { name: "Hãng Sản Xuất", value: "manufacturer" },
        { name: "Nơi Mua Hàng", value: "place_purchases" },
        { name: "Nơi Nhập Hàng", value: "place_order_product" },
        { name: "Ngày Mua Hàng", value: "date_order" },
        { name: "Ngày Yêu Cầu Hàng Tới", value: "date_request_coming" },
        { name: "Đơn Giá", value: "price" },
        { name: "Tổng Tiền", value: "total_money" },
        { name: "Ghi Chú 1", value: "note1" },
        { name: "Ghi Chú 2", value: "note2" }
      ],
      name_find: "",
      successNoti: true
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.findOrder = this.findOrder.bind(this);
  }

  async componentDidMount() {
    const listParameterCongTrinh = [...this.state.listParameterCongTrinh];
    const listParameterKhu = [...this.state.listParameterKhu];
    const listParameterNoiMua = [...this.state.listParameterNoiMua];
    const listParameterNoiNhap = [...this.state.listParameterNoiNhap];
    const listParameterOther = [...this.state.listParameterOther];
    const { listAllParameter } = this.props;
    setTimeout(() => { this.setState({ successNoti: false }) }, 3000);
    listAllParameter.map(parameter => {
      switch (parameter.id_type_parameter) {
        case 1:
          listParameterCongTrinh.push(parameter);
          this.setState({ listParameterCongTrinh });
          break;
        case 2:
          listParameterKhu.push(parameter);
          this.setState({ listParameterKhu });
          break;
        case 11:
          listParameterNoiMua.push(parameter);
          this.setState({ listParameterNoiMua });
          break;
        case 12:
          listParameterNoiNhap.push(parameter);
          this.setState({ listParameterNoiNhap });
          break;
        default:
          listParameterOther.push(parameter);
          this.setState({ listParameterOther });
          break;
      }
      return 1;
    });
    this.setState({
      constructions_part:
        listParameterCongTrinh.length > 0 ? listParameterCongTrinh[0].name : "",
      steel_part:
        this.props.listSteelPart.length > 0
          ? this.props.listSteelPart[0].name
          : "",
      area: listParameterKhu.length > 0 ? listParameterKhu[0].name : "",
      name: "",
      type:
        this.props.listInitType.length > 0
          ? this.props.listInitType[0].name
          : "",
      material:
        this.props.listInitMaterial.length > 0
          ? this.props.listInitMaterial[0].name
          : "",
      size_pd:
        this.props.listInitSize.length > 0
          ? this.props.listInitSize[0].name
          : "",
      weight_unit: "",
      quantity: "",
      weight: "",
      manufacturer:
        this.props.listInitProducerSearch.length > 0
          ? this.props.listInitProducerSearch[0].name
          : "",
      place_purchases:
        listParameterNoiMua.length > 0 ? listParameterNoiMua[0].name : "",
      place_order_product:
        listParameterNoiNhap.length > 0 ? listParameterNoiNhap[0].name : "",
      date_order: "",
      date_request_coming: "",
      price: "",
      total_money: "",
      note1: "",
      note2: ""
    });
  }

  handleSelect = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleClickOk = () => {
    const {
      constructions_part,
      steel_part,
      area,
      type,
      name,
      material,
      size_pd,
      weight_unit,
      quantity,
      weight,
      manufacturer,
      place_purchases,
      place_order_product,
      date_order,
      date_request_coming,
      price,
      total_money,
      note1,
      note2
    } = this.state;
    this.props.postOtherOrder({
      id_constructions: Number(this.props.id_constructions),
      id_pd_steel_part: Number(
        this.getId(this.props.listSteelPart, steel_part)
      ),
      constructions_part,
      area,
      type,
      name,
      material,
      size_pd,
      weight_unit: Number(weight_unit),
      quantity: Number(quantity),
      weight: Number(weight),
      manufacturer,
      place_purchases,
      place_order_product,
      date_order,
      date_request_coming,
      price: Number(price),
      total_money: Number(total_money),
      note1,
      note2
    });
  };
  getId(arrData, value) {
    var id = "";
    arrData.map(data => {
      if (data.name === value || data.username === value) {
        id = data.id;
      }
      return id;
    });
    return id;
  }
  handleClickClear = () => {
    const {
      listParameterCongTrinh,
      listParameterKhu,
      listParameterNoiMua,
      listParameterNoiNhap
    } = this.state;
    this.setState({
      constructions_part:
        listParameterCongTrinh.length > 0 ? listParameterCongTrinh[0].name : "",
      steel_part:
        this.props.listSteelPart.length > 0
          ? this.props.listSteelPart[0].name
          : "",
      area: listParameterKhu.length > 0 ? listParameterKhu[0].name : "",
      name: "",
      type:
        this.props.listInitType.length > 0
          ? this.props.listInitType[0].name
          : "",
      material:
        this.props.listInitMaterial.length > 0
          ? this.props.listInitMaterial[0].name
          : "",
      size_pd:
        this.props.listInitSize.length > 0
          ? this.props.listInitSize[0].name
          : "",
      weight_unit: "",
      quantity: "",
      weight: "",
      manufacturer:
        this.props.listInitProducerSearch.length > 0
          ? this.props.listInitProducerSearch[0].name
          : "",
      place_purchases:
        listParameterNoiMua.length > 0 ? listParameterNoiMua[0].name : "",
      place_order_product:
        listParameterNoiNhap.length > 0 ? listParameterNoiNhap[0].name : "",
      date_order: "",
      date_request_coming: "",
      price: "",
      total_money: "",
      note1: "",
      note2: ""
    });
  };

  findOrder(event) {
    const name_find = event.target.value;
    this.setState({
      name_find: name_find
    });
  }

  render() {
    const {
      listSteelPart,
      listInitType,
      listInitMaterial,
      listInitSize,
      listInitProducerSearch,
      listOtherOrderPost
    } = this.props;
    const {
      listParameterCongTrinh,
      listParameterKhu,
      listParameterNoiMua,
      listParameterNoiNhap,
      dataColumn,
      name_find
    } = this.state;
    const lowerCaseNameFind = name_find.toLowerCase();
    const dataOtherOrder = listOtherOrderPost.filter(
      otherOrder => {
        if (otherOrder.name) {
          return otherOrder.name.toLowerCase().includes(lowerCaseNameFind);
        }
      }
    );
    return (
      <>
        <div className="action-center">
          <p>List đặt hàng bulong</p>
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
                onchangeInput={this.findOrder}
              />
              <Button iconButton={icons.icon_search} />
            </div>
            <button className="add">
              <img src={icons.icon_plus} alt="add" />
            </button>
          </div>
        </div>
        <div className="order-content">
          <Table dataColumn={dataColumn} dataRow={dataOtherOrder} />
          <div className="right-menu">
            <div className="right-menu-header">
              <button>Excel Import</button>
              <button> &#60; Nhập liên tục</button>
            </div>
            <ul>
              <li>
                <span>{dataColumn[0].name}</span>
                <Select
                  nameSelect="constructions_part"
                  dataOption={listParameterCongTrinh}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[1].name}</span>
                <Select
                  nameSelect="steel_part"
                  dataOption={listSteelPart}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[2].name}</span>
                <Select
                  nameSelect="area"
                  dataOption={listParameterKhu}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[3].name}</span>
                <Select
                  nameSelect="type"
                  dataOption={listInitType}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[4].name}</span>
                <Input
                  typeInput="text"
                  nameInput="name"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[5].name}</span>
                <Select
                  nameSelect="material"
                  dataOption={listInitMaterial}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[6].name}</span>
                <Select
                  nameSelect="size_pd"
                  dataOption={listInitSize}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[7].name}</span>
                <Input
                  typeInput="text"
                  nameInput="weight_unit"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[8].name}</span>
                <Input
                  typeInput="text"
                  nameInput="quantity"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[9].name}</span>
                <Input
                  typeInput="text"
                  nameInput="weight"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[10].name}</span>
                <Select
                  nameSelect="manufacturer"
                  dataOption={listInitProducerSearch}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[11].name}</span>
                <Select
                  nameSelect="place_purchases"
                  dataOption={listParameterNoiMua}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[12].name}</span>
                <Select
                  nameSelect="place_order_product"
                  dataOption={listParameterNoiNhap}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[13].name}</span>
                <Input
                  typeInput="date"
                  nameInput="date_order"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[14].name}</span>
                <Input
                  typeInput="date"
                  nameInput="date_request_coming"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[15].name}</span>
                <Input
                  typeInput="text"
                  nameInput="price"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[16].name}</span>
                <Input
                  typeInput="text"
                  nameInput="total_money"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[17].name}</span>
                <Input
                  typeInput="text"
                  nameInput="note1"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[18].name}</span>
                <Input
                  typeInput="text"
                  nameInput="note2"
                  onchangeInput={this.handleSelect}
                />
              </li>
            </ul>
            <div className="right-menu-footer">
              <button onClick={this.handleClickOk}>Okay</button>
              <button onClick={this.handleClickClear}>Clear</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getParameterConstruction: data => dispatch(getParameterConstruction(data)),
  postOtherOrder: other => dispatch(postOtherOrder(other))

});

const mapStateToProps = state => ({
  isLoading: state.orderReducer.isLoading,
  error: state.orderReducer.error,
  success: state.orderReducer.success,
  listAllParameter: state.orderReducer.listAllParameter,
  listSteelPart: state.orderReducer.listSteelPart,
  listInitType: state.orderReducer.listInitType,
  listInitMaterial: state.orderReducer.listInitMaterial,
  listInitSize: state.orderReducer.listInitSize,
  listInitProducerSearch: state.orderReducer.listInitProducerSearch,
  listParameter: state.parameterReducer.listParameter,
  listOtherOrderPost: state.orderReducer.listOtherOrderPost
});
export default connect(mapStateToProps, mapDispatchToProps)(InputOrderOther);
