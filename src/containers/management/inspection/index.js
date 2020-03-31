import React, { Component } from "react";
import "./style.scss";
import UTInhouseInspection from "./UT_inhouse";
import ProductInhouseInspection from "./product_inhouse";
import GeneralInspection from "./general";
import DeclareInspection from "./declare";
import UTThirdPartiesInspection from "./UT_third_parties";

const menus = {
    ut_inhouse: false,
    ut_third_parties: false,
    product_inhouse: false,
    general: false,
    declare: false
}

export default class InspectionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { ...menus };
        this.handleClickMenu = this.handleClickMenu.bind(this);
    }
    handleClickMenu(event, key) {
        event.stopPropagation();
        this.setState({
            ...menus,
            [key]: true
        })
    }
    componentDidMount() {
        this.setState({
            ut_inhouse: true
        })
    }
    render() {
        return (
            <div className="FMCT1410">
                <div className="menu">
                    <ul>
                        <li key="ut_inhouse" onClick={event => this.handleClickMenu(event, "ut_inhouse")} className={this.state.ut_inhouse ? "active" : ""}><span>Kiểm tra UT nội bộ</span></li>
                        <li key="product_inhouse" onClick={event => this.handleClickMenu(event, "product_inhouse")} className={this.state.product_inhouse ? "active" : ""}><span>Kiểm Tra Sản Phẩm Nội Bộ</span></li>
                        <li key="ut_third_parties" onClick={event => this.handleClickMenu(event, "ut_third_parties")} className={this.state.ut_third_parties ? "active" : ""}><span>Kiểm Tra UT Công Ty Thứ 3</span></li>
                        <li key="general" onClick={event => this.handleClickMenu(event, "general")} className={this.state.general ? "active" : ""}><span>Tổng Hợp</span></li>
                        <li key="declare" onClick={event => this.handleClickMenu(event, "declare")} className={this.state.declare ? "active" : ""}><span>Khai Báo</span></li>
                    </ul>
                </div>
                {
                    this.state.ut_inhouse ? <UTInhouseInspection /> : null
                }
                {
                    this.state.product_inhouse ? <ProductInhouseInspection /> : null
                }
                {
                    this.state.general ? <GeneralInspection /> : null
                }
                {
                    this.state.declare ? <DeclareInspection /> : null
                }
                {
                    this.state.ut_third_parties ? <UTThirdPartiesInspection /> : null
                }

            </div>
        )
    }
}