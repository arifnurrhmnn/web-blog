import React from "react";
import { useHistory } from "react-router-dom";
import "./header.scss";

export default function Header() {
  const history = useHistory();
  return (
    <div>
      <div className="header">
        <p className="logo-app">MERN-Blog</p>
        <p className="menu-item" onClick={() => history.push("/login")}>
          Logout
        </p>
      </div>
    </div>
  );
}
