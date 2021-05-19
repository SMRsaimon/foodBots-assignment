import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import "./Navigation.css";

const Navigation = () => {
  const isActive = {
    fontWeight: "bold",
    backgroundColor: "#0d6efd",
  };
  return (
    <>
      <Header />
      <Navbar collapseOnSelect expand="md" variant="dark" className="container">
        <Navbar.Brand as={Link} to="/">
          <div className="img-container">
            <img
              className=" logo-img"
              src="https://i.ibb.co/mh61wGp/mylogo.png"
              alt=""
              srcset=""
            />
          </div>
        </Navbar.Brand>
        <Nav className="me-auto ms-auto bg-dark ">
          <Nav.Link
            className="p-2"
            activeStyle={isActive}
            as={NavLink}
            to="/userInfo"
          >
            Profile
          </Nav.Link>
          <Nav.Link
            className="p-2"
            activeStyle={isActive}
            as={NavLink}
            to="/orderSummary"
          >
            Order Summary
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
