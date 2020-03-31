import React, { Component } from 'react'
import './style.scss'
import Button from '../../../../components/common/button'
import Input from '../../../../components/common/input'
import icons from '../../../../constants/icons'
import Select from '../../../../components/common/select'
import OverallReport from './overall'
import ColumnsReport from './columns'
import PrimaryGirderReport from './primary_girder'
import SecondaryGirderReport from './secondary_girder'
import SecondaryColumnsReport from './secondary_columns'
import BeamReport from './beam'
import TrussReport from './truss'
import OthersReport from './other'
const buttons = {
    overall: false,
    columns: false,
    primary_girder: false,
    secondary_girder: false,
    secondary_columns: false,
    beam: false,
    truss: false,
    others: false,

}

export default class Report extends Component {
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
            columns: true
        })
    }
    render() {
        return (
            <div className="report">
                <div className="setup-button">
                    <Button titleButton="Tổng thể" onClickButton={e => this.handleClickButton(e, "overall")} classNameButton={this.state.overall ? "active" : ""} />
                    <Button titleButton="Cột" onClickButton={e => this.handleClickButton(e, "columns")} classNameButton={this.state.columns ? "active" : ""} />
                    <Button titleButton="Dầm chính" onClickButton={e => this.handleClickButton(e, "primary_girder")} classNameButton={this.state.primary_girder ? "active" : ""} />
                    <Button titleButton="Dầm phụ" onClickButton={e => this.handleClickButton(e, "secondary_girder")} classNameButton={this.state.secondary_girder ? "active" : ""} />
                    <Button titleButton="Cột phụ" onClickButton={e => this.handleClickButton(e, "secondary_columns")} classNameButton={this.state.secondary_columns ? "active" : ""} />
                    <Button titleButton="Giằng" onClickButton={e => this.handleClickButton(e, "beam")} classNameButton={this.state.beam ? "active" : ""} />
                    <Button titleButton="Giàn" onClickButton={e => this.handleClickButton(e, "truss")} classNameButton={this.state.truss ? "active" : ""} />
                    <Button titleButton="Khác" onClickButton={e => this.handleClickButton(e, "others")} classNameButton={this.state.others ? "active" : ""} />
                </div>
                <div className="selection-control">
                    <div className="date-control">
                        <Button titleButton="Thời kì" />
                        <p>Từ</p>
                        <div className="date-picker">
                            <img src={icons.icon_calendar} alt="calendar" />
                            <Input typeInput="date" />
                        </div>
                        <p>Đến</p>
                        <div className="date-picker">
                            <img src={icons.icon_calendar} alt="calendar" />
                            <Input typeInput="date" />
                        </div>
                    </div>
                    <div>
                        <Button titleButton="Khu" />
                        <Select />
                    </div>
                    <div>
                        <Button titleButton="Hiển thị" />
                        <Select />
                    </div>
                </div>
                {
                    this.state.overall ? <OverallReport /> :
                        this.state.columns ? <ColumnsReport /> :
                            this.state.primary_girder ? <PrimaryGirderReport /> :
                                this.state.secondary_girder ? <SecondaryGirderReport /> :
                                    this.state.secondary_columns ? <SecondaryColumnsReport /> :
                                        this.state.beam ? <BeamReport /> :
                                            this.state.truss ? <TrussReport /> :
                                                this.state.others ? <OthersReport /> :
                                                    null
                }
            </div>
        )
    }
}