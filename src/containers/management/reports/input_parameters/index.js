import React, { Component } from "react";
import "./style.scss";
import Button from '../../../../components/common/button'
import ActionButtons from '../../../../components/action-buttons'
import Input from '../../../../components/common/input'
import icons from '../../../../constants/icons'
import SetupChart from "./setup_chart";
import SetupPaper from "./setup_paper";


const buttons = {
    setup_chart: false,
    setup_map: false,
    setup_paper: false
}

export default class InputParameterReport extends Component {
    constructor(props) {
        super(props);
        this.state = { ...buttons };
        this.handleClickButton = this.handleClickButton.bind(this);
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
    componentDidMount() {
        this.setState({
            setup_chart: true
        })
    }
    render() {
        return (
            <div className="input-parameter-report">
                <div className="action-center">
                    <div className="left-control">
                        <Button titleButton="Cài Đặt Mẫu Giấy" onClickButton={e => this.handleClickButton(e, "setup_paper")} classNameButton={this.state.setup_paper ? "active" : ""} />
                        <Button titleButton="Cài Đặt Biểu Đồ" onClickButton={e => this.handleClickButton(e, "setup_chart")} classNameButton={this.state.setup_chart ? "active" : ""} />
                        <Button titleButton="Cài Đặt Bản Đồ" onClickButton={e => this.handleClickButton(e, "setup_map")} classNameButton={this.state.setup_map ? "active" : ""} />
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
                {this.state.setup_chart ? <SetupChart /> :
                    this.state.setup_paper ? <SetupPaper /> :
                        null}
            </div>
        )
    }
}