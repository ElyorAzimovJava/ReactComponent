import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import Logout from "./pages/Logout.jsx";


function App() {
  return (
      <div>
    <UserProvider>
        <Login/>
        <Checkout/>
        <Logout/>
    </UserProvider>

      </div>
  );
}

export default App
