import React, { Component } from 'react';
import Input from '../../../../../components/common/input';
import Select from '../../../../../components/common/select';
import Button from '../../../../../components/common/button';

export default class UpperTrussComponent extends Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(e, key) {
        return this.props.handleSelect(e, key)
    }
    render() {
        return (
            <ul className="sub-content">
                <li>
                    <span>Số lượng thanh xiên</span>
                    <Input
                        typeInput="text"
                        nameInput="slant_bar_quantity"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}

                    />
                </li>
                <li>
                    <span>Tên</span>
                    <Select
                        nameSelect="name_truss"
                        onchangeSelect={e => this.handleSelect(e, "upper_truss")}
                    />
                </li>
                <li>
                    <span>Kích thước</span>
                    <Select
                        nameSelect="size_detail_truss"
                        onchangeSelect={e => this.handleSelect(e, "upper_truss")}
                    />
                </li>
                <li>
                    <span>Trọng lượng đơn vị</span>
                    <Input
                        typeInput="text"
                        nameInput="weight_unit_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    />
                </li>
                <li>
                    <span>Chiều dài</span>
                    <Input
                        typeInput="text"
                        nameInput="width_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    />
                </li>
                <li>
                    <span>Trọng lượng</span>
                    <Input
                        typeInput="text"
                        nameInput="weight_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    />
                </li>
                <li>
                    <span>Chiều dài hàn</span>
                    <Input
                        typeInput="text"
                        nameInput="solder_width_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    />
                </li>
                <li>
                    <span>Diện tích bề mặt</span>
                    <Input
                        typeInput="text"
                        nameInput="surface_area_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    />
                </li>
                <li>
                    <span>Bản nối trái</span>
                    <Input
                        typeInput="text"
                        nameInput="left_connector_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    /></li>
                <li>
                    <span>Bản nối phải</span>
                    <Input
                        typeInput="text"
                        nameInput="right_connector_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    /></li>
                <li>
                    <span>Đỡ xiên trái</span>
                    <Input
                        typeInput="text"
                        nameInput="left_slant_bar_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    /></li>
                <li>
                    <span>Đỡ xiên phải</span>
                    <Input
                        typeInput="text"
                        nameInput="right_slant_bar_truss"
                        onchangeInput={e => this.handleSelect(e, "upper_truss")}
                    />
                </li>
                <li>
                    <Button titleButton="Okay" onClickButton={e => this.props.handleClickOk(e, "upper_truss")} />
                    <Button titleButton="Clear" onClickButton={e => this.props.handleClickClear(e, "upper_truss")} />
                </li>
            </ul>
        )
    }
}