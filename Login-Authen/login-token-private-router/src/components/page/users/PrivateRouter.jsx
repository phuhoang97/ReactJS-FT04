import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ element: Element, ...rest }) {
  const isValidToken = !!localStorage.getItem("users");

  return isValidToken ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to='/login-user' replace />
  );
}

export default PrivateRoute;
