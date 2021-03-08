import Nav from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import BlogDetails from './pages/BlogDetails'
import NotFound from './pages/NotFound'
import Signup from './components/Signup'
import SignIn from './components/SignIn'
import UpdateProfile from './components/UpdateProfile'
import ForgotPassword from './components/ForgotPassword'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <SignIn />
              </Route>
              <Route path="/forgotpassword">
                <ForgotPassword />
              </Route>
              <PrivateRoute path="/create">
                <Create/>
              </PrivateRoute>
              <PrivateRoute path="/updateprofile">
                <UpdateProfile />
              </PrivateRoute>
              <Route exact path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
