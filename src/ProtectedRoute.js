import React from "react";
import { Route, HashRouter } from "react-router-dom";
const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("token") ? (
          children
        ) : (
          <HashRouter
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
