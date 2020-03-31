import React, { Component } from 'react'

export default class ColumnDeclare extends Component {
    render() {
        var rowbody = [];
        var rowhead = [];
        var product = [];
        for (let i = 0; i < 11; i++) {
            rowhead.push(
                <td><span>H1</span></td>
            )
            rowbody.push(
                <td><span>***</span></td>
            )
        }

        rowhead.push(
            <>
                <td><span>Thêm ngày</span></td>
                <td><span>Dự bị 1</span></td>
            </>
        )
        product.push(
            <>
                <tr>
                    <td><span>1C-XY1</span></td>
                    <td><span>Đông</span></td>
                    {rowbody}
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><span>"</span></td>
                    <td><span>Tây</span></td>
                    {rowbody}
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><span>"</span></td>
                    <td><span>Nam</span></td>
                    {rowbody}
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><span>"</span></td>
                    <td><span>Bắc</span></td>
                    {rowbody}
                    <td></td>
                    <td></td>
                </tr>
            </>
        )
        return (
            <table>
                <thead>
                    <tr>
                        <td><span>Hiển thị</span></td>
                        <td></td>
                        {rowhead}
                    </tr>
                </thead>
                <tbody>
                    {product}
                    {product}
                    {product}
                    {product}
                    {product}
                    {product}
                    {product}
                </tbody>
            </table>
        )
    }
}