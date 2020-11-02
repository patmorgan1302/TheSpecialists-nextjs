import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';


export default function FirstPost(){
    return (
    <>

   <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="bottom" style={{ height: "85px" }} >
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="header" href="/Scheduler">Schedule an Estimate</Nav.Link>
                <Link href="/"><a>Back To Home</a></Link>
              <Nav.Link className="header" href="/Previous Work">View our Work</Nav.Link>
            </Nav>
            <Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
   </div>


    <h2>
        <Link href="/">
        <a>Back to home</a>
        </Link>
    </h2>


    </>
    )
};