import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export const Header = () => {
  const whishlist= useSelector((state)=>state.wishlistReducer)
  const cart= useSelector((state)=>state.cartReducer)
  return (
    <>
      <Navbar style={{zIndex:1}} expand="lg" className="bg-body-tertiary position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand  ><Link to={'/'} style={{ color: 'blueviolet', fontWeight: 'bold', textDecoration: 'none' }}>
            <i class="fa-sharp fa-solid fa-cart-shopping fa-bounce" ></i>E-Cart</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link> <Link to={'/whishlist'} className='d-felex align-item-center' style={{textDecoration:'none',color:'red',fontSize:20}}>Whishlist
             <Badge className='rounded ms-2 bg-success'>{whishlist.length}</Badge>
             </Link></Nav.Link>

              <Nav.Link ><Link to={'cart'}className='d-felex align-item-center' style={{textDecoration:'none',color:'red',fontSize:20}} >Cart
              <Badge className='rounded ms-2 bg-success'>{cart?.length}</Badge>
              </Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
