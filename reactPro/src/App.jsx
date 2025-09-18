import Hello from "./component/Hello.jsx"
import Fruits from "./component/Fruits.tsx"
import Event from "./component/Event.jsx";
import Counter from "./component/Counter.jsx";
import {useReducer, useState} from "react";

function App() {
    const [isError, setIsError] = useState(false);
    function reducer(state, action){
      if(action.type === "add"){
          return {...state, balance: state.balance + action.payload}
       }
      if(action.type === "subtract"){
          if(state.balance < action.payload){
              setIsError( true);
              return state;
          }
          return {...state, balance: state.balance - action.payload}
      }
    }
    const [amount, setAmount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {balance:0})
  return (
      <div>
          <h1>Current balance {state.balance}</h1>
          <input value = {amount} onChange={(e) => setAmount(Number(e.target.value))}/>
          <button onClick={()=> dispatch({type:"add", payload: amount})}>Deposit</button>
          <button onClick={()=> dispatch({type:"subtract", payload: amount})}>Withdraw</button>
          {isError ? <h1 style={{color : "red"}}>Insufficient balance</h1> : ""}
      </div>
  )
}

export default App
