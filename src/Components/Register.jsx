import { useState } from "react";
import Input from "./Input";

function Register(){
    
    const [name, setName] = useState("")

    function handleSubmit(event){
        // setName(event.input.value)
        console.log(event.target.value)
    }

    return <div className="form-body">
        <div className="wrap">
            <p>Register Yourself</p>
            <h2>Hello {name}</h2>
            <form action="">
              <Input type="text" onChange={handleSubmit} placeholder="UserName" value={name}/>
              {/* <Input type="password" placeholder="password" />
              <Input type="password" placeholder="Confrim Password" /> */}
              <button className="btn" type="submit">Register</button>
            </form>
        </div>
    </div>
}

export default Register;