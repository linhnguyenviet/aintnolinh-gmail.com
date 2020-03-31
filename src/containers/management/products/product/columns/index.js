import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import Button from "../../../../../components/common/button";
import icons from "../../../../../constants/icons";
import ShiguichiComponent from "./shiguichi";
import BrakettoComponent from "./braketto";
import Select from "../../../../../components/common/select";
import ActionButtons from "../../../../../components/action-buttons";
import Input from "../../../../../components/common/input";

const buttons = {
    shiguichiClick: false,
    brakettoClick: false,
    paramsShiguichi: false,
    paramsBraketto: false,
}

class InputColumnsComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...buttons,
            shiguichi: {
                name: "",
                material: "",
                size_detail: "",
                weight_unit: "",
                width: "",
                weight: "",
                solder_width: "",
                surface_area: "",
                paint_directive: "",
                drawing_number: "",
            },
            braketto: {
                name: "",
                material: "",
                size_detail: "",
                weight_unit: "",
                width: "",
                weight: "",
                solder_width: "",
                surface_area: "",
                paint_directive: "",
                drawing_number: "",
            },
            data: {
                shiguichi: [],
                braketto: [],
            },
            dataColumn: [
                { name: "Tên" },
                { name: "Chất liệu" },
                { name: "Kích thước" },
                { name: "Trọng lượng đơn vị" },
                { name: "Chiều dài" },
                { name: "Trọng lượng" },
                { name: "Chiều dài hàn" },
                { name: "Diện tích bề mặt" },
                { name: "Chỉ thị sơn" },
                { name: "Số hiệu bản vẽ" },
            ]
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
        const {
            name,
            material,
            size_detail,
            weight_unit,
            width,
            weight,
            solder_width,
            surface_area,
            paint_directive,
            drawing_number
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
            paint_directive,
            drawing_number
        ]);
        this.setState({ data });
    }
    handleClickClear = (event, key) => {
        console.log("Clear");
        event.stopPropagation();
        this.setState({
            [key]: {
                name: "",
                material: "",
                size_detail: "",
                weight_unit: "",
                width: "",
                weight: "",
                solder_width: "",
                surface_area: "",
                paint_directive: "",
                drawing_number: "",
            }
        })
    }
    render() {
        const {
            data,
            dataColumn
        } = this.state
        return (
            <>
                <div className="action-center">
                    <p>Nhập cấu kiện cột</p>
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
                    <Table dataColumn={dataColumn} dataRow={data.shiguichi} />
                    <div className="right-menu">
                        <div className="right-menu-header">
                            <button>Excel Import</button>
                            <button> &#60; Nhập liên tục</button>
                        </div>
                        <div className="input-menu">
                            <ul>
                                <li><span>Tên Cột</span><Select /></li>
                            </ul>
                            <ul className="sub-menu">
                                <li>
                                    <Button
                                        titleButton="Nhập thông số cơ bản Shiguchi..."
                                        onClickButton={e => this.handleClickButton(e, "paramsShiguichi")}
                                        classNameButton={this.state.paramsShiguichi ? "active" : ""}
                                    />

                                </li>
                                <ul>
                                    <li>
                                        <Button
                                            titleButton="Shiguichi 1"
                                            onClickButton={e => this.handleClickButton(e, "shiguichiClick")}
                                            classNameButton={this.state.shiguichiClick ? "active" : ""}
                                        />
                                        <Button titleButton="Shiguichi 2" />
                                        <Button titleButton="Shiguichi 3" />
                                    </li>
                                    <Button iconButton={icons.icon_arrow_right} classNameButton="next-item" />
                                </ul>
                            </ul>
                            {
                                this.state.paramsShiguichi === true ?
                                    <ShiguichiComponent /> :
                                    this.state.shiguichiClick === true ?
                                        <ShiguichiComponent
                                            infoShiguichi="true"
                                            handleClickOk={this.handleClickOk}
                                            handleClickClear={this.handleClickClear}
                                            handleSelect={this.handleSelect}
                                        /> :
                                        null
                            }

                            <ul className="sub-menu">
                                <li>
                                    <Button
                                        titleButton="Nhập thông số cơ bản Braketto..."
                                        onClickButton={e => this.handleClickButton(e, "paramsBraketto")}
                                        classNameButton={this.state.paramsBraketto ? "active" : ""}
                                    />
                                </li>
                                <ul>
                                    <li>
                                        <Button
                                            titleButton="Braketto 1"
                                            onClickButton={e => this.handleClickButton(e, "brakettoClick")}
                                            classNameButton={this.state.brakettoClick ? "active" : ""}
                                        />
                                        <Button titleButton="Braketto 2" />
                                        <Button titleButton="Braketto 3" />
                                    </li>
                                    <Button iconButton={icons.icon_arrow_right} classNameButton="next-item" />
                                </ul>
                            </ul>
                            {
                                this.state.paramsBraketto === true ?
                                    <BrakettoComponent /> :
                                    this.state.brakettoClick === true ?
                                        <BrakettoComponent
                                            infoBraketto="true"
                                            handleClickOk={this.handleClickOk}
                                            handleClickClear={this.handleClickClear}
                                            handleSelect={this.handleSelect}
                                        /> : null
                            }

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default InputColumnsComponents