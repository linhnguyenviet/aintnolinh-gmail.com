import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  static propTypes = {
    nameSelect: PropTypes.string,
    valueSelect: PropTypes.string,
    dataOption: PropTypes.array,
    onChangeSelect: PropTypes.func.isRequired
  };
  static defaultProps = {
    onChangeSelect: () => {},
    dataOption: [
      {
        id: 0,
        name: "Empty data"
      }
    ]
  };

  render() {
    const { nameSelect, valueSelect, dataOption, onChangeSelect } = this.props;
    return (
      <select name={nameSelect} onChange={onChangeSelect} value={valueSelect}>
        {dataOption.map(option => (
          <option
            key={option.id}
            value={option.name ? option.name : option.username}
          >
            {option.name ? option.name : option.username}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
