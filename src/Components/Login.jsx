import Input from "./Input.jsx";
import { useState } from "react";
function Login(){
    const [style, setStyle] = useState({backgroundColor: "black"});
    
    function onOver(){
      setStyle({ backgroundColor: "pink" })
    }

    function onLeave(){
        setStyle({ backgroundColor: "black" })
    }


    return <div className="form-body">
        <div className="wrap">
        <p>Login Form</p>
        <form action="">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <input style={style} onMouseOver={onOver} onMouseOut={onLeave} className="btn" type="button" value="Login"/>
        </form>
        <p>Or</p>
        <div className="line"></div>
        <button className="auth-btn"><i className="fa-brands fa-google"></i> Login With Google</button>
        </div>
    </div>
}

export default Login;



{/* <input type="text" placeholder="Username" name="username" />
<input type="password" name="password" placeholder="password" id="" />
<input className="btn" type="button" value="submit" name="submit" /> */}