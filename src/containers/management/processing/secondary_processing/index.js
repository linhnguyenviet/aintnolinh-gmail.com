import React, { Component } from "react";
import Input from '../../../../components/common/input'
import Button from '../../../../components/common/button'
import "./style.scss";
import LabelComponent from "../../../../components/common/labels";
import images from "../../../../constants/images";
import ActionButtons from "../../../../components/action-buttons";
import icons from "../../../../constants/icons";


export default class SecondaryProcessing extends Component {
    render() {
        return (
            <>
                <div>
                    <p>Hiện trạng công đoạn gia công</p>
                </div>
                <div className="label-stages">
                    <LabelComponent srcImg={images.label_start} textLabel="1. Nhập hàng" />
                    <LabelComponent srcImg={images.label_middle} textLabel="2. Gia công buraketto bằng ga" />
                    <LabelComponent srcImg={images.label_middle} textLabel="3. Gia công dầm chính
    bằng ga" />
                    <LabelComponent srcImg={images.label_middle} textLabel="4. Lắp dầm chính" />
                    <LabelComponent srcImg={images.label_middle} textLabel="5. Hàn giầm chính" />
                    <LabelComponent srcImg={images.label_middle} textLabel="6. Kiểm tra UT" />
                    <LabelComponent srcImg={images.label_middle} textLabel="7. Kiểm tra ngoại 
     quan" />
                    <LabelComponent srcImg={images.label_middle} textLabel="8. Kiểm tra bên 
     thứ 3" />
                    <LabelComponent srcImg={images.label_middle} textLabel="9. Sơn" />
                    <LabelComponent srcImg={images.label_middle} textLabel="10. Lắp Supuraisu" />
                    <LabelComponent srcImg={images.label_end} textLabel="11. Xuất hàng" />
                </div>
                <div className="action-center">
                    <ActionButtons />
                    <div className="action-button">
                        <form className="search">
                            <Input typeInput="text" placeholderInput="Search" />
                            <Button iconButton={icons.icon_search} />
                        </form>
                         <Button classNameButton="add" iconButton={icons.icon_plus} />
                    </div>
                </div>
                <div className="secondary-processing">
                    <div className="left-content">
                        <ul>
                            <li><span>Mã số nhân viên</span><Input typeInput="text" placeholderInput="Mã số nhân viên" /></li>
                            <li><span>Người quản lý</span><Input typeInput="text" placeholderInput="Người quản lý" /></li>
                        </ul>
                        <ul>
                            <li><span>Code</span><Input typeInput="text" /></li>
                            <li><span>Tên sản phẩm</span><Input typeInput="text" /></li>
                            <li><span>Thời gian bắt đầu</span><Input typeInput="text" /></li>
                            <li><span>Thời gian kết thúc</span><Input typeInput="text" /></li>
                        </ul>
                        <div className="control-button">
                            <Button titleButton="Save" />
                            <Button titleButton="Clear" />
                            <Button titleButton="Edit" />
                            <Button titleButton="Auto save" />
                            <Input typeInput="checkbox" />
                        </div>
                    </div>
                    <div className="right-content">
                        <table>
                            <thead>
                                <tr>
                                    <td>Hạng Mục</td>
                                    <td>Hiển Thị</td>
                                    <td>Đơn vị</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tên sản phẩm</td>
                                    <td>3G- X2Y5</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Bộ phận công trình</td>
                                    <td>Bộ phận chính kết cấu thép</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Bộ phận thép</td>
                                    <td>Dầm chính</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Khu</td>
                                    <td>A</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Chất liệu</td>
                                    <td>SN490A</td>
                                    <td>N. mm2</td>
                                </tr>
                                <tr>
                                    <td>Kích thước</td>
                                    <td>H-700X300X16X19</td>
                                    <td>mm</td>
                                </tr>
                                <tr>
                                    <td>Trọng lượng đơn vị</td>
                                    <td>302</td>
                                    <td>Kg/m</td>
                                </tr>
                                <tr>
                                    <td>Chiều dài</td>
                                    <td>10,800</td>
                                    <td>mm</td>
                                </tr>
                                <tr>
                                    <td>Số lượng</td>
                                    <td>1</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Trọng lượng</td>
                                    <td>3,040</td>
                                    <td>Kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}