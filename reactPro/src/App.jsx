import Hello from "./component/Hello.jsx"
import Fruits from "./component/Fruits.tsx"
import Event from "./component/Event.jsx";
import Counter from "./component/Counter.jsx";
import {useReducer} from "react";

function App() {
   const [state,dispatch] = useReducer(reducer, {count: 0, incrementBy :1});
   function reducer(state, action){
    if(action.type === "increment"){
        return  {...state, count : state.count + state.incrementBy};
    }
    if(action.type === "decrement"){
        return  {...state, count : state.count - state.incrementBy}
    }
    if(action.type === "setIncrement"){
        return {...state, incrementBy : action.payload}
    }
   }
  return <div className="App">


      <h1>UseReducer {state.count}</h1>
      <input value = {state.incrementBy}
             onChange={(e) => dispatch({type: "setIncrement", payload : Number(e.target.value)})}/>
      <button onClick ={()=> dispatch({type : "increment", payload : 1})} >Increment</button>
      <button onClick ={()=> dispatch({type : "decrement", payload : 1})} >Decrement</button>
         </div>
}

export default App
