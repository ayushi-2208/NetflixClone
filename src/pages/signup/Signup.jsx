import { useRef } from "react";
import { useState } from "react";
import "./signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

export default function Register() {
  const againnavigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [names, setNames] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    console.log(values);
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        console.log(user);
        await updateProfile(user, {
          displayName: values.name,
        });
        againnavigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  const nameRef = useRef();
  const emailRef = useRef();
  // const passwordRef = useRef();
  // const navigate = useNavigate();

  const handleStart = () => {
    setNames(nameRef.current.value);
    console.log("handlemiddle" + nameRef.current.value);
    console.log("handleMiddle-email" + emailRef.current.value);
  };

  const handleMiddle = () => {
    setEmail(emailRef.current.value);
    console.log("handlestart" + emailRef.current.value);
  };

  // const handleFinish = () => {
  //   setPassword(passwordRef.current.value);
  //   navigate('/home');
  // };
  return (
    <div className="signup">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          
          <button className="loginButton"><Link to="/login" style={{textDecoration:"none",color:"white"}}>Sign In</Link></button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!names ? (
          <div className="input">
            <input
              type="name"
              placeholder="Enter your name"
              ref={nameRef}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : !email ? (
          <div className="input">
            <input
              type="email"
              placeholder="Enter your email address"
              ref={emailRef}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <button className="registerButton" onClick={handleMiddle}>
              Next
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
            <button
              className="registerButton"
              onClick={handleSubmission}
              disabled={submitButtonDisabled}
            >
              Start
            </button>
          </form>
        )}
        <b style={{ color: "red" }}>{errorMsg}</b>
      </div>
    </div>
  );
}
