import React, { Component } from "react";
import "./style.scss";

export default class Table extends Component {
  render() {
    const { dataColumn, dataRow } = this.props;
    var cols = [];
    var rows = [];
    var rowdata = [];
    if (dataColumn && dataColumn.length > 0) {
      dataColumn.map((column, index) =>
        cols.push(
          <th key={index}>
            <span>{column.name}</span>
          </th>
        )
      );
      if (dataRow && dataRow.length > 0) {
        dataRow.map((row, index) => {
          rowdata = [];
          dataColumn.map((col, index) => {
            const value = col.value;
            return rowdata.push(
              <td key={index}>
                <span>
                  {row[value] && row[value].name ? row[value].name : row[value]}
                </span>
              </td>
            );
          });
          return rows.push(
            <tr key={index}>
              <td>{index + 1}</td>
              {rowdata}
            </tr>
          );
        });
      } else {
        for (let i = 1; i <= dataColumn.length; i++) {
          rowdata.push(
            <td>
              <span></span>
            </td>
          );
        }
        for (let j = 1; j < 20; j++) {
          rows.push(
            <tr key={j}>
              <td>{j}</td>
              {rowdata}
            </tr>
          );
        }
      }
    } else {
      for (let i = 1; i < 30; i++) {
        cols.push(
          <th>
            <span>Column {i}</span>
          </th>
        );
      }
      for (let i = 1; i < 30; i++) {
        rowdata.push(
          <td>
            <span></span>
          </td>
        );
      }
      for (let j = 1; j < 20; j++) {
        rows.push(
          <tr key={j}>
            <td>{j}</td>
            {rowdata}
          </tr>
        );
      }
    }

    return (
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              {cols}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
