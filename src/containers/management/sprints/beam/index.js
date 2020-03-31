import React, { Component } from "react";
import "./style.scss";
import Button from '../../../../components/common/button'
import icons from '../../../../constants/icons'
import ActionButtons from "../../../../components/action-buttons";
import Input from "../../../../components/common/input";
import Table from "../../../../components/common/table";

export default class BeamSprint extends Component {
    render() {
        var list = [];
        var data = [
            "1. Nhập hàng",
            "2. Kiểm tra UT nội bộ",
            "3. Kiểm tra ngoại quan",
            "4. Kiểm tra UT công ty thứ 3",
            "5. Sơn",
            "6. Gắn bảng mã",
            "7. Xuất hàng",
            "8. Gắn tấm trợ lực trong panel",
            "9. Gắn tấm đỡ trong panel",
            "10. Hàn tấm trợ lực trong panel"
        ]
        for (let i = 0; i < data.length; i++) {
            list.push(
                <li><span>{data[i]}</span></li>
            )
        }

        return (
            <div className="columns-sprint">
                <div className="columns-content">
                    <ul>
                        {list}
                    </ul>
                    <div className="grp-btns grp-1">
                        <Button iconButton={icons.icon_shift_right} />
                        <Button iconButton={icons.icon_shift_left} />
                    </div>
                    <div className="list-select">
                        <ul>

                        </ul>
                        <div className='footer-button'>
                            <Button titleButton="Okay" />
                            <Button titleButton="Clear" />
                        </div>
                    </div>
                    <div className="grp-btns grp-2">
                        <Button titleButton="Chọn toàn bộ" />
                        <Button titleButton="Xóa toàn bộ" />
                        <Button iconButton={icons.icon_arrow_up} />
                        <Button iconButton={icons.icon_arrow_down} />
                    </div>
                </div>

                <div className="action-center">
                    <p>Lorem text</p>
                    <ActionButtons />
                    <div className="action-button">
                        <form className="search">
                            <Input typeInput="text" placeholderInput="Search" />
                            <Button iconButton={icons.icon_search} />
                        </form>
                        <Button classNameButton="add" iconButton={icons.icon_plus} />
                    </div>
                </div>
                <Table />

            </div>

        )
    }
}