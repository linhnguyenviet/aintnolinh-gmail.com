import React, { Component } from "react";
import ActionButtons from '../../../../components/action-buttons'
import Button from '../../../../components/common/button'
import icons from '../../../../constants/icons'
import "./style.scss";
import Input from "../../../../components/common/input";
import Table from "../../../../components/common/table";


export default class HistoryProcessing extends Component {
    render() {
        return (
            <div className="history-processing">
                <div className="action-center">
                    <div className="date-control">
                        <div className="date-picker">
                            <img src={icons.icon_calendar} alt="calendar" />
                            <Input typeInput="date" />
                        </div>
                        <div className="date-button">
                            <Button titleButton="Today" />
                            <Button titleButton="Weekly" />
                            <Button titleButton="Monthly" />
                        </div>
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
                <Table />
            </div>
        )
    }
}