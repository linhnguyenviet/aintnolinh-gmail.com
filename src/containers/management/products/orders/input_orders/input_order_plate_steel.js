import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import Input from "../../../../../components/common/input";
import Select from "../../../../../components/common/select";
import ActionButtons from "../../../../../components/action-buttons";
import Button from "../../../../../components/common/button";
import icons from "../../../../../constants/icons";
import { connect } from "react-redux";
import { getParameterConstruction } from "../../../../../actions/parameter";
import { postSteelSheetOrder } from "../../../../../actions/order";


class InputOrderPlateSteel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listParameterCongTrinh: [],
      listParameterKhu: [],
      listParameterNoiMua: [],
      listParameterNoiNhap: [],
      listParameterGiaCongTho: [],
      listParameterGiaCongThanhPham: [],
      listParameterOther: [],
      constructions_part: "",
      steel_part: "",
      area: "",
      type: "",
      name: "",
      material: "",
      thick: "",
      weight_unit: "",
      x: "",
      y: "",
      quantity_sheet: "",
      weight: "",
      shape_hole: "",
      number_hole: "",
      manufacturer: "",
      place_purchases: "",
      place_order_product: "",
      place_roughing: "",
      place_machining_done: "",
      date_order: "",
      date_request_coming: "",
      price_roughing: "",
      price_machining_done: "",
      giaGiaCong: "",
      note1: "",
      note2: "",
      dataColumn: [
        { name: "Bộ Phận Công Trình", value: "constructions_part" },
        { name: "Bộ Phận Thép", value: "steel_part" },
        { name: "Khu", value: "area" },
        { name: "Loại", value: "type" },
        { name: "Tên", value: "name" },
        { name: "Chất Liệu", value: "material" },
        { name: "Chiều Dày Thước", value: "thick" },
        { name: "Trọng Lượng Đơn Vị", value: "weight_unit" },
        { name: "x", value: "x" },
        { name: "y", value: "y" },
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
        { name: "Giá Gia Công", value: "giaGiaCong" },
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
    const listParameterGiaCongTho = [...this.state.listParameterGiaCongTho];
    const listParameterGiaCongThanhPham = [
      ...this.state.listParameterGiaCongThanhPham
    ];
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
        case 8:
          listParameterGiaCongTho.push(parameter);
          this.setState({ listParameterGiaCongTho });
          break;
        case 9:
          listParameterGiaCongThanhPham.push(parameter);
          this.setState({ listParameterGiaCongThanhPham });
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
      type:
        this.props.listInitType.length > 0
          ? this.props.listInitType[0].name
          : "",
      name: "",
      material:
        this.props.listInitMaterial.length > 0
          ? this.props.listInitMaterial[0].name
          : "",
      thick: "",
      weight_unit: "",
      x: "",
      y: "",
      quantity_sheet: "",
      weight: "",
      shape_hole: "",
      number_hole: "",
      manufacturer:
        this.props.listInitProducerSearch.length > 0
          ? this.props.listInitProducerSearch[0].name
          : "",
      place_purchases:
        listParameterNoiMua.length > 0 ? listParameterNoiMua[0].name : "",
      place_order_product:
        listParameterNoiNhap.length > 0 ? listParameterNoiNhap[0].name : "",
      place_roughing:
        listParameterGiaCongTho.length > 0
          ? listParameterGiaCongTho[0].name
          : "",
      place_machining_done:
        listParameterGiaCongThanhPham.length > 0
          ? listParameterGiaCongThanhPham[0].name
          : "",
      date_order: "",
      date_request_coming: "",
      price_roughing: "",
      price_machining_done: "",
      giaGiaCong: "",
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
      thick,
      weight_unit,
      x,
      y,
      quantity_sheet,
      weight,
      shape_hole,
      number_hole,
      manufacturer,
      place_purchases,
      place_order_product,
      place_roughing,
      place_machining_done,
      date_order,
      date_request_coming,
      price_roughing,
      price_machining_done,
      giaGiaCong,
      note1,
      note2
    } = this.state;
    this.props.postSteelSheetOrder({
      id_constructions: Number(this.props.id_constructions),
      constructions_part,
      id_pd_steel_part: Number(this.getId(this.props.listSteelPart, steel_part)),
      // khu,
      type,
      name,
      material,
      thick,
      weight_unit,
      x,
      y,
      quantity_sheet,
      weight,
      shape_hole,
      number_hole,
      manufacturer,
      place_purchases,
      place_order_product,
      place_roughing,
      place_machining_done,
      date_order,
      date_request_coming,
      price_roughing,
      price_machining_done,
      // giaGiaCong,
      note1,
      note2
    })
  };

  handleClickClear = () => {
    const {
      listParameterCongTrinh,
      listParameterKhu,
      listParameterNoiMua,
      listParameterNoiNhap,
      listParameterGiaCongTho,
      listParameterGiaCongThanhPham
    } = this.state;
    this.setState({
      constructions_part:
        listParameterCongTrinh.length > 0 ? listParameterCongTrinh[0].name : "",
      steel_part:
        this.props.listSteelPart.length > 0
          ? this.props.listSteelPart[0].name
          : "",
      khu: listParameterKhu.length > 0 ? listParameterKhu[0].name : "",
      type:
        this.props.listInitType.length > 0
          ? this.props.listInitType[0].name
          : "",
      name: "",
      material:
        this.props.listInitMaterial.length > 0
          ? this.props.listInitMaterial[0].name
          : "",
      thick: "",
      weight_unit: "",
      x: "",
      y: "",
      quantity_sheet: "",
      weight: "",
      shape_hole: "",
      number_hole: "",
      manufacturer:
        this.props.listInitProducerSearch.length > 0
          ? this.props.listInitProducerSearch[0].name
          : "",
      place_purchases:
        listParameterNoiMua.length > 0 ? listParameterNoiMua[0].name : "",
      place_order_product:
        listParameterNoiNhap.length > 0 ? listParameterNoiNhap[0].name : "",
      place_roughing:
        listParameterGiaCongTho.length > 0
          ? listParameterGiaCongTho[0].name
          : "",
      place_machining_done:
        listParameterGiaCongThanhPham.length > 0
          ? listParameterGiaCongThanhPham[0].name
          : "",
      date_order: "",
      date_request_coming: "",
      price_roughing: "",
      price_machining_done: "",
      giaGiaCong: "",
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

  render() {
    const {
      listSteelPart,
      listInitType,
      listInitMaterial,
      listInitProducerSearch,
      listSteelSheetOrderPost
    } = this.props;
    const {
      listParameterCongTrinh,
      listParameterKhu,
      listParameterNoiMua,
      listParameterNoiNhap,
      listParameterGiaCongTho,
      listParameterGiaCongThanhPham,
      dataColumn,
      name_find
    } = this.state;
    const lowerCaseNameFind = name_find.toLowerCase();
    const dataSteelSheetOrder = listSteelSheetOrderPost.filter(
      steelSheetOrder => {
        if (steelSheetOrder.name) {
          return steelSheetOrder.name.toLowerCase().includes(lowerCaseNameFind);
        }
      }
    );
    return (
      <>
        <div className="action-center">
          <p>List đặt hàng thép tấm</p>
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
          <Table dataColumn={dataColumn} dataRow={dataSteelSheetOrder} />
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
                  nameSelect="khu"
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
                <Input
                  typeInput="text"
                  nameInput="thick"
                  onchangeInput={this.handleSelect}
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
                  nameInput="x"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[9].name}</span>
                <Input
                  typeInput="text"
                  nameInput="y"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[10].name}</span>
                <Input
                  typeInput="text"
                  nameInput="quantity_sheet"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[11].name}</span>
                <Input
                  typeInput="text"
                  nameInput="weight"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[12].name}</span>
                <Input
                  typeInput="text"
                  nameInput="shape_hole"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[13].name}</span>
                <Input
                  typeInput="text"
                  nameInput="number_hole"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[14].name}</span>
                <Select
                  nameSelect="manufacturer"
                  dataOption={listInitProducerSearch}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[15].name}</span>
                <Select
                  nameSelect="place_purchases"
                  dataOption={listParameterNoiMua}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[16].name}</span>
                <Select
                  nameSelect="noiNhapHang"
                  dataOption={listParameterNoiNhap}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[17].name}</span>
                <Select
                  nameSelect="place_roughing"
                  dataOption={listParameterGiaCongTho}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[18].name}</span>
                <Select
                  nameSelect="place_machining_done"
                  dataOption={listParameterGiaCongThanhPham}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[19].name}</span>
                <Input
                  typeInput="date"
                  nameInput="date_order"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[20].name}</span>
                <Input
                  typeInput="date"
                  nameInput="date_request_coming"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[21].name}</span>
                <Input
                  typeInput="text"
                  nameInput="price_roughing"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[22].name}</span>
                <Input
                  typeInput="text"
                  nameInput="price_machining_done"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[23].name}</span>
                <Input
                  typeInput="text"
                  nameInput="giaGiaCong"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[24].name}</span>
                <Input
                  typeInput="text"
                  nameInput="note1"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[25].name}</span>
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
  postSteelSheetOrder: steelSheet => dispatch(postSteelSheetOrder(steelSheet))
});

const mapStateToProps = state => ({
  isLoading: state.orderReducer.isLoading,
  error: state.orderReducer.error,
  success: state.orderReducer.success,
  listAllParameter: state.orderReducer.listAllParameter,
  listSteelPart: state.orderReducer.listSteelPart,
  listInitType: state.orderReducer.listInitType,
  listInitMaterial: state.orderReducer.listInitMaterial,
  listInitProducerSearch: state.orderReducer.listInitProducerSearch,
  listParameter: state.parameterReducer.listParameter,
  listSteelSheetOrderPost: state.orderReducer.listSteelSheetOrderPost
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputOrderPlateSteel);
