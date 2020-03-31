import React, { Component } from "react";
import "./style.scss";
import Button from '../../../../../components/common/button'
import icons from '../../../../../constants/icons'
import ActionButtons from "../../../../../components/action-buttons";
import Input from "../../../../../components/common/input";
import Table from "../../../../../components/common/table";

export default class ShiguichiColumnSprint extends Component {
    componentDidMount() {
        const { id_constructions } = this.props;
        this.props.getAllStageProduction({
            id_constructions: id_constructions,
            id_pd_product_common_type: 12
        })
    }
    render() {
        return (
            <>
                <div className="columns-content">
                    <ul>
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

            </>
        )
    }
}
