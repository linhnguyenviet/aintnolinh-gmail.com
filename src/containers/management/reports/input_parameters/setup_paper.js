import React, { Component } from 'react'
import './style.scss'
import Button from '../../../../components/common/button'
import icons from '../../../../constants/icons'
import { RingChart } from '@opd/g2plot-react'

const data = [
    {
        type: "Pump - Change Capacity",
        value: 15
    },
    {
        type: "Pump - Low Production",
        value: 35
    },
    {
        type: "Rod - Failure",
        value: 20
    },
    {
        type: "Tubing - Leak",
        value: 20
    },
    {
        type: "Well - Inflow / Outflow Problem",
        value: 10
    }
];

const config = {
    forceFit: true,
    radius: 1,
    padding: "auto",
    data,
    angleField: "value",
    colorField: "type",
    statistic: {
        visible: true
    }
};


export default class SetupPaper extends Component {
    render() {
        return (
            <>
                <div className="select-display">
                    <Button titleButton="List Biểu Đồ Báo Cáo Tổng Thể" classNameButton="active" />
                    <Button titleButton="List Biểu Đồ Báo Cáo Chi Tiết" />
                </div>
                <div className="input-parameter-content">
                    <ul>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>1. Biểu đồ 01</span></li>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>2. Biểu đồ 02</span></li>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>3. Biểu đồ 03</span></li>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>4. Biểu đồ 04</span></li>
                        <li><img src={icons.icon_check_mark} alt="check" /><span>5. Biểu đồ 05</span></li>
                    </ul>
                    <div className="ring-chart">
                        <RingChart {...config} />
                    </div>
                </div>
            </>
        )
    }
}