import React, { Component } from 'react';
import icons from '../../constants/icons'
import './style.scss';
import { Link } from 'react-router-dom';


export default class MenuBar extends Component {
    render() {
        return (
            <div className="menu-bar">
                <ul>
                    <li><Link><img src={icons.icon_manage} alt="manage" /><span>Quản Lý Công Trình</span></Link></li>
                    <li><Link><img src={icons.icon_process} alt="process" /><span>Tiến Độ</span></Link></li>
                    <li><Link><img src={icons.icon_storage} alt="store" /><span>Kho</span></Link></li>
                    <li><Link><img src={icons.icon_fund} alt="money" /><span>Tài Chính</span></Link></li>
                    <li> <Link to="/employee" ><img src={icons.icon_staff} alt="staff" /><span>Nhân Viên</span></Link></li>
                </ul>
            </div>
        )
    }
}