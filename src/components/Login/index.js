import React,{useState, useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


const Login = ({clearLogin,logIn,login, history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formValid,setFormValid] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!email && !password){
            setFormValid(true)
        }else{
            setFormValid(false)
            logIn(email,password)
        }
        
    }

    useEffect(() => {
        if(login.isLoggedIn){
            localStorage.setItem("user",JSON.stringify(email))
            history.push("/dashboard")
        }

    },[login])

    return (
        <div className="form-signin">
    {
        login.loading && 
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    }

        {
            formValid &&
            <Alert variant="danger">
               Please fill
            </Alert>
        }

        {login.logginError && <Alert variant="danger">
        Loggin Error
    </Alert>}
        
        
        <h3>Login to stars wars</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-label-group">
            <label htmlFor="inputEmail">User Name</label>
            <input value={email} type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-label-group">
            <label htmlFor="inputEmail">password</label>
            <input value={password} type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="form-label-group">
            <input type="submit" value="Submit" className="btn btn-primary" disabled={login.loading} />
          </div>
        </form>
      </div>
    )
}


export default Login;