import './App.css'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { react, useState } from 'react'
import Data from './data.js'
import { Link, Route, Switch } from 'react-router-dom'

function App() {
  const [shoes, setShoes] = useState(Data)

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>ShoeShop</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path='/'>
        <div>
          <div className='jumbotron background'>
            <h1>20% Season OFF</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant='primary'>Learn more</Button>
            </p>
          </div>

          <div className='container'>
            <div className='row'>
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />
              })}
            </div>
          </div>
        </div>
      </Route>

      <Route path='/detail'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src='https://codingapple1.github.io/shop/shoes1.jpg'
                width='100%'
              />
            </div>
            <div className='col-md-6 mt-4'>
              <h4 className='pt-5'>Title</h4>
              <p>Description</p>
              <p>$120</p>
              <button className='btn btn-danger'>SUBMIT ORDER</button>
            </div>
          </div>
        </div>
      </Route>
    </div>
  )
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='100%'
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App
