import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceworker";
import b2cauth from "react-azure-b2c";

b2cauth.initialize({
  // instance: "https://login.microsoftonline.com/tfp/",
  // tenant: "peachitad.onmicrosoft.com",
  // signInPolicy: "B2C_1_react_signup",
  // applicationId: "702f55a3-72fd-4da1-a22b-1dc82e70a049",
  // cacheLocation: "sessionStorage",
  // scopes: ["https://peachitad.onmicrosoft.com/api/user_impersonation"],
  // redirectUri: "http://localhost:3000",
  // postLogoutRedirectUri: window.location.origin,
  instance: "https://auditmypayrollv1.b2clogin.com/",
  tenant: "auditmypayrollv1.onmicrosoft.com",
  signInPolicy: "B2C_1_SignUpandSignIn",
  applicationId: "293a7bda-7560-4de6-89f8-e6876881e582",
  cacheLocation: "sessionStorage",
  scopes: ["https://auditmypayrollv1.onmicrosoft.com/api/question.read"],
  redirectUri: "http://localhost:3000",
  postLogoutRedirectUri: window.location.origin,
});

b2cauth.run(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  serviceWorker.unregister();
});

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
