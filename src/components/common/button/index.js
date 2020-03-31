import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactSVG } from 'react-svg';
import "./style.scss";

class Button extends Component {
  static propTypes = {
    titleButton: PropTypes.string,
    colorButton: PropTypes.string,
    widthButton: PropTypes.number,
    iconButton: PropTypes.string,
    onClickButton: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    onClickButton: () => { }
  };

  render() {
    var {
      titleButton,
      iconButton,
      onClickButton,
      classNameButton,
      onMouseDownButton,
      onMouseUpButton,
      disabled
    } = this.props;
    return (
      <button
        onClick={onClickButton}
        className={classNameButton}
        disabled={disabled}
        onMouseDown={onMouseDownButton}
        onMouseUp={onMouseUpButton}
      >
        {iconButton ? <ReactSVG src={iconButton} alt={titleButton} /> : null}
        {titleButton ? <span>{titleButton}</span> : null}
      </button>
    );
  }
}

export default Button;
