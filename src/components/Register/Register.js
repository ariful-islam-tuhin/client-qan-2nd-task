import React, { useState } from "react"
import "./Register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {


    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }

    const registerFunction = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <> 
        <div className="container row">        
    
            <div className="register col-lg-5">
                {/* {console.log("Usercheck", user)} */}
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                <div className="button" onClick={registerFunction} >Register</div>
                <div>or</div>
                <div className="button" onClick={() => history.push("/login")}>Login</div>
            </div>
            <div className="col-lg-7">
                <img src="https://demo.flatlogic.com/sofia-react/static/media/loginImage.d7078415.svg" alt="" />
            </div>
            </div>
        </>
    )
}

export default Register;