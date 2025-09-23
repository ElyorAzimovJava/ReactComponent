import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import Logout from "./pages/Logout.jsx";
import useDisplayMessage from "./hooks/useDisplayMessage.js";


function App() {
    const [message, displayMessage] = useDisplayMessage();
    displayMessage();
  return (
   <div>
       Message  is {message}
   </div>
  )
}

export default App
