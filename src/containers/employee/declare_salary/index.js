import React, { Component } from 'react'
import './style.scss'
import Button from '../../../components/common/button'
import PreviewSalary from './preview'
import PaperSetup from './paper_setup'

const buttons = {
    preview: false,
    paper_setup: false
}

export default class DeclareSalaryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { ...buttons };
        this.handleClickButton = this.handleClickButton.bind(this);
    }
    handleClickButton(event, key) {
        event.stopPropagation();
        this.setState({
            ...buttons,
            [key]: true
        });
    }
    render() {

        return (
            <>
                <div className="declare-screen">
                    <div className="action-button">
                        <Button titleButton="Xem trước" onClickButton={e => this.handleClickButton(e, "preview")} classNameButton={this.state.preview ? "active" : ""} />
                        <Button titleButton="Cài đặt khung giấy" onClickButton={e => this.handleClickButton(e, "paper_setup")} classNameButton={this.state.paper_setup ? "active" : ""} />
                    </div>
                </div>
                {
                    this.state.preview ? <PreviewSalary /> : null
                }
                {
                    this.state.paper_setup ? <PaperSetup /> : null
                }
            </>
        )
    }
}