import React, { Component } from 'react';
import Input from '../../../../../components/common/input';
import Select from '../../../../../components/common/select';
import Button from '../../../../../components/common/button';

export default class PropComponent extends Component {
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
                {
                    this.props.infoProp ?
                        <li>
                            <span>Tên</span>
                            <Input
                                typeInput="text"
                                nameInput="name"
                                onchangeInput={e => this.handleSelect(e, "prop")}
                            />
                        </li> :
                        <li>
                            <span>Số lượng thanh đứng</span>
                            <Input
                                typeInput="number"
                                nameInput="name"
                                onchangeInput={e => this.handleSelect(e, "prop")}
                            />
                        </li>
                }
                <li>
                    <span>Chất liệu</span>
                    <Select
                        nameSelect="material"
                        onchangeSelect={e => this.handleSelect(e, "prop")}
                    />
                </li>
                <li>
                    <span>Kích thước</span>
                    <Select
                        nameSelect="size_detail"
                        onchangeSelect={e => this.handleSelect(e, "prop")}
                    />
                </li>
                <li>
                    <span>Trọng lượng đơn vị</span>
                    <Input
                        typeInput="text"
                        nameInput="weight_unit"
                        onchangeInput={e => this.handleSelect(e, "prop")}
                    />
                </li>
                <li>
                    <span>Chiều dài</span>
                    <Input
                        typeInput="text"
                        nameInput="width"
                        onchangeInput={e => this.handleSelect(e, "prop")}
                    />
                </li>
                <li>
                    <span>Trọng lượng</span>
                    <Input
                        typeInput="text"
                        nameInput="weight"
                        onchangeInput={e => this.handleSelect(e, "prop")}
                    />
                </li>
                <li>
                    <span>Chiều dài hàn</span>
                    <Input
                        typeInput="text"
                        nameInput="solder_width"
                        onchangeInput={e => this.handleSelect(e, "prop")}
                    />
                </li>
                <li>
                    <span>Diện tích bề mặt</span>
                    <Input
                        typeInput="text"
                        nameInput="surface_area"
                        onchangeInput={e => this.handleSelect(e, "prop")}
                    />
                </li>
                <li>
                    <Button titleButton="Okay" onClickButton={e => this.props.handleClickOk(e, "prop")} />
                    <Button titleButton="Clear" onClickButton={e => this.props.handleClickClear(e, "prop")} />
                </li>
            </ul>
        )
    }
}