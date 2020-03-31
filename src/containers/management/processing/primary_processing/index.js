import React, { Component } from "react";
import Input from "../../../../components/common/input";
import Button from "../../../../components/common/button";
import "./style.scss";
import Modal from "react-modal";
import LabelComponent from "../../../../components/common/labels";
import images from "../../../../constants/images";
import ActionButtons from "../../../../components/action-buttons";
import icons from "../../../../constants/icons";
import SetupDisplayListModal from "../../../../components/functional_modals/setup_display_list_modal";
import { connect } from "react-redux";
import {
  getInfoProductBarcode,
  getStageRoughingProcess
} from "../../../../actions/process";

var suggest = [];
class PrimaryProcessing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      dataBarCodeSuggest: [],
      dataInfoProductBarcode: {},
      valueInput: "",
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
      isOpen: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputCode = this.handleInputCode.bind(this);
    // this.handleChooseSuggest = this.handleChooseSuggest.bind(this);
    this.handleEnterInputCode = this.handleEnterInputCode.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleInputCode(e) {
    const valueInput = e.target.value;
    this.setState({
      valueInput: valueInput
    });
  }
  // handleChooseSuggest(e) {
  //   const value = e.target.innerHTML;
  //   this.setState({ valueInput: value });
  //   suggest = [];
  //   const { id_constructions } = this.props;
  //   this.props.getInfoProductBarcode({
  //     barcode: value
  //   });
  //   this.props.getStageRoughingProcess({
  //     id_constructions: id_constructions,
  //     barcode: value
  //   });
  //   this.setState({
  //     isOpen: false
  //   })
  // }
  handleEnterInputCode(event) {
    if (
      event.keyCode === 13 ||
      event.key === "Enter" ||
      event.key === "Return"
    ) {
      const nameCode = event.target.value;
      // const { dataBarCodeSuggest } = this.state;
      // const checkNameCode = dataBarCodeSuggest.filter(
      //   data => data.toLowerCase().indexOf(nameCode.toLowerCase()) !== -1
      // );
      if (nameCode.length !== 0) {
        const { id_constructions } = this.props;
        this.props.getInfoProductBarcode({
          barcode: nameCode
        });
        this.props.getStageRoughingProcess({
          id_constructions: id_constructions,
          barcode: nameCode
        });
      } else {
        alert("Mã code không đúng hoặc không tồn tại");
      }
    }
    this.setState({
      isOpen: true
    })
  }
  componentWillReceiveProps(nextProps) {
    const { listInfoProductBarcode } = this.props;
    if (nextProps.listInfoProductBarcode !== listInfoProductBarcode) {
      this.setState({
        dataInfoProductBarcode: nextProps.listInfoProductBarcode
      });
    }
  }
  render() {
    const { valueInput, dataColumn } = this.state;
    const dataInfoProductBarcode = { ...this.state.dataInfoProductBarcode };
    const { listProductRoughing } = this.props;
    var dataInfoCode = {};
    Object.keys(dataInfoProductBarcode).forEach(key => {
      if (dataInfoProductBarcode[key]) {
        dataInfoCode = { ...dataInfoProductBarcode[key] }
      }
    })


    // if (valueInput !== "") {
    //   suggest = dataBarCodeSuggest.filter(
    //     data => data.toLowerCase().indexOf(valueInput.toLowerCase()) !== -1
    //   );
    //   const barcode = valueInput.split("_")[0];
    //   console.log(dataInfoProductBarcode);
    //   if (
    //     Object.keys(dataInfoProductBarcode).length > 0 &&
    //     dataInfoProductBarcode !== null
    //   ) {
    //     switch (barcode) {
    //       case "DCU":
    //         dataInfoCode = { ...dataInfoProductBarcode.components_main_girder };
    //         break;
    //       case "KMT":
    //         dataInfoCode = { ...dataInfoProductBarcode.components_column };
    //         break;
    //       case "CCT":
    //         dataInfoCode = { ...dataInfoProductBarcode.product };
    //         break;
    //       case "DAT":
    //         dataInfoCode = { ...dataInfoProductBarcode.components_truss };
    //         break;
    //       default:
    //         dataInfoCode = {};
    //         break;
    //     }
    //   }
    // } else {
    //   suggest = [];
    // }

    console.log(dataInfoCode, valueInput);
    var bodyPush = [];
    for (let j = 1; j < 20; j++) {
      bodyPush.push(
        <tr key={j}>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
    return (
      <>
        <div>
          <p>Hiện trạng công đoạn gia công</p>
        </div>
        <div className="label-stages">
          {listProductRoughing.length > 0
            ? listProductRoughing.map(list => (
              <LabelComponent
                srcImg={
                  list.index_number === 1
                    ? images.label_start
                    : images.label_middle
                }
                textLabel={
                  list.index_number +
                  "." +
                  (list.name
                    ? list.name
                    : list.item_stage.map(
                      (item, index) =>
                        item.name +
                        (index + 1 === list.item_stage.length ? "" : " và ")
                    ))
                }
                colorImg={list.current_stage_status ? "color" + list.current_stage_status : "color3"}
              />
            ))
            : null}
        </div>
        <div className="action-center">
          <ActionButtons />
          <div className="action-button">
            <div className="search">
              <Input typeInput="text" placeholderInput="Search" />
              <Button iconButton={icons.icon_search} />
            </div>
            <Button
              classNameButton="add"
              iconButton={icons.icon_plus}
              onClickButton={this.openModal}
            />
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={{ content: { padding: 0 } }}
          >
            <SetupDisplayListModal closeModal={this.closeModal} />
          </Modal>
        </div>
        <div className="primary-processing">
          <div className="left-content">
            <ul>
              <li>
                <span>Mã số nhân viên</span>
                <Input
                  typeInput="text"
                  placeholderInput="Mã số nhân viên"
                  valueInput={
                    listProductRoughing.length > 0 &&
                      listProductRoughing[0].user_code
                      ? listProductRoughing[0].user_code
                      : ""
                  }
                />
              </li>
              <li>
                <span>Người quản lý</span>
                <Input
                  typeInput="text"
                  placeholderInput="Người quản lý"
                  valueInput={
                    listProductRoughing.length > 0 &&
                      listProductRoughing[0].user_name
                      ? listProductRoughing[0].user_name
                      : ""
                  }
                />
              </li>
            </ul>
            <ul>
              <li>
                <span>Code</span>
                <Input
                  typeInput="text"
                  onchangeInput={this.handleInputCode}
                  valueInput={valueInput}
                  onKeyDownInput={this.handleEnterInputCode}
                />
                {suggest.length > 0 && this.state.isOpen ? (
                  <ul className="list-code">
                    {suggest.map(value => (
                      <li key={value} onClick={this.handleChooseSuggest}>
                        {value}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>

              <li>
                <span>Tên sản phẩm</span>
                <Input
                  typeInput="text"
                  valueInput={
                    dataInfoCode && dataInfoCode.name ? dataInfoCode.name : ""
                  }
                  disabled={true}
                />
              </li>
              <li>
                <span>Thời gian bắt đầu</span>
                <Input
                  typeInput="text"
                  valueInput={
                    dataInfoCode && dataInfoCode.create_at
                      ? dataInfoCode.create_at
                      : ""
                  }
                  disabled={true}
                />
              </li>
              <li>
                <span>Thời gian kết thúc</span>
                <Input
                  typeInput="text"
                  valueInput={
                    dataInfoCode && dataInfoCode.update_at
                      ? dataInfoCode.update_at
                      : ""
                  }
                  disabled={true}
                />
              </li>
            </ul>
            <div className="control-button">
              <Button titleButton="Save" />
              <Button titleButton="Clear" />
              <Button titleButton="Edit" />
              <Button titleButton="Auto save" />
              <Input typeInput="checkbox" />
            </div>
          </div>
          <div className="right-content">
            <table>
              <thead>
                <tr>
                  <td>Hạng Mục</td>
                  <td>Hiển Thị</td>
                  <td>Đơn vị</td>
                </tr>
              </thead>
              <tbody>
                {dataColumn.map((col, index) => {
                  const value = col.value;
                  if (dataInfoCode[value]) {
                    if (dataInfoCode[value].name) {
                      return (
                        <tr key={index}>
                          <td>{col.name}</td>
                          <td>
                            <span>{dataInfoCode[value].name}</span>
                          </td>
                          <td></td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr key={index}>
                          <td>{col.name}</td>
                          <td>
                            <span>{dataInfoCode[value]}</span>
                          </td>
                          <td></td>
                        </tr>
                      );
                    }
                  }
                })}
                {Object.keys(dataInfoCode).length === 0 ? bodyPush : null}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getInfoProductBarcode: data => dispatch(getInfoProductBarcode(data)),
  getStageRoughingProcess: data => dispatch(getStageRoughingProcess(data))
});

const mapStateToProps = state => ({
  isLoading: state.processReducer.error,
  error: state.processReducer.error,
  listInfoProductBarcode: state.processReducer.listInfoProductBarcode,
  listProductRoughing: state.processReducer.listProductRoughing,
});
export default connect(mapStateToProps, mapDispatchToProps)(PrimaryProcessing);
