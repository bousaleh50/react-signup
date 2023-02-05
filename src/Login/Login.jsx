import { useEffect, useState } from "react"
import "./login.css"

export function Login(){

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [submited,setSubmited]=useState(false);


    const handleSubmit=(event)=>{
        event.preventDefault();
        setSubmited(true)
    }

    return(
        <div className="container">
            <div className="subContainer">
                <div className="left">
                    <h1 id="title">
                        Learn to code by watching others
                    </h1>
                    <div>
                        <p id="description">
                            See how experienced developers solve problemes in real-time Watching scrpted tutorials is great.but understanding how developers think is invaluable.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="formContainer">
                        <div className="price">
                            Try it free 7days <span>then $20/mo.thereafter</span>
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input type="text" name="firstName"  id="firstName" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}
                                    className={firstName=="" && submited?"errorActive":""}
                                    />
                                    <label id="errorMessage">
                                       {
                                        firstName=="" && submited?"the first Name should not be empty":""
                                       }
                                    </label>
                                </div>
                                <div>
                                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}
                                    className={lastName=="" && submited?"errorActive":""}
                                    />
                                    <label id="errorMessage">
                                       {
                                        lastName=="" && submited?"the last Name should not be empty":""
                                       }
                                    </label>
                                </div>
                                <div>
                                    <input type="email" name="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}
                                    className={email=="" && submited?"errorActive":""}
                                    />
                                    <label id="errorMessage">
                                      {
                                        email=="" && submited?"the email should not be empty":""
                                       }
                                    </label>
                                </div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="Passowrd" onChange={(e)=>setPassword(e.target.value)}
                                    className={password=="" && submited?"errorActive":""}
                                    />
                                    <label id="errorMessage">
                                     {
                                        password=="" && submited?"the password should not be empty":""
                                       }
                                    </label>
                                </div>
                                <div>
                                    <button id="submitBtn" type="submit">Claim your Free Trial</button>
                                </div>
                                <div className="terms-and-services">
                                    by clicking the buttin you are agreeing to our <a href="#" id="terms">Terms and Services</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}