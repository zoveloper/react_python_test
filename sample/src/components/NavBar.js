import React from 'react'
import logo from '../assets/logoH.png';
import { Navbar,Nav,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <header>
    <Navbar  expand="lg" collapseOnSelect>
        <Container >

        <Navbar.Brand href="/home">
        <img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="logo"
      />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse className="justify-content-end ml-4" id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Link
            className="link"
            to={`/home`} 
            onClick={()=>console.log("WALLET")}
                >
                    WALLET
                </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
    )
}

export default NavBar
