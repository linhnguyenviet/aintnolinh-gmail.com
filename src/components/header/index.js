import React, { Component } from "react";
import icons from "../../constants/icons";
import images from "../../constants/images";
import "./style.scss";
import { Link } from "react-router-dom";
import Button from "../common/button";
import { translate, Trans } from 'react-i18next';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogout: false,
      token: localStorage.getItem("jwtToken")
    };
  }
  handleClickLogout = () => {
    this.setState(prevState => {
      return {
        isLogout: !prevState.isLogout
      };
    });
  };
  logout = () => {
    localStorage.clear("jwtToken");
    this.props.history.push("/login");
  };
  render() {
    const { isLogout, token } = this.state;
    const { t, i18n } = this.props;
    console.log(i18n);

    return (
      <div className="header">
        <Link to="/">
          <img src={icons.logo} alt="logo" className="main-logo" />
        </Link>
        <div className="header-right">
          <div className="user">
            {token ? (
              <div className="logout" onClick={this.handleClickLogout}>
                <img src={images.upic} alt="avatar" />
                {isLogout ? (
                  <button className="logoutButton" onClick={this.logout}>
                    Logout
                  </button>
                ) : null}
              </div>
            ) : (
                <Link to="/login">
                  <img src={images.upic} alt="avatar" />
                </Link>
              )}
          </div>
          <div className="icon">
            <Button onClickButton={() => i18n.changeLanguage('jp')} titleButton="JP" />
            <Button onClickButton={() => i18n.changeLanguage('vi')} titleButton="VI" />
            <img src={icons.icon_find} alt="find" />
            <img src={icons.icon_setting} alt="setting" />
            <img src={icons.icon_noti} alt="noti" />
          </div>
        </div>
      </div>
    );
  }
}
export default translate('translation')(Header)