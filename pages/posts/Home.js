import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar, Nav, Container, } from 'react-bootstrap';
export default function Home() {
  return (
   <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="bottom" style={{height: "85px", marginTop: '792px'}} >
        <Navbar.Brand>
          <img 
            className="d-inline-block align-top"
            src={Sign} 
            thumbnail 
            width="92"
            height="66"
            alt="the-blocker"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="header" href="/Scheduler">Schedule an Estimate</Nav.Link>

              <Nav.Link className="header" href="/Previous Work">View our Work</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="header" href="/Contact Page">Contact Us!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

  
   </div>
  )
};
