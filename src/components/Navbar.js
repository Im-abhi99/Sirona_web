import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Form from 'react-bootstrap/Form';

function CollapsibleExample() {
  return (
<div className="mt-lg-2">
<Navbar collapseOnSelect expand="lg" bg="white" variant="white">
  
    <Navbar.Brand href="#home"><img className='w-50' src="https://files.thesirona.com/site-images/original/253x72.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Form className="d-flex w-100 ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1"
                    aria-label="Search"
                    
                  />
            
                </Form>

          </Nav>
          <Nav > 

            <Nav.Link href=""><i class="fa-solid fa-xl fa-bag-shopping pe-lg-4"></i></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> 
            <i class="fa-solid  fa-xl fa-user"></i>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
</Navbar>
      <Navbar  className='row z-1 shadow' variant="light">
        <Container  >
          <Nav className=" me-auto" id="nav">
            <Nav.Link className='navlink'  href="#home">SHOP ALL</Nav.Link>
            <Nav.Link  className='navlink' href="#features ">PERIOD CARE</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">INIMATE CARE</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">TOILET HYGIENE</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">PERSONAL SAFETY</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">HAIR REMOVAL</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">KITS</Nav.Link>
            <Nav.Link className='navlink' href="#">BLOG</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</div>
   

  );
}

export default CollapsibleExample;