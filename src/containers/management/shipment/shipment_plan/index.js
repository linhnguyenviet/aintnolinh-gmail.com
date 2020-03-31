import React, { Component } from 'react'
import './style.scss'
import ActionButtons from '../../../../components/action-buttons'
import Button from '../../../../components/common/button'
import icons from '../../../../constants/icons'
import Input from '../../../../components/common/input'

export default class ShipmentPlan extends Component {
    render() {
        var thead = [
            "Xe Số",
            "Loại Xe",
            "Công Ty Vận Chuyển",
            "Khu Lắp Dựng",
            "Bộ Phận Thép",
            "Giờ Chất Hàng",
            "Giờ Dỡ Hàng",
            "Nơi Chất Hàng",
            "Nơi Dỡ Hàng",
            "Bản Đồ"
        ]
        var rowhead = []
        for (let i = 0; i < thead.length; i++) {
            rowhead.push(
                <td>
                    <span>{thead[i]}</span>
                </td>
            )
        }
        return (
            <div className="shipment-plan">
                <div className="action-center">
                    <div className="date-control">
                        <div className="date-button">
                            <Button titleButton="Today" />
                        </div>
                        <div className="date-picker">
                            <img src={icons.icon_calendar} alt="calendar" />
                            <Input typeInput="date" />
                        </div>
                    </div>
                    <div className="button-control">
                        <ActionButtons />
                        <div className="action-button">
                            <form className="search">
                                <Input typeInput="text" placeholderInput="Search" />
                                <Button iconButton={icons.icon_search} />
                            </form>
                            <button className="add">
                                <img src={icons.icon_plus} alt="add" />
                            </button>
                        </div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            {rowhead}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>Xe Số 1</span></td>
                            <td><span>Xe tải</span></td>
                            <td><span>Maya</span></td>
                            <td><span>A-2</span></td>
                            <td><span>Cột chính/Cột phụ</span></td>
                            <td><span>9:00</span></td>
                            <td><span>9:00</span></td>
                            <td><span>Biken</span></td>
                            <td><span>Công trường</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><span>Xe Số 2</span></td>
                            <td><span>Xe rơ móc</span></td>
                            <td><span>Maya</span></td>
                            <td><span>A-2</span></td>
                            <td><span>Dầm phụ</span></td>
                            <td><span>10:00</span></td>
                            <td><span>10:00</span></td>
                            <td><span>Biken</span></td>
                            <td><span>Công trường</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><span>Xe Số 3</span></td>
                            <td><span>Xe tải</span></td>
                            <td><span>Maya</span></td>
                            <td><span>A-2</span></td>
                            <td><span>Dầm chính</span></td>
                            <td><span>13:00</span></td>
                            <td><span>13:00</span></td>
                            <td><span>Biken</span></td>
                            <td><span>Công trường</span></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}