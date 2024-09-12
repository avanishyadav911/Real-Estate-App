import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-r7wg5acvh1qf5ad6.us.auth0.com"
     clientId="g56aP7Ghc7Zs78ocylIwGPlnctTr3D2L"
     authorizationParams={{
      redirect_uri: "https://real-state-app-navy.vercel.app/"
     }}
     audience="https://real-state-app-navy.vercel.app/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
