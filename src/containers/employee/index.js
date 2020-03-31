import React, { Component } from "react";
import "./style.scss";
import Header from "../../components/header";
import Button from "../../components/common/button";
import icons from "../../constants/icons";
import PresenceEmployee from "./presence";
import ManageEmployee from "./manage_employee";
import DeclareEmployeeScreen from "./declare_employee";
import PayrollManagement from "./payroll_management";
import DeclareSalaryScreen from "./declare_salary";

const menus = {
    presence: false,
    employee_management: false,
    employee_declared: false,
    payroll_management: false,
    salary_declared: false,
}



export default class EmployeeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { ...menus };
        this.handleClickMenu = this.handleClickMenu.bind(this)
    }
    handleClickMenu(event, key) {
        event.stopPropagation();
        this.setState({
            ...menus,
            [key]: true
        })
    }
    render() {
        var inputs = [
            ["presence", "Chấm Công"],
            ["employee_management", "Quản Lí Nhân Viên"],
            ["employee_declared", "Khai Báo Nhân Viên"],
            ["payroll_management", "Quản Lí Lương"],
            ["salary_declared", "Khai Báo Thông Tin Lương"]
        ];
        return (
            <div className="manage-employee">
                <Header />
                <div className="title-ct">
                    <Button iconButton={icons.icon_back} />
                    <span className="title-1">Nhân viên :</span>
                </div>
                <div className="mini-menu-bar">
                    <ul>
                        {
                            inputs.map((value, index) => (
                                <li key={index} onClick={event => this.handleClickMenu(event, value[0])}>
                                    <span>{value[1]}</span>
                                </li>
                            ))}
                    </ul>
                </div>
                {
                    this.state.presence ? <PresenceEmployee /> : null
                }
                {
                    this.state.employee_management ? <ManageEmployee /> : null
                }
                {
                    this.state.employee_declared ? <DeclareEmployeeScreen /> : null
                }
                {
                    this.state.payroll_management ? <PayrollManagement /> : null
                }
                {
                    this.state.salary_declared ? <DeclareSalaryScreen /> : null
                }

            </div>
        )
    }
}
