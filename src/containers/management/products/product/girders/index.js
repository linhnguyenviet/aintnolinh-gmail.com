import React, { Component } from "react";
import Table from "../../../../../components/common/table";
import Button from "../../../../../components/common/button";
import Input from "../../../../../components/common/input";
import Select from "../../../../../components/common/select";
import icons from "../../../../../constants/icons";
import PrakettoComponent from "./praketto";
import ActionButtons from "../../../../../components/action-buttons";

const buttons = {
    prakettoClick: false,
    paramsPraketto: false
}

class InputGirderComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...buttons,
            praketto: {
                name: "",
                material: "",
                size_detail: "",
                weight_unit: "",
                width: "",
                weight: "",
                solder_width: "",
                surface_area: ""
            },
            data_praketto: [],
            dataColumn: [
                { name: "Tên giầm chính" },
                { name: "Chỉ thị sơn" },
                { name: "Số hiệu bản vẽ" },
                { name: "Bản số trái" },
                { name: "Bản số phải" },
                { name: "Đỡ xiên trái" },
                { name: "Đỡ xiên phải" },
                { name: "Tên" },
                { name: "Chất liệu" },
                { name: "Kích thước" },
                { name: "Trọng lượng đơn vị" },
                { name: "Chiều dài" },
                { name: "Trọng lượng" },
                { name: "Chiều dài hàn" },
                { name: "Diện tích bề mặt" },
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
        const data_praketto = [...this.state.data_praketto];
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
        data_praketto.push([
            name,
            material,
            size_detail,
            weight_unit,
            width,
            weight,
            solder_width,
            surface_area,
        ]);
        this.setState({ data_praketto });
    }
    handleClickClear = () => {
        console.log("Clear");
    }

    render() {
        const {
            data_praketto,
            dataColumn
        } = this.state
        return (
            <>
                <div className="action-center">
                    <p>Nhập cấu kiện dầm chính</p>
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
                    <Table dataColumn={dataColumn} dataRow={data_praketto} />
                    <div className="right-menu">
                        <div className="right-menu-header">
                            <button>Excel Import</button>
                            <button> &#60; Nhập liên tục</button>
                        </div>
                        <div className="input-menu">
                            <ul>
                                <li><span>Tên dầm chính</span><Select /></li>
                                <li><span>Chỉ thị sơn</span><Input typeInput="text" /></li>
                                <li><span>Số hiệu bản vẽ</span><Select /></li>
                                <li><span>Bản số trái</span><Input typeInput="text" /></li>
                                <li><span>Bản số phải</span><Input typeInput="text" /></li>
                                <li><span>Đỡ xiên trái</span><Input typeInput="text" /></li>
                                <li><span>Đỡ xiên phải</span><Input typeInput="text" /></li>
                            </ul>
                            <ul className="sub-menu">
                                <li>
                                    <Button
                                        titleButton="Nhập thông số cơ bản Praketto..."
                                        onClickButton={e => this.handleClickButton(e, "paramsPraketto")}
                                        classNameButton={this.state.paramsPraketto ? "active" : ""}
                                    />
                                </li>
                                <ul>
                                    <li><Button titleButton="Praketto 1" onClickButton={e => this.handleClickButton(e, "prakettoClick")} classNameButton={this.state.prakettoClick ? "active" : ""} /><Button titleButton="Praketto 2" /></li>
                                    <Button iconButton={icons.icon_arrow_right} classNameButton="next-item" />
                                </ul>
                            </ul>
                            {
                                this.state.paramsPraketto ?
                                    <PrakettoComponent /> :
                                    this.state.prakettoClick ?
                                        <PrakettoComponent
                                            infoPraketto="true"
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
export default InputGirderComponents