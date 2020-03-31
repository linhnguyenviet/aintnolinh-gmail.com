import React, { Component } from "react";
import "./style.scss";
import Button from '../../../../components/common/button'
import ColumnComponentSprint from "./column";

const buttons = {
    column: false
}

export default class ColumnsSprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...buttons,
        };
        this.handleClickButton = this.handleClickButton.bind(this);
    }
    componentDidMount() {
        this.setState({
            column: true
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
            <div className="columns-sprint">
                <div className="setup-button">
                    <Button
                        titleButton="Cột"
                        onClickButton={e => this.handleClickButton(e, "column")}
                        classNameButton={this.state.column ? "active" : ""}
                    />
                    <Button titleButton="Cột chữ H" />
                    <Button titleButton="Cột chữ thập" />
                    <Button titleButton="Cột BIBOX" />
                </div>
                {
                    this.state.column ? <ColumnComponentSprint /> : null
                }
            </div>

        )
    }
}