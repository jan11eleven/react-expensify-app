import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info's</h1>
    <p>The info's are: {props.info}</p>
  </div>
);

const adminWarningInfo = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is an admin warning</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

const AdminInfo = adminWarningInfo(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="Some details" />,
  document.querySelector("#app")
);
