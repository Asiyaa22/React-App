function Login(){
    return <div className="form-body">
        <div className="wrap">
        <p>Login Form</p>
        <form action="">
            <input type="text" placeholder="Username" name="username" />
            <input type="password" name="password" placeholder="password" id="" />
            <input className="btn" type="button" value="submit" name="submit" />
        </form>
        <p>Or</p>
        <div className="line"></div>
        <button className="auth-btn"><i class="fa-brands fa-google"></i> Login With Google</button>
        </div>
    </div>
}

export default Login;