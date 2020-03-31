import React, { Component } from 'react'
import './style.scss'
import Select from '../../../../components/common/select'
import Input from '../../../../components/common/input'
import Button from '../../../../components/common/button'
import ActionButtons from '../../../../components/action-buttons'
import icons from '../../../../constants/icons'

export default class MapReports extends Component {
    render() {
        return (
            <div className="map-reports">
                <div className="left-content">
                    <ul>
                        <li><span>Cài Đặt Phạm Vi Hiển Thị Bản Đồ</span></li>
                        <li>
                            <span>Bộ phận thép</span>
                            <Select />
                        </li>
                        <li>
                            <span>Khu</span>
                            <Select />
                        </li>
                        <li>
                            <span>Giai đoạn gia công</span>
                            <Select />
                        </li>
                        <li>
                            <span>Ngày nhập hàng</span>
                            <Select />
                        </li>
                        <li>
                            <span>Ngày xuất hàng</span>
                            <Select />
                        </li>
                        <li>
                            <span>Chọn từ list sản phẩm</span>
                            <Input typeInput="text" />
                        </li>
                    </ul>
                    <ul>
                        <li><span>Thông Tin Hiển Thị Hiện Tại</span></li>
                        <li>
                            <span>Hiển thị list sản phẩm chi tiết</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Số lượng</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Chưa gia công</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Đang gia công</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Gia công xong</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Kiểm tra</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Sơn</span>
                            <Input typeInput="text" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Thông Tin Sản Phẩm</span>
                        </li>
                        <li>
                            <span>Tên sản phẩm</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Bộ phận thép</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Khu</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Ngày nhập hàng</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Giai đoạn gia công</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Ngày xuất hàng</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Người quản lí</span>
                            <Input typeInput="text" />
                        </li>
                        <li>
                            <span>Mã số nhân viên</span>
                            <Input typeInput="text" />
                        </li>
                    </ul>
                </div>
                <div className="right-content">
                    <div className="button-control">
                        <ActionButtons />
                        <div className="action-button">
                            <form className="search">
                                <Input typeInput="text" placeholderInput="Search" />
                                <Button iconButton={icons.icon_search} />
                            </form>
                            <Button iconButton={icons.icon_zoom_out} />
                            <Button iconButton={icons.icon_zoom_in} />
                        </div>
                    </div>
                    <div className="map-content">

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}
