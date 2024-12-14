import { useState } from "react";
// import Input from "./Input";

function Register(){
    
    const [name, setName] = useState("")

    function handleChange(event){
        setName(event.target.value);
        console.log("Typing....", event.target.value);
    }

    return <div className="form-body">
        <div className="wrap">
            <p>Register Yourself</p>
            <h2>Hello {name}</h2>
            <form action="">
              <input type="text" placeholder="UserName" onChange={handleChange} value={name}/>
              {/* <Input type="text" onChange={handleChange} placeholder="UserName" value={name}/> */}
              {/* <Input type="password" placeholder="password" />
              <Input type="password" placeholder="Confrim Password" /> */}
              <button className="btn" type="submit">Register</button>
            </form>
        </div>
    </div>
}

export default Register;