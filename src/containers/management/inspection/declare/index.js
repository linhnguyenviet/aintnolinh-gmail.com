import React, { Component } from "react";
import "./style.scss";
import ActionButtons from '../../../../components/action-buttons'
import Button from '../../../../components/common/button'
import icons from '../../../../constants/icons'
import Input from "../../../../components/common/input"
import ColumnDeclare from "./colums";
import PrimaryGirderDeclare from "./primary_girder";

const buttons = {
    columns: false,
    primary_girder: false
}

export default class DeclareInspection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...buttons
        }
        this.handleClickButton = this.handleClickButton.bind(this);
    }
    componentDidMount() {
        this.setState({
            columns: true
        })
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
            <div className="declare-inspection">
                <div className="action-center">
                    <div className="left-control">
                        <Button titleButton="Cột" onClickButton={e => this.handleClickButton(e, "columns")} classNameButton={this.state.columns ? "active" : ""} />
                        <Button titleButton="Dầm chính" onClickButton={e => this.handleClickButton(e, "primary_girder")} classNameButton={this.state.primary_girder ? "active" : ""} />
                        <Button titleButton="Dầm phụ" />
                        <Button titleButton="Cột phụ" />
                        <Button titleButton="Giằng" />
                        <Button titleButton="Khác" />
                    </div>
                    <div className="button-control">
                        <ActionButtons />
                        <div className="action-button">
                            <form className="search">
                                <Input typeInput="text" placeholderInput="Search" />
                                <Button iconButton={icons.icon_search} />
                            </form>
                            <button className="add">
                                <img src={icons.icon_plus} alt="add" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="setup-button">
                    <Button titleButton="Import" />
                    <Button titleButton="Thêm" />
                    <Button titleButton="Cài đặt khổ giấy" />
                </div>
                {
                    this.state.columns ? <ColumnDeclare /> : null
                }
                {
                    this.state.primary_girder ? <PrimaryGirderDeclare /> : null
                }
            </div>
        )
    }
}