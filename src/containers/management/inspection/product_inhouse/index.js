import React, { Component } from "react";
import "./style.scss";
import Input from '../../../../components/common/input'
import Button from "../../../../components/common/button";
import icons from "../../../../constants/icons";

export default class ProductInhouseInspection extends Component {
    render() {
        var rowhead = [];
        var rowdesign = [];
        var rowerror = [];
        for (let i = 1; i < 12; i++) {
            rowhead.push(
                <td><span>H1</span></td>
            );
            rowdesign.push(
                <td><span>***</span></td>
            )
            rowerror.push(
                <td><Input typeInput="number" /></td>
            )
        }
        return (
            <div className="product-inhouse">
                <div className="left-content">
                    <ul>
                        <li><span>Mã số nhân viên</span><Input typeInput="text" placeholderInput="Mã số nhân viên" /></li>
                        <li><span>Người quản lý</span><Input typeInput="text" placeholderInput="Người quản lý" /></li>
                    </ul>
                    <div className="info-table">
                        <div className="picture">

                        </div>
                        <Button iconButton={icons.icon_plus} />
                        <table>
                            <thead>
                                <tr>
                                    <td>Hạng Mục</td>
                                    <td>Hiển Thị</td>
                                    <td>Đơn vị</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tên sản phẩm</td>
                                    <td>3G- X2Y5</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Bộ phận công trình</td>
                                    <td>Bộ phận chính kết cấu thép</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Bộ phận thép</td>
                                    <td>Dầm chính</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Khu</td>
                                    <td>A</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Chất liệu</td>
                                    <td>SN490A</td>
                                    <td>N. mm2</td>
                                </tr>
                                <tr>
                                    <td>Kích thước</td>
                                    <td>H-700X300X16X19</td>
                                    <td>mm</td>
                                </tr>
                                <tr>
                                    <td>Trọng lượng đơn vị</td>
                                    <td>302</td>
                                    <td>Kg/m</td>
                                </tr>
                                <tr>
                                    <td>Chiều dài</td>
                                    <td>10,800</td>
                                    <td>mm</td>
                                </tr>
                                <tr>
                                    <td>Số lượng</td>
                                    <td>1</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Trọng lượng</td>
                                    <td>3,040</td>
                                    <td>Kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="right-content">
                    <div className="params-input">
                        <div>
                            <Button titleButton="Đạt" />
                            <Button titleButton="Chỉnh sửa" />
                        </div>
                        <div>
                            <span><Button titleButton="Cong" /><Input typeInput="number" /></span>
                            <span><Button titleButton="Xoắn" /><Input typeInput="number" /></span>
                            <span><Button titleButton="Lệch" /><Input typeInput="number" /></span>
                            <span><Button titleButton="Góc Shigu" /><Input typeInput="number" /></span>
                        </div>
                        <div>
                            <span><Button titleButton="Bị lẹm" /><Input typeInput="number" /></span>
                            <span><Button titleButton="Nứt / Vỡ" /><Input typeInput="number" /></span>
                            <span><Button titleButton="Text.." /><Input typeInput="number" /></span>
                            <span><Button titleButton="Text.." /><Input typeInput="number" /></span>
                        </div>
                        <div>
                            <span><Button titleButton="Bị lẹm" /><Input typeInput="number" /></span>
                            <span><Button titleButton="Bị lẹm" /><Input typeInput="number" /></span>
                            <Button iconButton={icons.icon_plus} classNameButton="add add-row" />
                        </div>

                    </div>
                    <div className="table-data">
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td><span>Hiển thị</span></td>
                                    {rowhead}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>Đông</span></td>
                                    <td><span>Thiết kế</span></td>
                                    {rowdesign}
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><span>Sai số</span></td>
                                    {rowerror}
                                </tr>
                                <tr>
                                    <td><span>Tây</span></td>
                                    <td><span>Thiết kế</span></td>
                                    {rowdesign}
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><span>Sai số</span></td>
                                    {rowerror}
                                </tr>
                                <tr>
                                    <td><span>Nam</span></td>
                                    <td><span>Thiết kế</span></td>
                                    {rowdesign}
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><span>Sai số</span></td>
                                    {rowerror}
                                </tr>
                                <tr>
                                    <td><span>Bắc</span></td>
                                    <td><span>Thiết kế</span></td>
                                    {rowdesign}
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><span>Sai số</span></td>
                                    {rowerror}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}