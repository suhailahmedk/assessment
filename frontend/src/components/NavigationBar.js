import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    width: 100%;
    height: 141px;
    background: #283848 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 20px #00000029;
    opacity: 1;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="custom-nav-bar">
      <Navbar.Brand href="/"><img src="#" className="logo"></img><div className="logo-title">Baskyt</div></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="#"><img className="search-icon"></img></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#"><img className="profile-img"></img></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
