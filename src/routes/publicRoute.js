import React from "react";
import Page404 from "../components/common/404";
import { Route } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  layout: Layout,
  childLayout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <Layout childLayout={childLayout}>
            {Component ? <Component {...props} /> : <Page404 />}
          </Layout>
        );
      }}
    />
  );
};

export default PublicRoute;
