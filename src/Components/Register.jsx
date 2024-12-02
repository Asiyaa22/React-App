import Input from "./Input";

function Register(){
    return <div className="form-body">
        <div className="wrap">
            <p>Register Yourself</p>
            <form action="">
              <Input type="text" placeholder="UserName"/>
              <Input type="password" placeholder="password" />
              <Input type="password" placeholder="Confrim Password" />
              <button className="btn" type="submit">Register</button>
            </form>
        </div>
    </div>
}

export default Register;