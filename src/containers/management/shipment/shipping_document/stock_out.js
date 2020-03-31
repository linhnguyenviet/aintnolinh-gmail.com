import React, { Component } from 'react'
import Input from '../../../../components/common/input';
import Button from '../../../../components/common/button';
import Select from '../../../../components/common/select';

export default class StockOutInstruction extends Component {
    render() {
        var cols = [];
        for (let i = 1; i < 23; i++) {
            cols.push(
                <td><span>text</span></td>
            );
        }
        var rows = [];
        var rowdata = [];

        for (let i = 1; i < 23; i++) {
            rowdata.push(
                <td><span>text</span></td>
            )
        }
        for (var j = 1; j < 20; j++) {
            rows.push(
                <tr key={j}>
                    <td>{j}</td>
                    {rowdata}
                </tr>
            )
        }

        var leftmenu = [];
        for (let i = 1; i < 22; i++) {
            leftmenu.push(
                <div className="check-list">
                    <ul>
                        <li><Input typeInput="checkbox" /><span>All</span><button>Change</button></li>
                        <li><Input typeInput="checkbox" /><span>Lorem</span></li>
                        <li><Input typeInput="checkbox" /><span>Lorem</span></li>
                        <li><Input typeInput="checkbox" /><span>Lorem</span></li>
                        <li><Input typeInput="checkbox" /><span>Lorem</span></li>
                        <li><Input typeInput="checkbox" /><span>Lorem</span></li>
                    </ul>
                </div>
            )
        }
        return (
            <div className="document-content">
                <div className="left-menu-content">
                    {leftmenu}
                </div>
                <table>
                    <thead>
                        <tr>
                            <td><span>No.</span></td>
                            {cols}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <div className="right-menu-content">
                    <div className="right-menu-header">
                        <Button titleButton="Excel Import" />
                        <Button titleButton="Tự động nhập từ list sản phẩm" />
                    </div>
                    <span>Nhập kế hoạch xuất hàng </span>
                    <ul>
                        <li>
                            <span>Nơi xuất hàng</span>
                            <Select />
                        </li>
                        <li>
                            <span>Nơi nhập hàng</span>
                            <Select />
                        </li>
                        <li>
                            <span>Ngày xuất hàng</span>
                            <Select />
                        </li>
                        <li>
                            <span>Ngày nhập hàng</span>
                            <Select />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}