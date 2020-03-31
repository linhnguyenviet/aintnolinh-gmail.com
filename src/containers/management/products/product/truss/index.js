import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import Button from "../../../../../components/common/button";
import Input from "../../../../../components/common/input";
import Select from "../../../../../components/common/select";
import icons from "../../../../../constants/icons";
import BraceComponent from "./brace";
import PropComponent from "./prop";
import UpperTrussComponent from "./upper_truss";
import LowerTrussComponent from "./lower_truss";
import ActionButtons from "../../../../../components/action-buttons";
import ParamTrussComponent from "./param_truss";

const buttons = {
    upperTruss: false,
    lowerTruss: false,
    braceClick: false,
    propClick: false,
    paramTruss: false,
    paramProps: false,
    paramBraces: false,
}


export default class InputTrussComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...buttons,
            param_truss: {
                material_param: "",
                size_detail_param: "",
                weight_unit_param: "",
                width_param: "",
                weight_param: "",
                solder_width_param: "",
                surface_area_param: "",
            },
            upper_truss: {
                slant_bar_quantity: "",
                name_truss: "",
                size_detail_truss: "",
                weight_unit_truss: "",
                width_truss: "",
                weight_truss: "",
                solder_width_truss: "",
                surface_area_truss: "",
                left_connector_truss: "",
                right_connector_truss: "",
                left_slant_bar_truss: "",
                right_slant_bar_truss: "",
            },
            lower_truss: {
                slant_bar_quantity: "",
                name_truss: "",
                size_detail_truss: "",
                weight_unit_truss: "",
                width_truss: "",
                weight_truss: "",
                solder_width_truss: "",
                surface_area_truss: "",
                left_connector_truss: "",
                right_connector_truss: "",
                left_slant_bar_truss: "",
                right_slant_bar_truss: "",
            },
            prop: {
                name: "",
                material: "",
                size_detail: "",
                weight_unit: "",
                width: "",
                weight: "",
                solder_width: "",
                surface_area: "",
            },
            brace: {
                name: "",
                material: "",
                size_detail: "",
                weight_unit: "",
                width: "",
                weight: "",
                solder_width: "",
                surface_area: "",
            },
            data: {
                param_truss: [],
                upper_truss: [],
                lower_truss: [],
                prop: [],
                brace: []
            }

        };
        this.handleClickButton = this.handleClickButton.bind(this)
        this.handleClickOk = this.handleClickOk.bind(this);
        this.handleClickClear = this.handleClickClear.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleClickButton(event, key) {
        event.stopPropagation();
        this.setState(prevState => {
            return {
                ...buttons,
                [key]: !prevState[key]
            }
        });
    }
    handleSelect(e, key) {
        let { name, value } = e.target;
        this.setState(
            prevState => {
                return {
                    [key]: {
                        ...prevState[key],
                        [name]: value
                    }
                }
            }

        );
    };
    handleClickOk = (event, key) => {
        event.stopPropagation();
        const data = { ...this.state.data };
        switch (key) {
            case "prop":
            case "brace":
                const {
                    name,
                    material,
                    size_detail,
                    weight_unit,
                    width,
                    weight,
                    solder_width,
                    surface_area,
                } = this.state[key]
                data[key].push([
                    name,
                    material,
                    size_detail,
                    weight_unit,
                    width,
                    weight,
                    solder_width,
                    surface_area,
                ]);
                this.setState({ data })
                break;
            case "upper_truss":
            case "lower_truss":
                const {
                    slant_bar_quantity,
                    name_truss,
                    size_detail_truss,
                    weight_unit_truss,
                    width_truss,
                    weight_truss,
                    solder_width_truss,
                    surface_area_truss,
                    left_connector_truss,
                    right_connector_truss,
                    left_slant_bar_truss,
                    right_slant_bar_truss,
                } = this.state[key]
                data[key].push([
                    slant_bar_quantity,
                    name_truss,
                    size_detail_truss,
                    weight_unit_truss,
                    width_truss,
                    weight_truss,
                    solder_width_truss,
                    surface_area_truss,
                    left_connector_truss,
                    right_connector_truss,
                    left_slant_bar_truss,
                    right_slant_bar_truss,
                ])
                break;
            default:
                break;
        }
        console.log(this.state.data)
    }
    handleClickClear = (event, key) => {
        console.log("Clear");
    }
    render() {
        return (
            <>
                <div className="action-center">
                    <p>Nhập cấu kiện giàn</p>
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
                    <Table />
                    <div className="right-menu">
                        <div className="right-menu-header">
                            <button>Excel Import</button>
                            <button> &#60; Nhập liên tục</button>
                        </div>
                        <div className="input-menu">
                            <ul>
                                <li><span>Tên giàn</span><Select /></li>
                                <li><span>Chỉ thị sơn</span><Input typeInput="text" /></li>
                                <li><span>Số hiệu bản vẽ</span><input type="select" /></li>
                                <li><span>Bản số trái</span><input type="text" /></li>
                                <li><span>Bản số phải</span><input type="text" /></li>
                                <li><span>Đỡ xiên trái</span><input type="text" /></li>
                                <li><span>Đỡ xiên phải</span><input type="text" /></li>
                            </ul>
                            <ul className="sub-menu">
                                <li>
                                    <Button
                                        titleButton="Nhập thông số cơ bản giàn trên, giàn dưới..."
                                        onClickButton={e => this.handleClickButton(e, "paramTruss")}
                                        classNameButton={this.state.paramTruss ? "active" : ""}
                                    />
                                </li>
                                <ul>
                                    <li>
                                        <Button
                                            titleButton="Giàn trên"
                                            onClickButton={e => this.handleClickButton(e, "upperTruss")}
                                            classNameButton={this.state.upperTruss ? "active" : ""}
                                        />
                                        <Button
                                            titleButton="Giàn dưới"
                                            onClickButton={e => this.handleClickButton(e, "lowerTruss")}
                                            classNameButton={this.state.lowerTruss ? "active" : ""}
                                        />
                                    </li>
                                    <Button iconButton={icons.icon_arrow_right} classNameButton="next-item" />
                                </ul>
                            </ul>
                            {
                                this.state.paramTruss ? (
                                    <ParamTrussComponent
                                        handleClickOk={this.handleClickOk}
                                        handleClickClear={this.handleClickClear}
                                        handleSelect={this.handleSelect}
                                    />
                                ) :
                                    this.state.upperTruss ?
                                        <UpperTrussComponent
                                            handleClickOk={this.handleClickOk}
                                            handleClickClear={this.handleClickClear}
                                            handleSelect={this.handleSelect}
                                        /> :
                                        this.state.lowerTruss ?
                                            <LowerTrussComponent
                                                handleClickOk={this.handleClickOk}
                                                handleClickClear={this.handleClickClear}
                                                handleSelect={this.handleSelect}
                                            /> :
                                            null
                            }
                            <ul className="sub-menu">
                                <li>
                                    <Button
                                        titleButton="Nhập thông số cơ bản thanh xiên..."
                                        onClickButton={e => this.handleClickButton(e, "paramBraces")}
                                        classNameButton={this.state.paramBraces ? "active" : ""}
                                    />
                                </li>
                                <ul>
                                    <li>
                                        <Button titleButton="Thanh xiên 1" onClickButton={e => this.handleClickButton(e, "braceClick")} classNameButton={this.state.braceClick ? "active" : ""} />
                                        <Button titleButton="Thanh xiên 2" />
                                        <Button titleButton="Thanh xiên 3" />
                                    </li>
                                    <Button iconButton={icons.icon_arrow_right} classNameButton="next-item" />
                                </ul>
                            </ul>
                            {
                                this.state.paramBraces ?
                                    <BraceComponent /> :
                                    this.state.braceClick ?
                                        <BraceComponent
                                            infoBrace="true"
                                            handleClickOk={this.handleClickOk}
                                            handleClickClear={this.handleClickClear}
                                            handleSelect={this.handleSelect}

                                        /> : null
                            }
                            <ul className="sub-menu">
                                <li>  <Button
                                    titleButton="Nhập thông số cơ bản thanh đứng..."
                                    onClickButton={e => this.handleClickButton(e, "paramProps")}
                                    classNameButton={this.state.paramProps ? "active" : ""}
                                /></li>
                                <ul>
                                    <li>
                                        <Button titleButton="Thanh đứng 1" onClickButton={e => this.handleClickButton(e, "propClick")} classNameButton={this.state.propClick ? "active" : ""} />
                                        <Button titleButton="Thanh đứng 2" />
                                        <Button titleButton="Thanh đứng 3" />
                                    </li>
                                    <Button iconButton={icons.icon_arrow_right} classNameButton="next-item" />
                                </ul>
                            </ul>
                            {
                                this.state.paramProps ?
                                    <PropComponent /> :
                                    this.state.propClick ?
                                        <PropComponent
                                            infoProp="true"
                                            handleClickOk={this.handleClickOk}
                                            handleClickClear={this.handleClickClear}
                                            handleSelect={this.handleSelect}
                                        /> :
                                        null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
