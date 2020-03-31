import React from "react";
import HomeScreen from "./containers/home/index";
import LoginScreen from "./containers/login/index";
import ProductsScreen from "./containers/management/products/index";
import Page404 from "./components/common/404";
import "./App.css";
import "./i18n";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManageConstructionScreen from "./containers/management";
import PrivateRoute from "./routes/privateRoute";
import EmployeeScreen from "./containers/employee";
import { translate, Trans } from 'react-i18next';

const root = {
  display: "flex"
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={root}>
          <div style={{ width: "100%" }}>
            <Switch>
              <PrivateRoute exact path="/" component={HomeScreen} />
              <Route path="/login" component={LoginScreen} />
              <PrivateRoute path="/products" component={ProductsScreen} />
              <PrivateRoute
                path="/management/:id_construction"
                component={ManageConstructionScreen}
              />
              <PrivateRoute path="/employee" component={EmployeeScreen} />
              <Route path="/error" component={Page404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default translate('translation')(App);
