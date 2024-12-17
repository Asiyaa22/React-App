import { useState } from "react";
import Input from "./Input";

function Register(){
    
    const [details, setDetails] = useState({
        user: "",
        mail: ""    
    });


    function handleChange(event){
        const {value, name} = event.target;
        console.log("vlaue is", value);
        console.log("name is ", name);
        setDetails( prevValue => {
            if( name === "user"){
                return {
                    user: value,
                    mail: prevValue.mail
                }
            }else if( name === "mail"){
                return {
                    user: prevValue.user,
                    mail: value
                }
            }
        })
    }
    // const [myName, setmyName] = useState("");

    // function handleChange(event){
    //     setName(event.target.value);
    //     console.log("Typing....", event.target.value);
    // }

    // function handleClick(event){
        // alert("I am Clicked", name)
        // setName(name)
        // event.preventDefault();
        // console.log("the user has registered Successfully")
        // console.log(`the user ${name} has registered successfully`)
    // }
    function handleClick(event){
        setDetails(details);
        event.preventDefault();
        console.log("the form is submitted");
    }

    // const [mail, setMail] = useState("");

    // function handleMailChange(event){
    //   setMail(event.target.value)
    // }

    return <div className="form-body">
        <div className="wrap">
            <p>Register Yourself</p>
            <h2>Hello {details.user}</h2>
            <p>Mail {details.mail}</p>
            <form action="" onSubmit={handleClick}>
              {/* <input type="text" placeholder="UserName" onChange={handleChange} value={name}/> */}
              <Input type="text" onChange={handleChange}  placeholder="UserName" value={details.user} name="user"/>
              <Input type="text" onChange={handleChange} placeholder="Enter mail" value={details.mail} name="mail"/>
              {/* <Input type="password" placeholder="password" />
              <Input type="password" placeholder="Confrim Password" /> */}
              <button className="btn" type="submit">Register</button>
            </form>
        </div>
    </div>
}

export default Register;