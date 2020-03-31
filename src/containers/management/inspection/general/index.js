import React, { Component } from "react";
import "./style.scss";
import ActionButtons from '../../../../components/action-buttons'
import Button from '../../../../components/common/button'
import icons from '../../../../constants/icons'
import Input from "../../../../components/common/input";
import OverviewGeneral from "./overview";
import FailureGeneral from "./failure";
import PassedGeneral from "./passed";

const buttons = {
    overview: false,
    passed: false,
    failure: false
}

export default class GeneralInspection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...buttons
        }
        this.handleClickButton = this.handleClickButton.bind(this)
    }
    componentDidMount() {
        this.setState({
            overview: true
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
            <div className="general-inspection">
                <div className="action-center">
                    <div className="left-control">
                        <Button titleButton="Tổng thể" onClickButton={e => this.handleClickButton(e, "overview")} classNameButton={this.state.overview ? "active" : ""} />
                        <Button titleButton="Đạt" onClickButton={e => this.handleClickButton(e, "passed")} classNameButton={this.state.passed ? "active" : ""} />
                        <Button titleButton="Khiếm khuyết" onClickButton={e => this.handleClickButton(e, "failure")} classNameButton={this.state.failure ? "active" : ""} />
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
                {
                    this.state.overview ? <OverviewGeneral /> :
                        this.state.failure ? <FailureGeneral /> :
                            this.state.passed ? <PassedGeneral /> : null
                }
            </div>
        )
    }
}