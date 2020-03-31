import React, { Component } from 'react'

export default class OverviewGeneral extends Component {
    render() {
        var title = [
            "Tên sản phẩm",
            "Lỗi",
            "Số vị trí lỗi",
            "Khu",
            "Bộ phận",
            "Khu",
            "Vật liệu",
            "Kích thước",
            "Đơn vị",
            "Chiều dài",
            "Số lượng",
            "Trọng lượng"
        ];
        var rowbody = [];
        var rowhead = [];
        for (let i = 0; i < title.length; i++) {
            rowhead.push(
                <td><span>{title[i]}</span></td>
            )
            rowbody.push(
                <td><span>text</span></td>
            )
        }
        return (
            <>
                <table>
                    <thead>
                        <tr>{rowhead}</tr>
                    </thead>
                    <tbody>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                        <tr>{rowbody}</tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><span>Tổng hợp</span></td>
                            <td></td>
                            <td></td>
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
                    </tfoot>
                </table>
                <div className="chart-data">
                    <div className="left-chart"></div>
                    <div className="right-chart"></div>
                </div>
            </>
        )
    }
}