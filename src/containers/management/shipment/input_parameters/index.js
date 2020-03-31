import React, { Component } from "react";
import icons from "../../../../constants/icons";
import ActionButtons from "../../../../components/action-buttons";
import Button from "../../../../components/common/button";
import Input from "../../../../components/common/input";
import "./style.scss";

const menus = {
    transportation: false,
}

class InputParametersScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { ...menus };
        this.handleClickMenu = this.handleClickMenu.bind(this);
        //this.handleClickButton = this.handleClickButton.bind(this);
    }
    componentDidMount() {
        this.setState({
            transportation: true
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
        var rowbody = []
        var data = []

        for (let i = 0; i < 8; i++) {
            rowbody.push(
                <td><span></span></td>
            )
        }
        for (let i = 1; i < 15; i++) {
            data.push(
                <tr>
                    <td>{i}</td>
                    {rowbody}
                </tr>
            )
        }
        return (
            <div className="input-parameter">
                <div className="action-center">
                    <ActionButtons />
                    <div className="action-button">
                        <form className="search">
                            <Input typeInput="text" placeholderInput="Search" />
                            <Button iconButton={icons.icon_search} />
                        </form>
                        <Button titleButton="Okay" />
                        <Button titleButton="Add" />
                        <Button titleButton="Edit" />
                        <Button titleButton="Delete" />
                        <Button titleButton="All Delete" />
                    </div>
                </div>
                <div className="shipment-input-table">
                    <div className="input-info">
                        <ul>
                            <li key="transportation" onClick={event => this.handleClickMenu(event, "transportation")} className={this.state.transportation ? "active" : ""}>
                                <span>Công ty vận tải</span>
                            </li>
                            <li>
                                <span>Thông tin tài xế</span>
                            </li>
                            <li>
                                <span>Nơi xuât hàng</span>
                            </li>
                            <li>
                                <span>Nơi nhập hàng</span>
                            </li>
                            <li>
                                <span>Khu lắp dựng</span>
                            </li>
                        </ul>
                    </div>
                    {
                        this.state.transportation ?
                            (<table>
                                <thead>
                                    <tr>
                                        <td><span>No</span></td>
                                        <td><span>Tên công ty vận tải</span></td>
                                        <td><span>Địa chỉ</span></td>
                                        <td><span>Số điện thoại</span></td>
                                        <td><span>Email</span></td>
                                        <td><span>Fax</span></td>
                                        <td><span>Người quản lí</span></td>
                                        <td><span>Khác</span></td>
                                        <td><span>Dự bị 1</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data}

                                </tbody>
                            </table>) : null
                    }

                </div>
            </div>
        );
    }
}

export default InputParametersScreen;
