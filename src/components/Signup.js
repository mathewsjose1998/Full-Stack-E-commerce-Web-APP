import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

const Signup = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const signUp = (e) => {
    console.log("signup");
    e.preventDefault();
    // for reloaad without refreshing

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        //successfully create a user with email and passowrd
        auth.currentUser.updateProfile({
          displayName: name,
          photoURL: `https://i.pravatar.cc/150?u=${email}`,
          address: "2211 whirlaway Dr , Stafford",
        });
        history.push("/");
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <h2>Create Your Account</h2>
        <div className="login__input">
          <input
            type="email"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button className="login__button" type="submit" onClick={signUp}>
          SIGN UP
        </button>
        <p>Already have an account?</p>
        <div className="signup__buttons">
          <button className="signup__button">LOGIN INSTEAD</button>
          <button className="signup__button__google">SIGNUP WITH GOOGLE</button>
        </div>
      </div>
    </div>
    // <div>
    //      <div className="signup">
    //     <div className="signup__container">
    //         <h2>Create your Account</h2>
    //         <div className="signup__input">
    //             <input type="email" placeholder="Email Address" value={email} onChange={(e)=> setemail(e.target.value)}/>
    //             <input type="password" name="" id="" placeholder="Password" value={password} onChange={(e)=> setpassword(e.target.value)}/>
    //         </div>
    //         <button className="signup__button">SIGN UP</button>
    //         <p>Already have an account?</p>

    //         <div className="signup__buttons">
    //             <button className="signup__button" type="submit" onClick={signUp}>Login Instead</button>
    //             <button className="signup__button__google">SIGNUP WITH GOOGLE</button>
    //         </div>
    //     </div>
    // </div>
    // </div>
  );
};

export default Signup;
