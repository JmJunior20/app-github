import React from "react";

import "./style.css";
import Logo from "../imagens/logo-jmdeveloper1.png";

const Header = (props) => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo JmJuniorDeveloper" />
      <h1>{props.children}</h1>
    </div>
  );
};

export default Header;
