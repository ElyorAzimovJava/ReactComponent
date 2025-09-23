import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import Logout from "./pages/Logout.jsx";
import useDisplayMessage from "./hooks/useDisplayMessage.js";


function App() {

  return (
   <div>
       <Login/>
   </div>
  )
}

export default App
