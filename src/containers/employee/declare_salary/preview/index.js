import React, { Component } from 'react'
import './style.scss'
import Button from '../../../../components/common/button'
import Select from '../../../../components/common/select'
import icons from '../../../../constants/icons'

export default class PreviewSalary extends Component {
    render() {
        return (
            <div className="declare-content">
                <div className="left-content">
                    <ul>
                        <li>
                            <span>Loại nhân viên</span>
                            <Select />
                        </li>
                        <li>
                            <span>Bộ phận</span>
                            <Select />
                        </li>
                        <li>
                            <span>Số hiệu nhóm</span>
                            <Select />
                        </li>
                        <li>
                            <span>Chức vụ</span>
                            <Select />
                        </li>
                        <li>
                            <span>Quyền hạn</span>
                            <Select />
                        </li>
                    </ul>
                    <div className="left-content-1">
                        <div className="left-content-table">
                            <Button iconButton={icons.icon_plus} />
                            <table>
                                <thead>
                                    <tr>
                                        <th><span>Mã</span></th>
                                        <th><span>Tên</span></th>
                                        <th><span>Loại nhân viên</span></th>
                                        <th><span>Bộ phận</span></th>
                                        <th><span>Số hiệu nhóm</span></th>
                                        <th><span>Trưởng nhóm/Nhân viên</span></th>
                                        <th><span>Mã số lương</span></th>
                                        <th><span>Ngày tính lương</span></th>
                                        <th><span>Ngày kết thúc</span></th>
                                        <th><span>Quyền hạn</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span>0001</span></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><span>0002</span></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><span>0003</span></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><span>0004</span></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><span>0005</span></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><span>0006</span></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="left-content-list">
                            <div className="list-menu">
                                <ul>
                                    <li><span>Công Làm</span></li>
                                    <li><span>1. Đi làm</span></li>
                                    <li><span>2. Làm ngày nghỉ</span></li>
                                    <li><span>3. Ngày nghỉ đặc biệt</span></li>
                                    <li><span>4. Nghỉ có lương</span></li>
                                    <li><span>5. Nghỉ làm</span></li>
                                    <li><span>6. Ngày nghỉ có lương</span></li>
                                    <li><span>7. Thời gian làm</span></li>
                                    <li><span>8. Thời gian làm sớm</span></li>
                                    <li><span>9. Thời gian tăng ca</span></li>
                                    <li><span>10. Thời gian tăng ca</span></li>
                                    <li><span>11. Thời gian tăng ca</span></li>
                                    <li><span>12. Ngày nghỉ theo luật</span></li>
                                    <li><span>13. Text </span></li>
                                    <li><span>14. Thời gian </span></li>
                                    <li><span>Thêm </span></li>
                                </ul>
                                <ul>
                                    <li><span>Lương</span></li>
                                    <li><span>1. Lương cơ bản</span></li>
                                    <li><span>2. Trợ cấp chức vụ</span></li>
                                    <li><span>3. Trợ cấp gia đình</span></li>
                                    <li><span>4. Trợ cấp nhà ở</span></li>
                                    <li><span>5. Trợ cấp công việc</span></li>
                                    <li><span>6. Hoàn trả ngày nghỉ</span></li>
                                    <li><span>7. Text</span></li>
                                    <li><span>8. Điều chỉnh phí</span></li>
                                    <li><span>9. Phụ cấp đi lại</span></li>
                                    <li><span>10. Phụ cấp tăng ca</span></li>
                                    <li><span>11. Miễn giảm</span></li>
                                    <li><span>Thêm</span></li>
                                </ul>
                                <ul>
                                    <li><span>Khấu trừ</span></li>
                                    <li><span>1. Bảo hiểm hưu trí</span></li>
                                    <li><span>2. Bảo hiểm y tế</span></li>
                                    <li><span>3. Phí BH thất nghiệp</span></li>
                                    <li><span>4. Thuế thu nhập</span></li>
                                    <li><span>5. Thuế cư dân</span></li>
                                    <li><span>6. Text</span></li>
                                    <li><span>7. Phí kí túc</span></li>
                                    <li><span>8. Tiền ăn</span></li>
                                    <li><span>9. Trang phục</span></li>
                                    <li><span>10. Bảo hiểm đoàn thế</span></li>
                                    <li><span>11. Tiền phát sinh</span></li>
                                    <li><span>12. BH ATLD</span></li>
                                    <li><span>13. Tiền tiết kiệm</span></li>
                                    <li><span>14. Tiền ứng trước</span></li>
                                    <li><span>15. Phí BH cơ bản</span></li>
                                    <li><span>16. Phí BH đặc biệt</span></li>
                                </ul>
                                <ul>
                                    <li><span>Tổng</span></li>
                                    <li><span>1. Tổng thanh toán</span></li>
                                    <li><span>2. Tổng khấu trừ</span></li>
                                    <li><span>3. Thanh toán khấu trừ</span></li>
                                    <li><span>4. Chuyển khoản ngân hàng</span></li>
                                    <li><span>5. Chuyển khoản ngân hàng</span></li>
                                    <li><span>6. Chuyển khoản ngân hàng</span></li>
                                    <li><span>Thêm</span></li>
                                </ul>
                                <ul>
                                    <li><span>Khác</span></li>
                                    <li><span>1. Điều chỉnh cuối năm</span></li>
                                    <li><span>2. *****</span></li>
                                    <li><span>3. *****</span></li>
                                    <li><span>4. *****</span></li>
                                    <li><span>5. Thêm</span></li>
                                </ul>
                            </div>
                            <div className="caculator">
                                <div className="title">
                                    <span>Nhập công thức tính</span>
                                </div>
                                <p>Tiền lương thanh toán = Lương cơ bản + Tiền tăng ca - BHYT - Tiền trọ ký túc - BHTN - Thuế cư trú</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><span>C</span></td>
                                            <td><span>()</span></td>
                                            <td><span>%</span></td>
                                            <td><span>/</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>1</span></td>
                                            <td><span>2</span></td>
                                            <td><span>3</span></td>
                                            <td><span>x</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>4</span></td>
                                            <td><span>5</span></td>
                                            <td><span>6</span></td>
                                            <td><span>-</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>7</span></td>
                                            <td><span>8</span></td>
                                            <td><span>9</span></td>
                                            <td><span>+</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>+/-</span></td>
                                            <td><span>0</span></td>
                                            <td><span>.</span></td>
                                            <td><span>=</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="caculator-footer">
                                    <Button titleButton="Thêm" />
                                    <Button titleButton="Xóa 1 chữ cái" />
                                    <Button titleButton="Xóa" />
                                    <Button titleButton="Nhập" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <div className="paper-frame">

                    </div>
                    <div className="right-content-list">
                        <ul>
                            <li><span>Các Cách Tính</span></li>
                            <li><span>1. Lương thanh toán   =   Lương cơ bản   + Trợ cấp tăng ca    -    Phí BHYT.  -  Tiền ký túc -   Phí BHTN - Thuế cư trú
     </span></li>
                            <li><span>2. Tiền công  =  Lương cơ bản  +  Trợ cấp tăng ca</span></li>
                            <li><span>3. Tiền công  =  Lương cơ bản  +  Trợ cấp tăng ca</span></li>
                            <li><Button titleButton="Xóa" /></li>
                        </ul>
                        <ul>
                            <li><span>Ghi chú</span></li>
                            <li><span>Lương thanh toán + tiền công</span></li>
                            <li><span>Khấu trừ sau thuế</span></li>
                            <li><span>Lương cơ bản:</span></li>
                            <li><span>Lương tăng ca:</span></li>
                            <li><span>Tiền bảo hiểm:</span></li>
                            <li><span>Nhà ở ký túc :</span></li>
                            <li><span>Bảo hiểm thất nghiệp:</span></li>
                            <li><span>Thuế cư trú:</span></li>
                            <li><Button titleButton="Danh sách" /><Button titleButton="Thêm" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}