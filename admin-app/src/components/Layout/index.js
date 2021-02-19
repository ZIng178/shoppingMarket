import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <div>
      <Header />

      {props.children}
    </div>
  );
};

export default Layout;
