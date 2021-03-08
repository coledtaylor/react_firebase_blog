import useFetch from '../helpers/useFetch'
import BlogList from '../components/BlogList'

function Home() {
  const { error, isPending, data: blogs } = useFetch('https://fake-server-json.herokuapp.com/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs}/> }
    </div>
  )
}

export default Home
