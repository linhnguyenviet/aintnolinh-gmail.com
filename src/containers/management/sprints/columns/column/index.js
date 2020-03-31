import React, { Component } from "react";
import "./style.scss";
import Button from '../../../../../components/common/button'
import ShiguichiColumnSprint from "./shiguichi";

const buttons = {
    shiguichi: false,
    shafuto: false
}

export default class ColumnComponentSprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...buttons,
        };
        this.handleClickButton = this.handleClickButton.bind(this);
    }
    componentDidMount() {
        this.setState({
            shiguichi: true
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
            <>
                <div className="setup-button">
                    <Button
                        titleButton="Shiguichi"
                        onClickButton={e => this.handleClickButton(e, "shiguichi")}
                        classNameButton={this.state.shiguichi ? "active" : ""}
                    />
                    <Button titleButton="Shafuto" />
                    <Button titleButton="Lắp chính" />
                </div>
                <div className="columns-sprint">
                    {
                        this.state.shiguichi ? <ShiguichiColumnSprint /> : null
                    }
                </div>
            </>
        )
    }
}