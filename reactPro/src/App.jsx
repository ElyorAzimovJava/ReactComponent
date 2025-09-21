import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import {UserProvider} from "./context/UserContext.jsx";


function App() {
  return (
      <div>
    <UserProvider>
        <Login/>
        <Checkout/>
    </UserProvider>

      </div>
  );
}

export default App
