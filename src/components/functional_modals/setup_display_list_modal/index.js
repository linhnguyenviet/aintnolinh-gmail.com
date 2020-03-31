import React, { Component } from "react";
import Button from "../../common/button";
import icons from "../../../constants/icons"

import './style.scss'
import Input from "../../common/input";


export default class SetupDisplayListModal extends Component {
    render() {
        var data = [];

        for (let i = 1; i < 30; i++) {
            data.push(
                <li><Input typeInput="checkbox" /><span>Lorem</span></li>
            )
        }
        return (
            <div className="modal">
                <div className="header">
                    <span>Cài đặt hiển thị list</span>
                    <span className="control-button">
                        <Button iconButton={icons.icon_minimize} />
                        <Button iconButton={icons.icon_maximize} />
                        <Button iconButton={icons.icon_close_modal} onClickButton={this.props.closeModal} />
                    </span>
                </div>
                <div className="content">
                    <div className="data-table">
                        <ul>
                            {data}
                        </ul>
                    </div>
                    <div className="action-menu">
                        <div className="action-menu-content">
                            <Button titleButton="Chọn toàn bộ" />
                            <Button titleButton="Xóa toàn bộ" />
                            <Button titleButton="Xóa" />
                            <Button titleButton="Thay thế" />
                            <Button iconButton={icons.icon_arrow_up} />
                            <Button iconButton={icons.icon_arrow_down} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Button titleButton="Okay" />
                    <Button titleButton="Thoát" onClickButton={this.props.closeModal} />
                </div>
            </div>
        )
    }
}