import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Button, Alert } from 'react-bootstrap' 

function Navbar() {
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
      <nav className="navbar">
        <h1>Fox Blog</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="links">
          <Link to="/">Home</Link>
          {currentUser && <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Blog</Link>}
          {currentUser && <Button variant="link" onClick={handleLogout}>
          Log Out
          </Button>}
          {!currentUser && <Link to="/signup">Sign Up</Link>} 

        </div>
      </nav>
    </div>
  )
}

export default Navbar
