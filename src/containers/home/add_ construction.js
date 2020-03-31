import React, { Component } from "react";
import Input from "../../components/common/input";
import Select from "../../components/common/select";
import Button from "../../components/common/button";
import { connect } from "react-redux";
import { postConstruction, putConstruction } from "../../actions";
import { translate } from "react-i18next";

class AddConstruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      serial_number: "",
      id_trading_company: "",
      id_design_company: "",
      id_tc_manager_company: "",
      id_constructions_company: "",
      id_ut_review_company: "",
      start_date: "",
      end_date: "",
      id_employee_draw_manager: "",
      id_employee_material_manager: "",
      id_employee_stage_roughing: "",
      id_employee_stage_production: "",
      id_employee_quality_review: "",
      id_employee_export_production: "",
      id_stage_roughing_company: "",
      id_stage_production_company: "",
      note1: "",
      note2: "",
      note3: "",
      create_at: "",
      update_at: "",
      companyTrading: "",
      companyDesign: "",
      companyManager: "",
      companyConstruction: "",
      companyUtReview: "",
      userDesign: "",
      userMaterial: "",
      userStageRough: "",
      userStageProduction: "",
      userQualityReview: "",
      userExportProduction: "",
      companyStageRoughting: "",
      companyStageProduction: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    const {
      listCompanyTrading,
      listCompanyDesign,
      listCompanyManager,
      listCompanyConstruction,
      listCompanyUtReview,
      listUserEmployee,
      listCompanyStageRoughting,
      listCompanyStageProduction,
      dataConstruction,
      id_constructions
    } = this.props;
    console.log(dataConstruction, id_constructions);
    if (dataConstruction && id_constructions) {
      this.setState({
        name: dataConstruction.name ? dataConstruction.name : "",
        serial_number: dataConstruction.serial_number
          ? dataConstruction.serial_number
          : "",
        companyTrading: dataConstruction.id_trading_company
          ? this.getValue(
            listCompanyTrading,
            dataConstruction.id_trading_company
          )
          : "",
        companyDesign: dataConstruction.id_design_company
          ? this.getValue(listCompanyDesign, dataConstruction.id_design_company)
          : "",
        companyManager: dataConstruction.id_tc_manager_company
          ? this.getValue(
            listCompanyManager,
            dataConstruction.id_tc_manager_company
          )
          : "",
        companyConstruction: dataConstruction.id_constructions_company
          ? this.getValue(
            listCompanyConstruction,
            dataConstruction.id_constructions_company
          )
          : "",
        companyUtReview: dataConstruction.id_ut_review_company
          ? this.getValue(
            listCompanyUtReview,
            dataConstruction.id_ut_review_company
          )
          : "",
        start_date: dataConstruction.start_date
          ? dataConstruction.start_date
          : "",
        end_date: dataConstruction.end_date ? dataConstruction.end_date : "",
        userDesign: dataConstruction.id_employee_draw_manager
          ? this.getValue(
            listUserEmployee,
            dataConstruction.id_employee_draw_manager
          )
          : "",
        userMaterial: dataConstruction.id_employee_material_manager
          ? this.getValue(
            listUserEmployee,
            dataConstruction.id_employee_material_manager
          )
          : "",
        userStageRough: dataConstruction.id_employee_stage_roughing
          ? this.getValue(
            listUserEmployee,
            dataConstruction.id_employee_stage_roughing
          )
          : "",
        userStageProduction: dataConstruction.id_employee_stage_production
          ? this.getValue(
            listUserEmployee,
            dataConstruction.id_employee_stage_production
          )
          : "",
        userQualityReview: dataConstruction.id_employee_quality_review
          ? this.getValue(
            listUserEmployee,
            dataConstruction.id_employee_quality_review
          )
          : "",
        userExportProduction: dataConstruction.id_employee_export_production
          ? this.getValue(
            listUserEmployee,
            dataConstruction.id_employee_export_production
          )
          : "",
        companyStageRoughting: dataConstruction.id_stage_roughing_company
          ? this.getValue(
            listCompanyStageRoughting,
            dataConstruction.id_stage_roughing_company
          )
          : "",
        companyStageProduction: dataConstruction.id_stage_production_company
          ? this.getValue(
            listCompanyStageProduction,
            dataConstruction.id_stage_production_company
          )
          : "",
        note1: dataConstruction.note1 ? dataConstruction.note1 : "",
        note2: dataConstruction.note2 ? dataConstruction.note2 : "",
        note3: dataConstruction.note3 ? dataConstruction.note3 : ""
      });
    } else {
      this.setState({
        companyTrading:
          listCompanyTrading.length > 0 ? listCompanyTrading[0].name : "",
        companyDesign:
          listCompanyDesign.length > 0 ? listCompanyDesign[0].name : "",
        companyManager:
          listCompanyManager.length > 0 ? listCompanyManager[0].name : "",
        companyConstruction:
          listCompanyConstruction.length > 0
            ? listCompanyConstruction[0].name
            : "",
        companyUtReview:
          listCompanyUtReview.length > 0 ? listCompanyUtReview[0].name : "",
        userDesign:
          listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
        userMaterial:
          listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
        userStageRough:
          listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
        userStageProduction:
          listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
        userQualityReview:
          listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
        userExportProduction:
          listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
        companyStageRoughting:
          listCompanyStageRoughting.length > 0
            ? listCompanyStageRoughting[0].name
            : "",
        companyStageProduction:
          listCompanyStageProduction.length > 0
            ? listCompanyStageProduction[0].name
            : ""
      });
    }
  }
  handleSelect = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleClickOk = () => {
    const {
      listCompanyTrading,
      listCompanyDesign,
      listCompanyManager,
      listCompanyConstruction,
      listCompanyUtReview,
      listUserEmployee,
      listCompanyStageRoughting,
      listCompanyStageProduction
    } = this.props;
    const {
      name,
      serial_number,
      start_date,
      end_date,
      note1,
      note2,
      note3,
      companyTrading,
      companyDesign,
      companyManager,
      companyConstruction,
      companyUtReview,
      userDesign,
      userMaterial,
      userStageRough,
      userStageProduction,
      userQualityReview,
      userExportProduction,
      companyStageRoughting,
      companyStageProduction
    } = this.state;
    this.props.postConstruction({
      name,
      serial_number,
      id_trading_company: this.getId(listCompanyTrading, companyTrading),
      id_design_company: this.getId(listCompanyDesign, companyDesign),
      id_tc_manager_company: this.getId(listCompanyManager, companyManager),
      id_constructions_company: this.getId(
        listCompanyConstruction,
        companyConstruction
      ),
      id_ut_review_company: this.getId(listCompanyUtReview, companyUtReview),
      start_date,
      end_date,
      id_employee_draw_manager: this.getId(listUserEmployee, userDesign),
      id_employee_material_manager: this.getId(listUserEmployee, userMaterial),
      id_employee_stage_roughing: this.getId(listUserEmployee, userStageRough),
      id_employee_stage_production: this.getId(
        listUserEmployee,
        userStageProduction
      ),
      id_employee_quality_review: this.getId(
        listUserEmployee,
        userQualityReview
      ),
      id_employee_export_production: this.getId(
        listUserEmployee,
        userExportProduction
      ),
      id_stage_roughing_company: this.getId(
        listCompanyStageRoughting,
        companyStageRoughting
      ),
      id_stage_production_company: this.getId(
        listCompanyStageProduction,
        companyStageProduction
      ),
      note1,
      note2,
      note3,
      create_at: Date,
      update_at: Date
    });
    this.props.setNoti()
  };
  handleClickUpdate = () => {
    const {
      listCompanyTrading,
      listCompanyDesign,
      listCompanyManager,
      listCompanyConstruction,
      listCompanyUtReview,
      listUserEmployee,
      listCompanyStageRoughting,
      listCompanyStageProduction,
      id_constructions
    } = this.props;
    const {
      name,
      serial_number,
      start_date,
      end_date,
      note1,
      note2,
      note3,
      companyTrading,
      companyDesign,
      companyManager,
      companyConstruction,
      companyUtReview,
      userDesign,
      userMaterial,
      userStageRough,
      userStageProduction,
      userQualityReview,
      userExportProduction,
      companyStageRoughting,
      companyStageProduction
    } = this.state;
    this.props.putConstruction({
      id: id_constructions,
      name,
      serial_number,
      id_trading_company: this.getId(listCompanyTrading, companyTrading),
      id_design_company: this.getId(listCompanyDesign, companyDesign),
      id_tc_manager_company: this.getId(listCompanyManager, companyManager),
      id_constructions_company: this.getId(
        listCompanyConstruction,
        companyConstruction
      ),
      id_ut_review_company: this.getId(listCompanyUtReview, companyUtReview),
      start_date,
      end_date,
      id_employee_draw_manager: this.getId(listUserEmployee, userDesign),
      id_employee_material_manager: this.getId(listUserEmployee, userMaterial),
      id_employee_stage_roughing: this.getId(listUserEmployee, userStageRough),
      id_employee_stage_production: this.getId(
        listUserEmployee,
        userStageProduction
      ),
      id_employee_quality_review: this.getId(
        listUserEmployee,
        userQualityReview
      ),
      id_employee_export_production: this.getId(
        listUserEmployee,
        userExportProduction
      ),
      id_stage_roughing_company: this.getId(
        listCompanyStageRoughting,
        companyStageRoughting
      ),
      id_stage_production_company: this.getId(
        listCompanyStageProduction,
        companyStageProduction
      ),
      note1,
      note2,
      note3,
      create_at: Date,
      update_at: Date
    });
    this.props.setNoti()
  };
  handleClickClear = () => {
    const {
      listCompanyTrading,
      listCompanyDesign,
      listCompanyManager,
      listCompanyConstruction,
      listCompanyUtReview,
      listUserEmployee,
      listCompanyStageRoughting,
      listCompanyStageProduction
    } = this.props;
    this.setState({
      name: "",
      serial_number: "",
      start_date: "",
      end_date: "",
      companyTrading:
        listCompanyTrading.length > 0 ? listCompanyTrading[0].name : "",
      companyDesign:
        listCompanyDesign.length > 0 ? listCompanyDesign[0].name : "",
      companyManager:
        listCompanyManager.length > 0 ? listCompanyManager[0].name : "",
      companyConstruction:
        listCompanyConstruction.length > 0 ? listCompanyTrading[0].name : "",
      companyUtReview:
        listCompanyUtReview.length > 0 ? listCompanyUtReview[0].name : "",
      userDesign:
        listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
      userMaterial:
        listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
      userStageRough:
        listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
      userStageProduction:
        listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
      userQualityReview:
        listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
      userExportProduction:
        listUserEmployee.length > 0 ? listUserEmployee[0].username : "",
      companyStageRoughting:
        listCompanyStageRoughting.length > 0
          ? listCompanyStageRoughting[0].name
          : "",
      companyStageProduction:
        listCompanyStageProduction.length > 0
          ? listCompanyStageProduction[0].name
          : "",
      note1: "",
      note2: "",
      note3: ""
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
  getValue(arrData, id) {
    var value = "";
    arrData.map(data => {
      if (data.id === id) {
        value = data.name;
      }
      return value;
    });
    return value;
  }
  render() {
    const {
      listCompanyTrading,
      listCompanyDesign,
      listCompanyManager,
      listCompanyConstruction,
      listCompanyUtReview,
      listUserEmployee,
      listCompanyStageRoughting,
      listCompanyStageProduction,
      id_constructions,
      t
    } = this.props;
    return (
      <ul className="add-construction">
        <li>
          <span>{t("home.right-menu.construction_number")}</span>
          <Input
            typeInput="text"
            nameInput="serial_number"
            onchangeInput={this.handleSelect}
            valueInput={this.state.serial_number}
          />
        </li>
        <li>
          <span>{t("home.right-menu.construction_name")}</span>
          <Input
            typeInput="text"
            nameInput="name"
            onchangeInput={this.handleSelect}
            valueInput={this.state.name}
          />
        </li>
        <li>
          <span>{t("home.right-menu.customer_name")}</span>
          <Select
            nameSelect="companyTrading"
            dataOption={listCompanyTrading}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.companyTrading}
          />
        </li>
        <li>
          <span>{t("home.right-menu.designer_name")}</span>
          <Select
            nameSelect="companyDesign"
            dataOption={listCompanyDesign}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.companyDesign}
          />
        </li>
        <li>
          <span>{t("home.right-menu.supervision_name")}</span>
          <Select
            nameSelect="companyManager"
            dataOption={listCompanyManager}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.companyManager}
          />
        </li>
        <li>
          <span>{t("home.right-menu.processing_name")}</span>
          <Select
            nameSelect="companyConstruction"
            dataOption={listCompanyConstruction}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.companyConstruction}
          />
        </li>
        <li>
          <span>{t("home.right-menu.UT_inspection")}</span>
          <Select
            nameSelect="companyUtReview"
            dataOption={listCompanyUtReview}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.companyUtReview}
          />
        </li>
        <li>
          <span>{t("home.right-menu.date_start")}</span>
          <Input
            typeInput="date"
            nameInput="start_date"
            onchangeInput={this.handleSelect}
            valueInput={this.state.start_date}
          />
        </li>
        <li>
          <span>{t("home.right-menu.date_end")}</span>
          <Input
            typeInput="date"
            nameInput="end_date"
            onchangeInput={this.handleSelect}
            valueInput={this.state.end_date}
          />
        </li>
        <li>
          <span>{t("home.right-menu.design_manager")}</span>
          <Select
            nameSelect="userDesign"
            dataOption={listUserEmployee}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.userDesign}
          />
        </li>
        <li>
          <span>{t("home.right-menu.material_manager")}</span>
          <Select
            nameSelect="userMaterial"
            dataOption={listUserEmployee}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.userMaterial}
          />
        </li>
        <li>
          <span>{t("home.right-menu.roughing_manager")}</span>
          <Select
            nameSelect="userStageRough"
            dataOption={listUserEmployee}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.userStageRough}
          />
        </li>
        <li>
          <span>{t("home.right-menu.production_manager")}</span>
          <Select
            nameSelect="userStageProduction"
            dataOption={listUserEmployee}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.userStageProduction}
          />
        </li>
        <li>
          <span>{t("home.right-menu.inspector")}</span>
          <Select
            nameSelect="userQualityReview"
            dataOption={listUserEmployee}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.userQualityReview}
          />
        </li>
        <li>
          <span>{t("home.right-menu.shipment")}</span>
          <Select
            nameSelect="userExportProduction"
            dataOption={listUserEmployee}
            onChangeSelect={this.handleSelect}
            valueSelect={this.state.userExportProduction}
          />
        </li>
        <li>
          <span>{t("home.right-menu.roughing_company")}</span>
          <Select
            nameSelect="companyStageRoughting"
            dataOption={listCompanyStageRoughting}
            onChangeSelect={this.handleSelect}
          />
        </li>
        <li>
          <span>{t("home.right-menu.production_company")}</span>
          <Select
            nameSelect="companyStageProduction"
            dataOption={listCompanyStageProduction}
            onChangeSelect={this.handleSelect}
          />
        </li>
        <li>
          <span>{t("home.right-menu.note_1")}</span>
          <Input
            typeInput="text"
            nameInput="note1"
            onchangeInput={this.handleSelect}
            valueInput={this.state.note1}
          />
        </li>
        <li>
          <span>{t("home.right-menu.note_2")}</span>
          <Input
            typeInput="text"
            nameInput="note2"
            onchangeInput={this.handleSelect}
            valueInput={this.state.note2}
          />
        </li>
        <li>
          <span>{t("home.right-menu.note_3")}</span>
          <Input
            typeInput="text"
            nameInput="note3"
            onchangeInput={this.handleSelect}
            valueInput={this.state.note3}
          />
        </li>
        <li>
          {id_constructions ? (
            <Button
              titleButton="Update"
              onClickButton={this.handleClickUpdate}
            />
          ) : (
              <Button titleButton="Okay" onClickButton={this.handleClickOk} />
            )}

          <Button titleButton="Clear" onClickButton={this.handleClickClear} />
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postConstruction: construction => dispatch(postConstruction(construction)),
  putConstruction: construction => dispatch(putConstruction(construction))
});
const mapStateToProps = state => ({
  isLoading: state.homeReducer.isLoading,
  error: state.homeReducer.error,
  success: state.homeReducer.success,
  listCompanyTrading: state.homeReducer.listCompanyTrading,
  listCompanyDesign: state.homeReducer.listCompanyDesign,
  listCompanyManager: state.homeReducer.listCompanyManager,
  listCompanyConstruction: state.homeReducer.listCompanyConstruction,
  listCompanyUtReview: state.homeReducer.listCompanyUtReview,
  listUserEmployee: state.homeReducer.listUserEmployee,
  listCompanyStageRoughting: state.homeReducer.listCompanyStageRoughting,
  listCompanyStageProduction: state.homeReducer.listCompanyStageProduction,
  dataConstruction: state.homeReducer.dataConstruction
});

export default translate('translation')(connect(mapStateToProps, mapDispatchToProps)(AddConstruction));
