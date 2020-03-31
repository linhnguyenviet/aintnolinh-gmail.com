import React, { Component } from 'react'
import './style.scss'
import Button from '../../../../../components/common/button'
import Input from '../../../../../components/common/input'
import icons from '../../../../../constants/icons'
import ActionButtons from '../../../../../components/action-buttons'
import OverviewOtherReport from './overview'
import DetailsOthersReport from './details'

const buttons = {
    overview_report: false,
    details_report: false,
}

export default class OthersReport extends Component {
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
    render() {
        return (
            <div className="overall-report">
                <div className="action-center">
                    <div className="left-control">
                        <Button titleButton="Báo cáo tổng thể" onClickButton={e => this.handleClickButton(e, "overview_report")} classNameButton={this.state.overview_report ? "active" : ""} />
                        <Button titleButton="Báo cáo chi tiết" onClickButton={e => this.handleClickButton(e, "details_report")} classNameButton={this.state.details_report ? "active" : ""} />
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
                    this.state.overview_report ? <OverviewOtherReport /> : this.state.details_report ? <DetailsOthersReport /> : null
                }
            </div>
        )
    }
}