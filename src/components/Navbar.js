import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Button, Alert, Navbar, Popover, OverlayTrigger, Nav } from 'react-bootstrap' 
import { PersonSquare } from 'react-bootstrap-icons'

function NavbarCustom() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand><h1>MKD Blog</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {error && <Alert variant="danger">{error}</Alert>}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-md-auto d-flex justify-content-center align-items-center flex-row">

            <Nav.Link className="mx-1">
              <Link to="/" id="create-link">Home</Link>
            </Nav.Link>

            {currentUser &&
              <Nav.Link className="mx-2">
                <Link to="/create" style={{ 
                  color: 'white', 
                  backgroundColor: '#f7b733',
                  borderRadius: '8px' 
                  }}>New Blog
                </Link>
              </Nav.Link>
            }
              
            {currentUser &&
              <Nav.Link className="mx-2">
                <OverlayTrigger 
                  trigger="click"
                  key='bottom'
                  placement='bottom'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <Nav.Link>
                          <Link to="/updateprofile">Update Profile</Link>
                        </Nav.Link>
                        <Nav.Link>
                          <Link onClick={handleLogout}>Logout</Link>
                        </Nav.Link>
                      </Popover.Content>
                    </Popover>
                  }>
                  <PersonSquare style={{ 
                    fontSize: '25px',  
                  }}/>
                </OverlayTrigger>
              </Nav.Link>    
            }

            {!currentUser && 
              <Nav.Link className="mx-2">
                <Link to="/signup" id="signup-link">Sign Up</Link> 
              </Nav.Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarCustom
