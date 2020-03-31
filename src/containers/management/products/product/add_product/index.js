import React, { Component } from "react";
import "./style.scss";
import Modal from "react-modal";
import Table from "../../../../../components/common/table";
import ImportExcelModal from "../../../../../components/functional_modals/import_excel_modals";
import Input from "../../../../../components/common/input";
import Select from "../../../../../components/common/select";
import ActionButtons from "../../../../../components/action-buttons";
import icons from "../../../../../constants/icons";
import Button from "../../../../../components/common/button";
import { connect } from "react-redux";
import { getParameterConstruction } from "../../../../../actions/parameter";
import { postProductInput } from "../../../../../actions/product";

class AddProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listParameterCongTrinh: [],
      listParameterKhu: [],
      listParameterDot: [],
      listParameterTang: [],
      listParameterBanNoi: [],
      listParameterDoXien: [],
      listParameterChiThiSon: [],
      listParameterGiaCongTho: [],
      listParameterGiaCongThanhPham: [],
      listParameterOther: [],
      id_constructions: "",
      constructions_part: "",
      id_pd_steel_part: "",
      pd_steel_part: "",
      area: "",
      burning: "",
      layer: "",
      type: "",
      name: "",
      material: "",
      size_pd: "",
      weight_unit: "",
      width: "",
      quantity: "",
      weight: "",
      place_roughing: "",
      place_machining_done: "",
      welding_length: "",
      surface_area: "",
      left_connector: "",
      right_connector: "",
      left_slant_bar: "",
      right_slant_bar: "",
      paint_directive: "",
      drawing_number: "",
      note1: "",
      note2: "",
      create_at: "",
      update_at: "",
      dataColumn: [
        { name: "Bộ phận công trình", value: "constructions_part" },
        { name: "Bộ phận thép", value: "pd_steel_part" },
        { name: "Khu", value: "area" },
        { name: "Đốt", value: "burning" },
        { name: "Tầng", value: "layer" },
        { name: "Loại", value: "type" },
        { name: "Tên", value: "name" },
        { name: "Chất liệu", value: "material" },
        { name: "Kích thước", value: "size_pd" },
        { name: "Trọng lượng đơn vị", value: "weight_unit" },
        { name: "Chiều dài", value: "width" },
        { name: "Số lượng", value: "quantity" },
        { name: "Trọng lượng", value: "weight" },
        { name: "Nơi gia công thô", value: "place_roughing" },
        { name: "Nơi gia công thành phẩm", value: "place_machining_done" },
        { name: "Chiều dài hàn", value: "welding_length" },
        { name: "Diện tích bề mặt", value: "surface_area" },
        { name: "Bản nối trái", value: "left_connector" },
        { name: "Bản nối phải", value: "right_connector" },
        { name: "Đỡ xiên trái", value: "left_slant_bar" },
        { name: "Đỡ xiên phải", value: "right_slant_bar" },
        { name: "Chỉ thị sơn", value: "paint_directive" },
        { name: "Số hiệu bản vẽ", value: "drawing_number" },
        { name: "Ghi Chú 1", value: "note1" },
        { name: "Ghi Chú 2", value: "note2" }
      ],
      dataRow: [],
      successNoti: true
    };
    this.openImportExcelModal = this.openImportExcelModal.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openImportExcelModal() {
    this.setState({ modalExcelImportIsOpen: true });
  }
  closeModal() {
    this.setState({ modalExcelImportIsOpen: false });
  }
  async componentDidMount() {
    const listParameterCongTrinh = [...this.state.listParameterCongTrinh];
    const listParameterKhu = [...this.state.listParameterKhu];
    const listParameterDot = [...this.state.listParameterDot];
    const listParameterTang = [...this.state.listParameterTang];
    const listParameterBanNoi = [...this.state.listParameterBanNoi];
    const listParameterDoXien = [...this.state.listParameterDoXien];
    const listParameterChiThiSon = [...this.state.listParameterChiThiSon];
    const listParameterGiaCongTho = [...this.state.listParameterGiaCongTho];
    const listParameterGiaCongThanhPham = [
      ...this.state.listParameterGiaCongThanhPham
    ];
    const listParameterOther = [...this.state.listParameterOther];
    const { listAllParameter } = this.props;
    setTimeout(() => {
      this.setState({ successNoti: false });
    }, 3000);

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
        case 3:
          listParameterDot.push(parameter);
          this.setState({ listParameterDot });
          break;
        case 4:
          listParameterTang.push(parameter);
          this.setState({ listParameterTang });
          break;
        case 8:
          listParameterGiaCongTho.push(parameter);
          this.setState({ listParameterGiaCongTho });
          break;
        case 9:
          listParameterGiaCongThanhPham.push(parameter);
          this.setState({ listParameterGiaCongThanhPham });
          break;
        case 5:
          listParameterBanNoi.push(parameter);
          this.setState({ listParameterBanNoi });
          break;
        case 6:
          listParameterDoXien.push(parameter);
          this.setState({ listParameterDoXien });
          break;
        case 7:
          listParameterChiThiSon.push(parameter);
          this.setState({ listParameterChiThiSon });
          break;
        default:
          listParameterOther.push(parameter);
          this.setState({ listParameterOther });
          break;
      }
      return 1;
    });
    this.setState({
      id_constructions: this.props.id_constructions,
      constructions_part:
        listParameterCongTrinh.length > 0 ? listParameterCongTrinh[0].name : "",
      id_pd_steel_part:
        this.props.listSteelPart.length > 0
          ? this.props.listSteelPart[0].id
          : "",
      pd_steel_part:
        this.props.listSteelPart.length > 0
          ? this.props.listSteelPart[0].name
          : "",
      area: listParameterKhu.length > 0 ? listParameterKhu[0].name : "",
      burning: listParameterDot.length > 0 ? listParameterDot[0].name : "",
      layer: listParameterTang.length > 0 ? listParameterTang[0].name : "",
      type:
        this.props.listInitType.length > 0
          ? this.props.listInitType[0].name
          : "",
      name: "",
      material:
        this.props.listInitMaterial.length > 0
          ? this.props.listInitMaterial[0].name
          : "",
      size_pd:
        this.props.listInitSize.length > 0
          ? this.props.listInitSize[0].name
          : "",
      weight_unit: "",
      width: "",
      quantity: "",
      weight: "",
      place_roughing:
        listParameterGiaCongTho.length > 0
          ? listParameterGiaCongTho[0].name
          : "",
      place_machining_done:
        listParameterGiaCongThanhPham.length > 0
          ? listParameterGiaCongThanhPham[0].name
          : "",
      welding_length: "",
      surface_area: "",
      left_connector:
        listParameterBanNoi.length > 0 ? listParameterBanNoi[0].name : "",
      right_connector:
        listParameterBanNoi.length > 0 ? listParameterBanNoi[0].name : "",
      left_slant_bar:
        listParameterDoXien.length > 0 ? listParameterDoXien[0].name : "",
      right_slant_bar:
        listParameterDoXien.length > 0 ? listParameterDoXien[0].name : "",
      paint_directive:
        listParameterChiThiSon.length > 0 ? listParameterChiThiSon[0].name : "",
      drawing_number: "",
      note1: "",
      note2: ""
    });
  }
  handleSelect = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
    if (name === "pd_steel_part") {
      const { listSteelPart } = this.props;
      listSteelPart.map(steel => {
        if (steel.name === value) {
          this.setState({
            id_pd_steel_part: steel.id
          });
        }
        return this.state;
      });
    }
  };
  handleClickOk = () => {
    const {
      id_constructions,
      id_pd_steel_part,
      constructions_part,
      area,
      burning,
      layer,
      type,
      name,
      material,
      size_pd,
      weight_unit,
      width,
      quantity,
      weight,
      place_roughing,
      place_machining_done,
      welding_length,
      surface_area,
      left_connector,
      right_connector,
      left_slant_bar,
      right_slant_bar,
      paint_directive,
      drawing_number,
      note1,
      note2
    } = this.state;
    this.props.postProductInput({
      id_constructions,
      constructions_part,
      id_pd_steel_part,
      area,
      burning,
      layer,
      type,
      name,
      material,
      size_pd,
      weight_unit,
      width,
      quantity,
      weight,
      place_roughing,
      place_machining_done,
      welding_length,
      surface_area,
      left_connector,
      right_connector,
      left_slant_bar,
      right_slant_bar,
      paint_directive,
      drawing_number,
      note1,
      note2,
      create_at: Date,
      update_at: Date
    });
  };
  render() {
    const {
      listSteelPart,
      listInitType,
      listInitMaterial,
      listInitSize,
      listProductInputPost
    } = this.props;
    const {
      listParameterCongTrinh,
      listParameterKhu,
      listParameterDot,
      listParameterTang,
      listParameterBanNoi,
      listParameterDoXien,
      listParameterChiThiSon,
      listParameterGiaCongTho,
      listParameterGiaCongThanhPham,
      dataColumn
      // dataRow
    } = this.state;
    return (
      <>
        <div className="action-center">
          <p>Nhập sản phẩm</p>
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
            <form className="search">
              <Input typeInput="text" placeholderInput="Search" />
              <Button iconButton={icons.icon_search} />
            </form>
            <Button classNameButton="add" iconButton={icons.icon_plus} />
          </div>
        </div>
        <div className="product-content">
          <Table dataColumn={dataColumn} dataRow={listProductInputPost} />
          <div className="right-menu">
            <div className="right-menu-header">
              <Button
                titleButton="Excel Import"
                onClickButton={this.openImportExcelModal}
              />
              <Button titleButton="&#60; Nhập liên tục" />
            </div>
            <Modal
              isOpen={this.state.modalExcelImportIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={{ content: { padding: 0 } }}
            >
              <ImportExcelModal closeModal={this.closeModal} />
            </Modal>
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
                  nameSelect="pd_steel_part"
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
                  nameSelect="burning"
                  dataOption={listParameterDot}
                  onChangeSelect={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[4].name}</span>
                <Select
                  nameSelect="layer"
                  onChangeSelect={this.handleSelect}
                  dataOption={listParameterTang}
                />
              </li>
              <li>
                <span>{dataColumn[5].name}</span>
                <Select
                  nameSelect="type"
                  onChangeSelect={this.handleSelect}
                  dataOption={listInitType}
                />
              </li>
              <li>
                <span>{dataColumn[6].name}</span>
                <Input
                  typeInput="text"
                  nameInput="name"
                  placeholderInput="Tên một sản phẩm"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[7].name}</span>
                <Select
                  nameSelect="material"
                  onChangeSelect={this.handleSelect}
                  dataOption={listInitMaterial}
                />
              </li>
              <li>
                <span>{dataColumn[8].name}</span>
                <Select
                  nameSelect="size_pd"
                  onChangeSelect={this.handleSelect}
                  dataOption={listInitSize}
                />
              </li>
              <li>
                <span>{dataColumn[9].name}</span>
                <Input
                  nameInput="weight_unit"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[10].name}</span>
                <Input
                  nameInput="width"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[11].name}</span>
                <Input
                  nameInput="quantity"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[12].name}</span>
                <Input
                  nameInput="weight"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[13].name}</span>
                <Select
                  nameSelect="place_roughing"
                  onChangeSelect={this.handleSelect}
                  dataOption={listParameterGiaCongTho}
                />
              </li>
              <li>
                <span>{dataColumn[14].name}</span>
                <Select
                  nameSelect="place_machining_done"
                  onChangeSelect={this.handleSelect}
                  dataOption={listParameterGiaCongThanhPham}
                />
              </li>
              <li>
                <span>{dataColumn[15].name}</span>
                <Input
                  nameInput="welding_length"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[16].name}</span>
                <Input
                  nameInput="surface_area"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[17].name}</span>
                <Select
                  nameSelect="left_connector"
                  onChangeSelect={this.handleSelect}
                  dataOption={listParameterBanNoi}
                />
              </li>
              <li>
                <span>{dataColumn[18].name}</span>
                <Select
                  nameSelect="right_connector"
                  onChangeSelect={this.handleSelect}
                  dataOption={listParameterBanNoi}
                />
              </li>
              <li>
                <span>{dataColumn[19].name}</span>
                <Select
                  nameSelect="left_slant_bar"
                  onChangeSelect={this.handleSelect}
                  dataOption={listParameterDoXien}
                />
              </li>
              <li>
                <span>{dataColumn[20].name}</span>
                <Select
                  nameSelect="right_slant_bar"
                  onChangeSelect={this.handleSelect}
                  dataOption={listParameterDoXien}
                />
              </li>
              <li>
                <span>{dataColumn[21].name}</span>
                <Select
                  nameSelect="paint_directive"
                  onChangeSelect={this.handleSelect}
                  dataOption={listParameterChiThiSon}
                />
              </li>
              <li>
                <span>{dataColumn[22].name}</span>
                <Input
                  nameInput="drawing_number"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[23].name}</span>
                <Input
                  nameInput="note1"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
              <li>
                <span>{dataColumn[24].name}</span>
                <Input
                  nameInput="note2"
                  typeInput="text"
                  onchangeInput={this.handleSelect}
                />
              </li>
            </ul>
            <div className="right-menu-footer">
              <Button titleButton="Okay" onClickButton={this.handleClickOk} />
              <Button titleButton="Clear" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getParameterConstruction: data => dispatch(getParameterConstruction(data)),
  postProductInput: product => dispatch(postProductInput(product))
});

const mapStateToProps = state => ({
  isLoading: state.orderReducer.error,
  error: state.orderReducer.error,
  success: state.orderReducer.success,
  listAllParameter: state.orderReducer.listAllParameter,
  listSteelPart: state.orderReducer.listSteelPart,
  listInitType: state.orderReducer.listInitType,
  listInitMaterial: state.orderReducer.listInitMaterial,
  listInitSize: state.orderReducer.listInitSize,
  listProductInputPost: state.productReducer.listProductInputPost
});
export default connect(mapStateToProps, mapDispatchToProps)(AddProductScreen);
