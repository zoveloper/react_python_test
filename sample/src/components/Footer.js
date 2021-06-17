import React from 'react'
import {Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './componentStyles.css'

function Footer() {

    return (
    <div>
        <Container>
        <Row>
            <Col md={9}>
                <Link
                className="link"  
                to={`/home`}  
                onClick={()=>console.log("click1")}
                >
                    StreetSmart
                </Link>
            </Col>
            <Col md={1}>
                <Link
                className="link"
                to={`/home`} 
                onClick={()=>console.log("click2")}
                >
                    ENTERMARKET
                </Link>
            </Col>
        </Row>
        </Container>
            
    </div>
    )
}

export default Footer
