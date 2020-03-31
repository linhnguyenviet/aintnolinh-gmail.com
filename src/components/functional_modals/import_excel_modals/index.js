import React, { Component } from "react";
import Button from "../../common/button";
import icons from "../../../constants/icons"
import Select from "../../common/select/index"

import './style.scss'


export default class ImportExcelModal extends Component {
    render() {
        return (
            <div className="modal">
                <div className="header">
                    <span>Excel Import</span>
                    <span className="control-button">
                        <Button iconButton={icons.icon_minimize} />
                        <Button iconButton={icons.icon_maximize} />
                        <Button iconButton={icons.icon_close_modal} onClickButton={this.props.closeModal} />
                    </span>
                </div>
                <div className="content">
                    <div className="data-table">
                        <table>
                            <thead>
                                <tr>
                                    <td><span>Tên file/ Thư mục</span></td>
                                    <td><span>Đường dẫn</span></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>Text 1</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>Text 1</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>Text 1</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>Text 1</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>Text 1</span></td>
                                    <td></td>
                                </tr> <tr>
                                    <td><span>Text 1</span></td>
                                    <td></td>
                                </tr> <tr>
                                    <td><span>Text 1</span></td>
                                    <td></td>
                                </tr> <tr>
                                    <td><span>Text 1</span></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="action-menu">
                        <div className="action-menu-header">
                            <span>Import hạng mục</span>
                            <Select />
                        </div>
                        <div className="action-menu-content">
                            <Button titleButton="Thêm file" />
                            <Button titleButton="Thêm thư mục" />
                            <Button titleButton="Xóa" />
                            <Button titleButton="Xóa toàn bộ" />
                            <Button iconButton={icons.icon_arrow_up} />
                            <Button iconButton={icons.icon_arrow_down} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Button titleButton="Okay" />
                    <Button titleButton="Xem thử" />
                    <Button titleButton="Thoát" onClickButton={this.props.closeModal} />
                </div>
            </div>
        )
    }
}