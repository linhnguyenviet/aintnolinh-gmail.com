import React, { Component } from "react";
import "./style.scss";
import Button from "../../../../components/common/button";
import icons from "../../../../constants/icons";
import ActionButtons from "../../../../components/action-buttons";
import Input from "../../../../components/common/input";
import Table from "../../../../components/common/table";
import { connect } from "react-redux";
import {
  getAllStageRoughing,
  getAllStageProduction,
  getProductCommon,
  getAllStageComponentTruss,
  postStageComponentTruss
} from "../../../../actions/sprints";

class PrimaryGirdersSprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_find: "",
      id_pd_product: "",
      dataChecked: [],
      dataChoose: [],
      index_number_choose: "",
      highlightAll: false
    };
    this.handleChangeChecked = this.handleChangeChecked.bind(this);
    this.handleOnClickStage = this.handleOnClickStage.bind(this);
    this.handleOnClickComponentTruss = this.handleOnClickComponentTruss.bind(
      this
    );
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
    this.handleChooseAll = this.handleChooseAll.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleOkay = this.handleOkay.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);
  }
  componentDidMount() {
    const { id_constructions } = this.props;
    this.props.getAllStageRoughing({ id_constructions: id_constructions });
    this.props.getAllStageProduction({
      id_constructions: id_constructions,
      id_pd_product_common_type: 10
    });
    this.props.getProductCommon({
      id_constructions: id_constructions,
      id_pd_product_common_type: 10
    });
  }
  componentWillReceiveProps(nextProps) {
    const { listProductCommon, listAllStageComponentTruss } = this.props;
    const dataChecked = [...this.state.dataChecked];
    if (nextProps.listProductCommon !== listProductCommon) {
      for (var i = 0; i < nextProps.listProductCommon.length; i++) {
        dataChecked.push(false);
      }
    }
    this.setState({
      dataChecked
    });
    if (nextProps.listAllStageComponentTruss !== listAllStageComponentTruss) {
      this.setState({
        dataChoose: nextProps.listAllStageComponentTruss
      });
    }
  }
  handleChangeChecked(e) {
    const id_item = e.target.name;
    const isChecked = e.target.checked;
    const value = e.target.value;
    const dataChecked = [...this.state.dataChecked];
    const { id_constructions } = this.props;
    if (isChecked) {
      dataChecked.map((checked, index) => {
        index.toString() === value
          ? (dataChecked[index] = true)
          : (dataChecked[index] = false);
        return dataChecked;
      });
      this.setState({
        id_pd_product: id_item,
        dataChecked
      });
      this.props.getAllStageComponentTruss({
        id_constructions: id_constructions,
        id_pd_product: id_item
      });
    } else {
      dataChecked[value] = false;
      this.setState({
        dataChecked,
        dataChoose: []
      });
    }
  }
  handleOnClickStage(e) {
    if (this.state.id_pd_product !== "") {
      const id_components_truss = e.currentTarget.dataset.id;
      const id_production = e.currentTarget.dataset.name;
      var value_component_truss = e.target.innerHTML;
      value_component_truss = value_component_truss.split(".")[1];
      value_component_truss = value_component_truss.replace("</span>", "");
      const dataChoose = [...this.state.dataChoose];
      var checked = false;
      if (dataChoose.length === 0) {
        if (id_production) {
          dataChoose.push({
            index_number: dataChoose.length + 1,
            index_define_processing_stage: id_components_truss,
            name: value_component_truss,
            id_stage_common_type: 10
          });
        } else {
          dataChoose.push({
            index_number: dataChoose.length + 1,
            index_define_processing_stage: id_components_truss,
            name: value_component_truss
          });
        }
        this.setState({ dataChoose });
      } else {
        dataChoose.map((data, index) => {
          if (data.name === value_component_truss) {
            checked = true;
            alert("Công đoạn này đã được chọn");
          } else {
            if (index === dataChoose.length - 1 && checked === false) {
              if (id_production) {
                dataChoose.push({
                  index_number: dataChoose.length + 1,
                  index_define_processing_stage: Number(id_components_truss),
                  name: value_component_truss,
                  id_stage_common_type: 10
                });
              } else {
                dataChoose.push({
                  index_number: dataChoose.length + 1,
                  index_define_processing_stage: Number(id_components_truss),
                  name: value_component_truss
                });
              }
              this.setState({ dataChoose });
            }
          }
        });
      }
    } else {
      alert("Vui lòng chọn sản phẩm bảng dưới");
    }
  }
  handleOnClickComponentTruss(e) {
    const index_number = e.currentTarget.dataset.id;
    this.setState({ index_number_choose: index_number - 1 });
  }
  handleClickUp(e) {
    try {
      const { dataChoose, index_number_choose } = this.state;
      const dataChooseUp = this.swap(dataChoose, index_number_choose, true);
      if (
        dataChooseUp !== null &&
        dataChooseUp !== "undefined" &&
        dataChooseUp.length > 0
      ) {
        this.setState({
          dataChoose: dataChooseUp
        });
      } else {
        alert("Lỗi không thể tăng");
      }
    } catch (error) {
      alert("Không có dữ liệu hoặc chưa chọn công đoạn để thay đổi");
    }
  }
  handleClickDown(e) {
    try {
      const { dataChoose, index_number_choose } = this.state;
      const dataChooseDown = this.swap(dataChoose, index_number_choose, false);
      if (
        dataChooseDown !== null &&
        dataChooseDown !== "undefined" &&
        dataChooseDown.length > 0
      ) {
        this.setState({
          dataChoose: dataChooseDown
        });
      } else {
        alert("Lỗi không thể tăng");
      }
    } catch (error) {
      alert("Không có dữ liệu hoặc chưa chọn công đoạn để thay đổi");
    }
  }
  swap(input, index_A, isUp) {
    if (isUp === true) {
      if (index_A >= 1) {
        let temp = input[index_A];
        input[index_A] = input[index_A - 1];
        input[index_A - 1] = temp;
        this.setState({
          index_number_choose: index_A - 1
        });
      } else {
        alert("Không thể tăng thêm nữa");
      }
    } else {
      if (index_A < input.length - 1) {
        let temp = input[index_A];
        input[index_A] = input[index_A + 1];
        input[index_A + 1] = temp;
        this.setState({
          index_number_choose: index_A + 1
        });
      } else {
        alert("Không thể giảm thêm nữa");
      }
    }

    return input;
  }
  chooseAll = false;
  handleChooseAll(e) {
    if (this.state.dataChoose.length > 0) {
      this.chooseAll = true;
    } else {
      alert("Không có dữ liệu");
    }
    this.handleHighlight();
  }
  handleDeleteAll(e) {
    if (this.chooseAll) {
      this.setState({ dataChoose: [], index_number_choose: "" });
      this.chooseAll = false;
    } else {
      alert("Vui lòng bấm chọn tất cả để xoá");
    }
    this.handleHighlight();
  }
  handleOkay(e) {
    const { dataChoose } = this.state;
    if (dataChoose.length > 0) {
      var items = [];
      dataChoose.map((data, index) => {
        if (data.id_stage_common_type) {
          items.push({
            index_define_processing_stage: data.index_define_processing_stage
              ? data.index_define_processing_stage
              : data.index_number,
            index_number: index + 1,
            id_stage_common_type: 10
          });
        } else {
          items.push({
            index_define_processing_stage: data.index_define_processing_stage
              ? data.index_define_processing_stage
              : data.index_number,
            index_number: index + 1
          });
        }
        return items;
      });
      this.props.postStageComponentTruss({
        id_pd_product: this.state.id_pd_product,
        id_constructions: this.props.id_constructions,
        item: items
      });
    } else {
      alert("Không có dữ liệu");
    }
  }
  handleClickLeft(e) {
    const { index_number_choose } = this.state;
    this.setState(preState => ({
      dataChoose: preState.dataChoose.filter(
        data => data.index_number !== index_number_choose + 1
      ),
      index_number_choose: ""
    }));
  }
  handleHighlight() {
    this.setState(prevState => {
      return {
        highlightAll: !prevState.highlightAll
      };
    });
  }
  render() {
    var dataColumn = [
      { name: "Bộ phận công trình", value: "constructions_part" },
      { name: "Bộ phận thép", value: "pd_steel_part" },
      { name: "Khu", value: "area" },
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
    ];
    const {
      listAllStageRoughing,
      listAllStageProduction,
      listProductCommon
    } = this.props;
    const { dataChoose, dataChecked } = this.state;
    return (
      <div className="columns-sprint">
        <div className="columns-content">
          <ul>
            {listAllStageRoughing.length > 0
              ? listAllStageRoughing.map(stageRough => {
                  return (
                    <li
                      key={stageRough.index_number}
                      onClick={this.handleOnClickStage}
                      data-id={stageRough.index_number}
                    >
                      <span>
                        {stageRough.index_number + "."}
                        {stageRough.name
                          ? stageRough.name
                          : stageRough.item.map((stage, index) => {
                              return (
                                stage.name +
                                (stageRough.item.length - index === 1
                                  ? ""
                                  : " và ")
                              );
                            })}
                      </span>
                    </li>
                  );
                })
              : null}
            {listAllStageProduction.length > 0
              ? listAllStageProduction.map(stageProduction => {
                  return (
                    <li
                      key={stageProduction.index_number}
                      onClick={this.handleOnClickStage}
                      data-id={stageProduction.index_number}
                      data-name="production"
                    >
                      <span>
                        {stageProduction.index_number +
                          listAllStageRoughing.length +
                          "."}
                        {stageProduction.name
                          ? stageProduction.name
                          : stageProduction.item.map((stage, index) => {
                              return (
                                stage.name +
                                (stageProduction.item.length - index === 1
                                  ? ""
                                  : " và ")
                              );
                            })}
                      </span>
                    </li>
                  );
                })
              : null}
          </ul>
          <div className="grp-btns grp-1">
            <Button iconButton={icons.icon_shift_right} />
            <Button
              iconButton={icons.icon_shift_left}
              onClickButton={this.handleClickLeft}
            />
          </div>
          <div className="list-select">
            <ul>
              {dataChoose.length > 0
                ? dataChoose.map((componentTruss, index) => {
                    return (
                      <li
                        key={componentTruss.index_number}
                        onClick={this.handleOnClickComponentTruss}
                        data-id={componentTruss.index_number}
                        className={
                          this.state.highlightAll ||
                          this.state.index_number_choose === index
                            ? "active"
                            : ""
                        }
                      >
                        <span>
                          {index + 1 + "."}
                          {componentTruss.name
                            ? componentTruss.name
                            : componentTruss.item.map((stage, index) => {
                                return (
                                  stage.name +
                                  (componentTruss.item.length - index === 1
                                    ? ""
                                    : " và ")
                                );
                              })}
                        </span>
                      </li>
                    );
                  })
                : null}
            </ul>
            <div className="footer-button">
              <Button titleButton="Okay" onClickButton={this.handleOkay} />
              {/* <Button titleButton="Clear" /> */}
            </div>
          </div>
          <div className="grp-btns grp-2">
            <Button
              titleButton="Chọn toàn bộ"
              onClickButton={this.handleChooseAll}
            />
            <Button
              titleButton="Xóa toàn bộ"
              onClickButton={this.handleDeleteAll}
            />
            <Button
              iconButton={icons.icon_arrow_up}
              onClickButton={this.handleClickUp}
            />
            <Button
              iconButton={icons.icon_arrow_down}
              onClickButton={this.handleClickDown}
            />
          </div>
        </div>

        <div className="action-center">
          <p>Lorem text</p>
          <ActionButtons />
          <div className="action-button">
            <div className="search">
              <Input typeInput="text" placeholderInput="Search" />
              <Button iconButton={icons.icon_search} />
            </div>
            <Button classNameButton="add" iconButton={icons.icon_plus} />
          </div>
        </div>
        <div className="tableDisplay">
          <div className="tableCheckbox">
            {listProductCommon.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listProductCommon.map((product, index) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <Input
                            typeInput="checkbox"
                            nameInput={product.id.toString()}
                            onchangeInput={this.handleChangeChecked}
                            checkedInput={dataChecked[index]}
                            valueInput={index.toString()}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : null}
          </div>
          <Table dataColumn={dataColumn} dataRow={listProductCommon} />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getAllStageRoughing: data => dispatch(getAllStageRoughing(data)),
  getAllStageProduction: data => dispatch(getAllStageProduction(data)),
  getProductCommon: data => dispatch(getProductCommon(data)),
  getAllStageComponentTruss: data => dispatch(getAllStageComponentTruss(data)),
  postStageComponentTruss: data => dispatch(postStageComponentTruss(data))
});

const mapStateToProps = state => ({
  isLoading: state.sprintsReducer.error,
  error: state.sprintsReducer.error,
  listAllStageRoughing: state.sprintsReducer.listAllStageRoughing,
  listAllStageProduction: state.sprintsReducer.listAllStageProduction,
  listProductCommon: state.sprintsReducer.listProductCommon,
  listAllStageComponentTruss: state.sprintsReducer.listAllStageComponentTruss
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryGirdersSprint);
