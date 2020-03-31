import React, { Component } from "react";
import "./style.scss";
import InputParametersScreen from "./input_parameters";
import ShipmentPlan from "./shipment_plan";
import ShippingDocument from "./shipping_document";
import MapReports from "./map";

const menus = {
    input_data: false,
    shipment_plan: false,
    shipping_document: false,
    map: false,
}

export default class ShipmentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { ...menus };
        this.handleClickMenu = this.handleClickMenu.bind(this);
        //this.handleClickButton = this.handleClickButton.bind(this);
    }
    componentDidMount() {
        this.setState({
            shipment_plan: true,
        })
    }

    handleClickMenu(event, key) {
        event.stopPropagation();
        this.setState({
            ...menus,
            [key]: true
        })
    }
    render() {
        return (
            <div className="shipment-manager">
                <div className="menu">
                    <ul>
                        <li key="input_data" onClick={event => this.handleClickMenu(event, "input_data")} className={this.state.input_data ? "active" : ""}><span>Thông Số Đầu Vào</span></li>
                        <li key="shipment_plan" onClick={event => this.handleClickMenu(event, "shipment_plan")} className={this.state.shipment_plan ? "active" : ""}><span>Kế Hoạch Xuất Hàng</span></li>
                        <li key="shiping_document" onClick={event => this.handleClickMenu(event, "shipping_document")} className={this.state.shipping_document ? "active" : ""}><span>Tài Liệu Xuất Hàng</span></li>
                        <li key="map" onClick={event => this.handleClickMenu(event, "map")} className={this.state.map ? "active" : ""}><span>Bản Đồ</span></li>
                    </ul>
                </div>
                {
                    this.state.input_data ? <InputParametersScreen /> : null
                }
                {
                    this.state.shipment_plan ? <ShipmentPlan /> : null
                }
                {
                    this.state.shipping_document ? <ShippingDocument /> : null
                }
                {
                    this.state.map ? <MapReports /> : null
                }
            </div>
        );
    }
}
