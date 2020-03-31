import React, { Component } from 'react';
import './style.scss'

export default class PresenceMap extends Component {
    render() {
        return (
            <div className="presence-map">
                <table className="map-table">
                    <thead>
                        <tr>
                            <td><span>Mã</span></td>
                            <td><span>Tên</span></td>
                            <td><span>Có</span></td>
                            <td><span></span></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>001</span></td>
                            <td><span></span></td>
                            <td><span></span></td>
                            <td><span></span></td>
                        </tr>
                        <tr>
                            <td><span>002</span></td>
                            <td><span></span></td>
                            <td><span></span></td>
                            <td><span></span></td>
                        </tr>
                        <tr>
                            <td><span>003</span></td>
                            <td><span></span></td>
                            <td><span></span></td>
                            <td><span></span></td>
                        </tr>
                    </tbody>
                </table>
                <div className="map-info">

                </div>

            </div>
        )
    }
}