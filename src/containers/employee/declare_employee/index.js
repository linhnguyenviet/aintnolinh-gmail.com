import React, { Component } from 'react'
import './style.scss'
import Input from '../../../components/common/input'
import Select from '../../../components/common/select'
import images from '../../../constants/images'
import Button from '../../../components/common/button'

export default class DeclareEmployeeScreen extends Component {
    render() {
        var rowbody = [];
        for (let i = 0; i < 11; i++) {
            rowbody.push(
                <td></td>
            )
        }
        return (
            <div className="declare-employee">
                <div className="infomation-employee">
                    <img src={images.avatar} alt="avatar" />
                    <ul>
                        <li>
                            <span>Mã nhân viên</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Loại nhân viên</span>
                            <Select />
                        </li>
                        <li>
                            <span>Bộ phận</span>
                            <Select />
                        </li>
                        <li>
                            <span>Mã số nhóm</span>
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
                        <li>
                            <span>Họ tên</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Ngày tháng năm</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Địa chỉ</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>ID</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Email</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Phone</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Ngân hàng</span>
                            <Select />
                        </li>
                        <li>
                            <span>Chi nhánh</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Mã số ngân hàng</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Số xe</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Số hiệu bằng lái</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Thời gian làm việc</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Ngày nhập</span>
                            <Input typeInput="date" />
                        </li>
                        <li>
                            <span>Ngày bắt đầu</span>
                            <Input typeInput="date" />
                        </li>
                        <li>
                            <span>Ngày kết thúc</span>
                            <Input typeInput="date" />
                        </li>
                        <li>
                            <span>Lương cơ bản</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Phụ cấp</span>
                            <Select />
                        </li>
                        <li>
                            <span>Khoản khấu</span>
                            <Select />
                        </li>
                        <li>
                            <span>Công ty trước</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Ngày nghỉ việc</span>
                            <Select />
                        </li>
                        <li>
                            <span>Chức vụ trước</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Kinh nghiệm</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Bằng cấp</span>
                            <Select />
                        </li>
                    </ul>
                </div>
                <div className="action-center">
                    <p>Danh Sách Nhân Viên</p>
                    <div className="action-button">
                        <Button titleButton="Xem trước" />
                        <Button titleButton="Cài đặt" />
                        <Button titleButton="Sửa" />
                        <Button titleButton="Nhập" />
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td><span>Mã</span></td>
                            <td><span>Tên</span></td>
                            <td><span>Bộ phận</span></td>
                            <td><span>Mã số nhóm</span></td>
                            <td><span>Chức vụ</span></td>
                            <td><span>Ngày tháng năm sinh</span></td>
                            <td><span>Địa chỉ</span></td>
                            <td><span>Mail</span></td>
                            <td><span>Số điện thoại</span></td>
                            <td><span>Số CMND</span></td>
                            <td><span>Bằng lái</span></td>
                            <td><span>Chứng chỉ hành nghề</span></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>0001</span></td>
                            {rowbody}
                        </tr>
                        <tr>
                            <td><span>0002</span></td>
                            {rowbody}
                        </tr>
                        <tr>
                            <td><span>0003</span></td>
                            {rowbody}
                        </tr>
                        <tr>
                            <td><span>0004</span></td>
                            {rowbody}
                        </tr>
                        <tr>
                            <td><span>0005</span></td>
                            {rowbody}
                        </tr>
                        <tr>
                            <td><span>0006</span></td>
                            {rowbody}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}