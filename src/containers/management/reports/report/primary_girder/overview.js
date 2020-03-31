import React, { Component } from 'react'
import './style.scss'

export default class OverviewPrimaryGirder extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td><span>No</span></td>
                        <td><span>Bộ phận thép</span></td>
                        <td><span>Trọng Lượng &#40;t&#41;</span></td>
                        <td><span>Chưa Gia Công &#40;t&#41;</span></td>
                        <td><span>Đang Gia Công &#40;t&#41;</span></td>
                        <td><span>Gia Công Xong &#40;t&#41;</span></td>
                        <td><span>Kiểm Tra &#40;t&#41;</span></td>
                        <td><span>Sơn &#40;t&#41;</span></td>
                        <td><span>Xuất Hàng &#40;t&#41;</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>1</span></td>
                        <td><span>Buraketto</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><span>2</span></td>
                        <td><span>Dầm chính</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><span>Tổng</span></td>
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
        )
    }
}