import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const currentUser = useAuth()
  const history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault()
    const blog = {title, body, author, user: currentUser.currentUser.email}

    fetch('https://fake-server-json.herokuapp.com/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
    .then(() => {
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit} >
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
        </input>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default Create
