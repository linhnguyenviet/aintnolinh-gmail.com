import React, { Component } from 'react';
import './style.scss';
import ActionButtons from "../../../../components/action-buttons";
import Button from "../../../../components/common/button";
import icons from "../../../../constants/icons";
import Input from "../../../../components/common/input";
import Table from "../../../../components/common/table"
const buttons = {
    table: false,
    price_table: false
}

export default class OriginalDataScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...buttons,
        };
        this.handleClickButton = this.handleClickButton.bind(this);
    }
    componentDidMount() {
        this.setState({
            table: true
        })
    }
    handleClickButton(event, key) {
        event.stopPropagation();
        this.setState(
            prevState => {
                return {
                    ...buttons,
                    [key]: !prevState[key]
                }
            }
        );
    }
    render() {
        return (
            <div className="original-data">
                <div className="action-center">
                    <div className="left-control">
                        <Button
                            titleButton="Bảng vật liệu"
                            onClickButton={e => this.handleClickButton(e, "table")}
                            classNameButton={this.state.table ? "active" : ""}
                        />
                        <Button
                            titleButton="Bảng giá vật liệu"
                            onClickButton={e => this.handleClickButton(e, "price_table")}
                            classNameButton={this.state.price_table ? "active" : ""}
                        />
                    </div>
                    <div className="button-control">
                        <ActionButtons />
                        <div className="action-button">
                            <form className="search">
                                <Input typeInput="text" placeholderInput="Search" />
                                <Button iconButton={icons.icon_search} />
                            </form>
                            <Button iconButton={icons.icon_add} titleButton="Thêm" />
                            <Button iconButton={icons.icon_edit} titleButton="Sửa" />
                            <Button iconButton={icons.icon_delete} titleButton="Xóa" />
                        </div>
                    </div>
                </div>
                <Table />
            </div>
        )
    }

}