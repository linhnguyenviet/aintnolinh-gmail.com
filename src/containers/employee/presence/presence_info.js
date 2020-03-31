import React, { Component } from 'react';
import './style.scss'

export default class PresenceInfo extends Component {
    render() {
        const rowhead = [];
        const rowbody = [];
        const thead = [
            "Mã",
            "Tên",
            "Có Mặt",
            "Bắt Đầu Giải Lao",
            "Kết Thúc Giải Lao",
            "Bắt Đầu Giải Lao Kết Thúc Giải Lao",
            "Kết Thúc Giải Lao",
            "Nghỉ",
            "Giờ Hành Chính",
            "Tăng Ca",
            "Trong Khuôn Viên"
        ]
        for (let i = 0; i < thead.length; i++) {
            rowhead.push(
                <td><span>{thead[i]}</span></td>
            )
            rowbody.push(
                <td></td>
            )
        }
        rowbody.pop()
        return (
            <table>
                <thead>
                    <tr>
                        {rowhead}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>001</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>002</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>003</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>004</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>005</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>005</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>005</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>005</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>005</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>005</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>005</span></td>
                        {rowbody}
                    </tr>
                    <tr>
                        <td><span>005</span></td>
                        {rowbody}
                    </tr>

                </tbody>
                <tfoot>
                    <tr>
                        <td><span>Text</span></td>
                        {rowbody}
                    </tr>
                </tfoot>
            </table>)
    }
}