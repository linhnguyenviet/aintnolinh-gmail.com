import React, { Component } from 'react'
import './style.scss'
import Button from '../../../../components/common/button'
import Input from '../../../../components/common/input'
import icons from '../../../../constants/icons'

export default class PaperSetup extends Component {
    render() {
        return (
            <div className="paper-setup">
                <p>Danh Sách Khung Giấy</p>
                <div className="paper-setup-content">
                    <ul>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>1. Khung giấy 01</span></li>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>2. Khung giấy 02</span></li>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>3. Khung giấy 03</span></li>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>4. Khung giấy 04</span></li>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>5. Khung giấy 05</span></li>
                    </ul>
                    <div className="paper-preview">

                    </div>
                    <div className="information">
                        <p>Thông tin</p>
                        <div className="setup-information">
                            <div className="grps-button">
                                <Button titleButton="Công Làm" />
                                <Button titleButton="Chi" />
                                <Button titleButton="Khấu trừ" />
                                <Button titleButton="Tổng hợp" />
                                <Button titleButton="Khác" />
                            </div>
                            <ul>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>1. Đi làm</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>2. Làm ngày nghỉ</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>3. Ngày nghỉ đặc biệt</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>4. Nghỉ có lương</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>5. Nghỉ làm</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>6. Ngày nghỉ có lương còn lại</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>7. Thời gian làm</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>8. Thời gian làm sớm</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>9. Thời gian tăng ca</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>10. Thời gian tăng ca đêm</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>11. Thời gian tăng ca ngày nghỉ</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>12. Ngày nghỉ theo luật pháp</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>13. text……</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>14. Thời gian</span>
                                </li>
                                <li>
                                    <Input typeInput="checkbox" />
                                    <span>Thêm</span>
                                </li>
                            </ul>
                            <div className="grps-button">
                                <Button titleButton="Chọn toàn bộ" />
                                <Button titleButton="Xóa toàn bộ" />
                                <Button titleButton="Thay thế" />
                                <Button iconButton={icons.icon_arrow_up} />
                                <Button iconButton={icons.icon_arrow_down} />
                            </div>
                        </div>
                        <div className="footer-button">
                            <Button titleButton="Xóa" />
                            <Button titleButton="Thêm" />
                            <Button titleButton="Sửa" />
                            <Button titleButton="Nhập" />
                            <Button titleButton="Đóng" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}