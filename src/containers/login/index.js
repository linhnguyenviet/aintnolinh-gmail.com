import React, { Component } from "react";
import "./style.scss";
import Button from "../../components/common/button";
import Input from "../../components/common/input";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import icons from "../../constants/icons";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("jwtToken")) {
      this.props.history.push("/");
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const { token } = this.props;
    if (username && password) {
      this.setState({
        isLoading: true
      });
      // handle login here
      this.props.loginUser({
        username: this.state.username,
        password: this.state.password
      });
      if (token) {
        this.props.history.push("/");
      }
    }
  }

  render() {
    const { error } = this.props;
    return (
      <div className="FM00">
        <div className="login">
          <img src={icons.logo_login} alt="logo" />
          <p>LOGIN</p>
          <h5>{error}</h5>
          <form name="form" onSubmit={this.handleSubmit} method="POST">
            <input
              type="text"
              placeholder="User Name or Email"
              className="text-input"
              name="username"
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              name="password"
              onChange={this.handleChange}
            />
            <label>
              <Input typeInput="checkbox" />
              Remember me on this computer
            </label>
            <Button titleButton="LOGIN" />
            <span className="forgot-password">
              Forgot your password?{" "}
              <a href="www.google.com">click here to reset it.</a>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});
const mapStateToProps = state => ({
  error: state.auth.error,
  token: state.auth.token
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
