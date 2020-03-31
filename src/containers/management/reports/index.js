import React, { Component } from "react";
import "./style.scss";
import Report from "./report";
import MapReports from "./map";
import InputParameterReport from "./input_parameters";


const menus = {
    map: false,
    report: false,
    input_parameter: false
}

export default class ReportsScreen extends Component {
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
            report: true
        })
    }
    render() {
        return (
            <div className="reports-screen">
                <div className="menu">
                    <ul>
                        <li key="report" onClick={event => this.handleClickMenu(event, "report")} className={this.state.report ? "active" : ""}><span>Báo Cáo</span></li>
                        <li key="map" onClick={event => this.handleClickMenu(event, "map")} className={this.state.map ? "active" : ""}><span>Bản Đồ</span></li>
                        <li key="input_parameter" onClick={event => this.handleClickMenu(event, "input_parameter")} className={this.state.input_parameter ? "active" : ""}><span>Thông Số Đầu Vào</span></li>
                    </ul>
                </div>
                {
                    this.state.report ? <Report /> :
                        this.state.map ? <MapReports /> :
                            this.state.input_parameter ? <InputParameterReport /> :
                                null
                }
            </div>
        )
    }
}