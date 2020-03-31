import React, { Component } from 'react'
import './style.scss'

export default class DetailsSecondaryGirder extends Component {

    render() {
        var cols = [];
        for (let i = 1; i < 23; i++) {
            cols.push(
                <td><span>text</span></td>
            );
        }
        var rows = [];
        var rowdata = [];

        for (let i = 1; i < 23; i++) {
            rowdata.push(
                <td><span>text</span></td>
            )
        }
        for (var j = 1; j < 20; j++) {
            rows.push(
                <tr key={j}>
                    <td>{j}</td>
                    {rowdata}
                </tr>
            )
        }
        return (
            <table>
                <thead>
                    <tr>
                        <td><span>No.</span></td>
                        {cols}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}