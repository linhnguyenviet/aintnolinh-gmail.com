import React, { Component } from 'react'

export default class PrimaryGirderDeclare extends Component {
    render() {
        var rowbody = [];
        var product = [];
        for (let i = 0; i < 5; i++) {
            rowbody.push(
                <>
                    <td><span>***</span></td>
                    <td></td>
                </>
            )
        }
        product.push(
            <>
                <tr>
                    <td><span>1C-XY1</span></td>
                    <td><span></span></td>
                    {rowbody}

                </tr>
                <tr>
                    <td><span>"</span></td>
                    <td><span></span></td>
                    {rowbody}

                </tr>
                <tr>
                    <td><span>"</span></td>
                    <td><span></span></td>
                    {rowbody}

                </tr>
                <tr>
                    <td><span>"</span></td>
                    <td><span></span></td>
                    {rowbody}

                </tr>
            </>
        )
        return (
            <table>
                <thead>
                    <tr>
                        <td><span>Hiển thị</span></td>
                        <td></td>
                        <td><span>L</span></td>
                        <td></td>
                        <td><span>D1</span></td>
                        <td></td>
                        <td><span>D2</span></td>
                        <td></td>
                        <td><span>Thêm ngày</span></td>
                        <td></td>
                        <td><span>Dự bị 1</span></td>
                        <td></td>
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