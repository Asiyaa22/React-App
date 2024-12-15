import { useState } from "react";
import Input from "./Input";

function Register(){
    
    const [name, setName] = useState("");
    const [myName, setmyName] = useState("");

    function handleChange(event){
        setName(event.target.value);
        console.log("Typing....", event.target.value);
    }

    function handleClick(event){
        // alert("I am Clicked", name)
        setmyName(name)
        event.preventDefault();
        console.log("the user has registered Successfully")
    }

    return <div className="form-body">
        <div className="wrap">
            <p>Register Yourself</p>
            <h2>Hello {myName}</h2>
            <form action="" onSubmit={handleClick}>
              {/* <input type="text" placeholder="UserName" onChange={handleChange} value={name}/> */}
              <Input type="text" onChange={handleChange}  placeholder="UserName" value={name}/>
              {/* <Input type="password" placeholder="password" />
              <Input type="password" placeholder="Confrim Password" /> */}
              <button className="btn">Register</button>
            </form>
        </div>
    </div>
}

export default Register;