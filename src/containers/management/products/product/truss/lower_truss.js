import React, { Component } from 'react';
import Input from '../../../../../components/common/input';
import Select from '../../../../../components/common/select';
import Button from '../../../../../components/common/button';

export default class LowerTrussComponent extends Component {
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
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}

                    />
                </li>
                <li>
                    <span>Tên</span>
                    <Select
                        nameSelect="name"
                        onchangeSelect={e => this.handleSelect(e, "lower_truss")}
                    />
                </li>
                <li>
                    <span>Kích thước</span>
                    <Select
                        nameSelect="size_detail"
                        onchangeSelect={e => this.handleSelect(e, "lower_truss")}
                    />
                </li>
                <li>
                    <span>Trọng lượng đơn vị</span>
                    <Input
                        typeInput="text"
                        nameInput="weight_unit"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    />
                </li>
                <li>
                    <span>Chiều dài</span>
                    <Input
                        typeInput="text"
                        nameInput="width"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    />
                </li>
                <li>
                    <span>Trọng lượng</span>
                    <Input
                        typeInput="text"
                        nameInput="weight"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    />
                </li>
                <li>
                    <span>Chiều dài hàn</span>
                    <Input
                        typeInput="text"
                        nameInput="solder_width"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    />
                </li>
                <li>
                    <span>Diện tích bề mặt</span>
                    <Input
                        typeInput="text"
                        nameInput="surface_area"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    />
                </li>
                <li>
                    <span>Bản nối trái</span>
                    <Input
                        typeInput="text"
                        nameInput="left_connector"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    /></li>
                <li>
                    <span>Bản nối phải</span>
                    <Input
                        typeInput="text"
                        nameInput="right_connector"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    /></li>
                <li>
                    <span>Đỡ xiên trái</span>
                    <Input
                        typeInput="text"
                        nameInput="left_slant_bar"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    /></li>
                <li>
                    <span>Đỡ xiên phải</span>
                    <Input
                        typeInput="text"
                        nameInput="right_slant_bar"
                        onchangeInput={e => this.handleSelect(e, "lower_truss")}
                    />
                </li>
                <li>
                    <Button titleButton="Okay" onClickButton={e => this.props.handleClickOk(e, "lower_truss")} />
                    <Button titleButton="Clear" onClickButton={e => this.props.handleClickClear(e, "lower_truss")} />
                </li>
            </ul>
        )

    }
}