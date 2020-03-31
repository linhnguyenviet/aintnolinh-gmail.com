import React, { Component } from "react";
import ActionButtons from '../../../components/action-buttons'
import Button from '../../../components/common/button'
import icons from '../../../constants/icons'
import "./style.scss";
import Input from "../../../components/common/input";
import PresenceMap from "./presence_map";
import PresenceInfo from "./presence_info";

const buttons = {
    presence_info: false,
    presence_map: false
}

export default class PresenceEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { ...buttons };
        this.handleClickButton = this.handleClickButton.bind(this)
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
    render() {
        return (
            <div className="presence-employee">
                <div className="action-center">
                    <div className="date-control">
                        <div className="date-button">
                            <Button titleButton="Today" />
                        </div>
                        <div className="date-picker">
                            <img src={icons.icon_calendar} alt="calendar" />
                            <Input typeInput="date" />
                        </div>
                    </div>
                </div>
                <div className="presence-content">
                    <div className="presence-left-content">
                        <div className="button-control">
                            <div className="left-buttons">
                                <Button
                                    titleButton="Thông Tin Chấm Công"
                                    onClickButton={e => this.handleClickButton(e, "presence_info")}
                                    classNameButton={this.state.presence_info ? "active" : ""}
                                />
                                <Button
                                    titleButton="Bản Đồ"
                                    onClickButton={e => this.handleClickButton(e, "presence_map")}
                                    classNameButton={this.state.presence_map ? "active" : ""}
                                />
                            </div>
                            <div className="right-button">
                                <ActionButtons />
                                <div className="action-button">
                                    <form className="search">
                                        <Input typeInput="text" placeholderInput="Search" />
                                        <Button iconButton={icons.icon_search} />
                                    </form>
                                    <Button classNameButton="add" iconButton={icons.icon_plus} />
                                </div>
                            </div>
                        </div>
                        {
                            this.state.presence_info ? <PresenceInfo /> : this.state.presence_map ? <PresenceMap /> : null
                        }
                    </div>
                    <div className="presence-right-content">
                        <div className="button-control">
                            <Button titleButton="Thông Tin Nghỉ Việc" />
                            <Button classNameButton="add" iconButton={icons.icon_plus} />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td><span>Mã nhân viên</span></td>
                                    <td><span>Tên nhân viên</span></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><span>001</span></td><td></td></tr>
                                <tr><td><span>002</span></td><td></td></tr>
                                <tr><td><span>003</span></td><td></td></tr>
                                <tr><td><span>004</span></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                                <tr><td></td><td></td></tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><span>Thống kê</span></td>
                                    <td><span></span></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}