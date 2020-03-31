import React, { Component } from 'react'
import './style.scss'
import Button from '../../../../components/common/button'
import ActionButtons from '../../../../components/action-buttons'
import icons from '../../../../constants/icons'
import Input from '../../../../components/common/input'
import StockOutInstruction from './stock_out'
import VehicleCoordination from './vehicle_coordination'

const buttons = {
    stock_out_instructions: false,
    vehicle_coordination: false
}

export default class ShippingDocument extends Component {
    constructor(props) {
        super(props);
        this.state = { ...buttons };
        this.handleClickButton = this.handleClickButton.bind(this);

    }
    componentDidMount() {
        this.setState({
            stock_out_instructions: true
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
            <div className="shipping-document">
                <div className="action-center">
                    <div className="label-button">
                        <div>
                            <Button titleButton="Chỉ Thị Xuất Hàng" onClickButton={e => this.handleClickButton(e, "stock_out_instructions")} classNameButton={this.state.stock_out_instructions ? "active" : ""} />
                            <Button titleButton="Bảng Điều Phối Xe" onClickButton={e => this.handleClickButton(e, "vehicle_coordination")} classNameButton={this.state.vehicle_coordination ? "active" : ""} />
                        </div>
                        <div className="title-label">
                            <span>Nhập tài liệu xuất hàng</span>
                        </div>
                    </div>
                    <div className="label-button">
                        <div>
                            <Button titleButton="Chỉ Thị Xuất Hàng" />
                            <Button titleButton="Bảng Điều Phối Xe" />
                            <Button titleButton="Thông Tin Xuất Hàng" />
                            <Button titleButton="Tổng Hợp Xe" />
                        </div>
                        <div className="title-label">
                            <span>Nhập tài liệu xuất hàng</span>
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
                {
                    this.state.stock_out_instructions ? <StockOutInstruction /> : this.state.vehicle_coordination ? <VehicleCoordination /> : null
                }



            </div>
        )
    }
}