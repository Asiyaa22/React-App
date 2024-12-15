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

    const [firstName, setName] = useState("")
    const [fTxt, setTxt] = useState("")
    const [secondName, setSecondName] = useState("")
    const [sTxt, setStxt] = useState("");
    //this is just too much....so to manage complex states we can
    //have objects inside our useState()


    function handlefChange(event){
        setName(event.target.value)
        console.log("typing", event.target.value)
    }

    function handlesChange(event){
        setSecondName(event.target.value)
    }
    
    function handleClickb(event){
        setTxt(firstName);
        // setName(firstName)
        // setSecondName(secondName)
        setStxt(secondName)
        event.preventDefault();
    }


    return <div className="form-body">
        <div className="wrap">
        <p>Login Form</p>
        <p>Hello {fTxt} {sTxt} </p>
        <form action="" onSubmit={handleClickb}>
            {/* <Input type="text" placeholder="Username"/> */}
            <Input type="text" placeholder="first Name" onChange={handlefChange} value={firstName} />
            <Input type="text" placeholder="second Name" onChange={handlesChange} value={secondName} />
            <Input type="password" placeholder="Password"/>
            <input style={style} onMouseOver={onOver} onMouseOut={onLeave} className="btn" type="submit" value="Login"/>
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