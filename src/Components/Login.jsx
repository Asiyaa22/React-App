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

    // const [firstName, setName] = useState("")
    // const [fTxt, setTxt] = useState("")
    // const [secondName, setSecondName] = useState("")
    // const [sTxt, setStxt] = useState("");
    //this is just too much....so to manage complex states we can
    //have objects inside our useState() and those are called hooks
    //lets use hooks and make this code more simple
    //from line 14 to 17 and more I coded that now lets code in more 
    //efficient way....code by instructor

    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });

    function handleChange(event){
        const {value, name} = event.target; 
        // const newValue = event.target.value;
        // const inputName = event.target.name;
        console.log(value);
        console.log(name)
        setFullName( prevValue => {
            if( name === "fName"){
                return {
                    fName: value,
                    lName: prevValue.lName
                }
            }else if( name === "lName"){
                return {
                    fName: prevValue.fName,
                    lName: value
                }
            }
        })
    }

    // function handlefChange(event){
    //     setName(event.target.value)
    //     console.log("typing", event.target.value)
    // }

    // function handlesChange(event){
    //     setSecondName(event.target.value)
    // }
    function handleClick(event){
       setFullName(fullName);
       event.preventDefaukt();
    }


    // function handleClickb(event){
    //     setTxt(firstName);
        // setName(firstName)
        // setSecondName(secondName)
    //     setStxt(secondName)
    //     event.preventDefault();
    // }
   

    return <div className="form-body">
        <div className="wrap">
        <p>Login Form</p>
        {/* <p>Hello {fTxt} {sTxt} </p> */}
        <p>Hello {fullName.fName} {fullName.lName}</p>
        <form action="" onSubmit={handleClick}>
            {/* <Input type="text" placeholder="Username"/> */}
            {/* <Input type="text" placeholder="first Name" onChange={handlefChange} value={firstName} /> */}
            {/* <Input type="text" placeholder="second Name" onChange={handlesChange} value={secondName} /> */}
            <Input type="text" placeholder="Fisrt Name" name="fName" onChange={handleChange} value={fullName.fName}/>
            <Input type="text" placeholder="Last Name" name="lName" onChange={handleChange} value={fullName.lName}/>
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