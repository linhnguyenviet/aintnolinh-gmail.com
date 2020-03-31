import React, { Component } from 'react';
import './style.scss'
import Select from '../../../components/common/select';

export default class ManageEmployee extends Component {
    render() {
        var rowhead = [];
        var rowbody = [];
        var rowheadbot = [];
        var rowbodybot = [];
        var rowheaddata = [
            "Mã",
            "Tên",
            "Loại NV/Bộ Phận",
            "Số Hiệu Nhóm",
            "Lảnh đạo/Nhân viên",
            "Tháng 1/Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6/Tháng 7",
            "Tháng 8",
            "Tháng 9/Tháng 10",
        ]
        for (let i = 1; i < 10; i++) {
            rowhead.push(
                <td>
                    <span>Tháng</span>
                </td>
            )
            rowbody.push(
                <td>
                    <span></span>
                </td>
            )
        }
        for (let j = 0; j < rowheaddata.length; j++) {
            rowheadbot.push(
                <td>
                    <span>{rowheaddata[j]}</span>
                </td>
            )
            rowbodybot.push(
                <td></td>
            )
        }
        return (
            <div className="employee-management">
                <div className="top-content">
                    <div className="employee-info">
                        <ul>
                            <li>
                                <span>Mã nhân viên</span>
                                <Select />
                            </li>
                            <li>
                                <span>Họ Tên</span>
                                <Select />
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
                            <li>
                                <span>Phần tiền lương</span>
                                <Select />
                            </li>
                        </ul>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td colspan="10"><span>Bảng thống kê</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                {rowhead}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>Thời gian làm việc</span></td>
                                {rowbody}
                            </tr>
                            <tr>
                                <td><span>Số nhân viên làm việc</span></td>
                                {rowbody}
                            </tr>
                            <tr>
                                <td><span>Thành tích</span></td>
                                {rowbody}
                            </tr>
                            <tr>
                                <td><span>Trung bình thành tích</span></td>
                                {rowbody}
                            </tr>
                            <tr>
                                <td><span>Trung bình thời gian làm việc</span></td>
                                {rowbody}
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                {rowbody}
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="bottom-content">
                    <table>
                        <thead>
                            <tr>{rowheadbot}</tr>
                        </thead>
                        <tbody>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                            <tr>{rowbodybot}</tr>
                        </tbody>
                    </table>
                    <div className="employee-chart">

                    </div>
                </div>
            </div>
        )
    }
}