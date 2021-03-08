import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import useFetch from '../helpers/useFetch';
import { useAuth } from '../contexts/AuthContext'

const BlogDetails = () => {

  const currentUser = useAuth()

  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`https://fake-server-json.herokuapp.com/blogs/${id}`)
  const history = useHistory()

  const handleClick = () =>{
    fetch(`https://fake-server-json.herokuapp.com/blogs/${id}`, {
      method: 'DELETE'
    })
    .then(() =>{
      history.push('/')
    })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          { blog.user === currentUser.currentUser.email && <button onClick={handleClick}>delete</button> }
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;