
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Nav} from "./pages/Nav.jsx";

function App() {

  return (
      <Router>
          <Nav/>
          <Routes>
              <Route path = "/" element = {<HomePage/>}/>
              <Route path = "dashboard" element = {<Dashboard/>}/>
              <Route path = "*" element = {<NotFound/>}/>
          </Routes>
      </Router>
  )
}

export default App
