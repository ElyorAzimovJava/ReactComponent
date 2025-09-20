
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HomePage} from "./pages/HomePage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Nav} from "./pages/Nav.jsx";
import Profile from "./pages/Profile.jsx";
import Setting from "./pages/Setting.jsx";
import Products from "./pages/Products.jsx";

function App() {

  return (
      <Router>
          <Nav/>
          <Routes>
              <Route path = "/" element = {<HomePage/>}/>
              <Route path = "/products/:id" element = {<Products/>}/>
              <Route path = "dashboard" element = {<Dashboard/>}>
                  <Route path = "profile" element = {<Profile/>}/>
                  <Route path = "setting" element = {<Setting/>}/>
              </Route>
              <Route path = "*" element = {<NotFound/>}/>
          </Routes>
      </Router>
  )
}

export default App
