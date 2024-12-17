// import React from "react"
import Login from "./Components/Login"
import Register from "./Components/Register"

// const loggedIn = false;
const isRegistered = true;
// const isRegistered = false;

// function conditionalRendering(){
//   if(loggedIn === true){
//     return <h2>Hello World</h2>
//   }else{
//     return <Login />
//   }
  //to transform whole of this if statement in an expression 
  //we can use ternary operator
  //Ternary Operator goes like this
  //Condition ? Do if True : Do if False
  // so with ternary operator above code can be this 
  // loggedIn === true ? <h2>Hello</h2> : <Login />
  //We can even use AND Operator --> && Operator in React works like this Refer my notes fine
// }

function App(){
  return <div className="main">
    {isRegistered === true ? <Register /> : <Login />}
    {/* {loggedIn === true ? <h2>Hello, This is Home page</h2> : <Login />} */}
    {/* {conditionalRendering()} */}
  </div>
}

export default App; 