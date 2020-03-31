import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  static propTypes = {
    titleInput: PropTypes.string,
    placeholderInput: PropTypes.string,
    typeInput: PropTypes.string,
    valueInput: PropTypes.string,
    onchangeInput: PropTypes.func.isRequired,
    onKeyDownInput: PropTypes.func,
    nameInput: PropTypes.string,
    checkedInput: PropTypes.bool
  };
  static defaultProps = {
    onchangeInput: () => {},
    typeInput: PropTypes.string
  };

  render() {
    const {
      placeholderInput,
      typeInput,
      valueInput,
      onchangeInput,
      onKeyDownInput,
      nameInput,
      checkedInput,
      disabled,
      defaultValue
    } = this.props;
    return (
      <input
        type={typeInput}
        placeholder={placeholderInput}
        value={valueInput}
        onChange={onchangeInput}
        onKeyDown={onKeyDownInput}
        name={nameInput}
        checked={checkedInput}
        disabled={disabled}
        defaultValue={defaultValue}
        autoFocus
      />
    );
  }
}

export default Input;
