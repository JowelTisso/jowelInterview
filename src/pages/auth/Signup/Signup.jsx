import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../../utils/Constants";

const Signup = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      if (firstName && lastName && mail && password) {
        const res = await axios.post(`${API.signup}`, {
          firstname: firstName,
          lastname: lastName,
          email: mail,
          password: password,
        });
        console.log(res.data);
      } else {
        alert("Fill all details!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const FirstNameHandler = ({ target }) => {
    setFirstName(target.value);
  };

  const LastNameHandler = ({ target }) => {
    setLastName(target.value);
  };
  const mailHandler = ({ target }) => {
    setMail(target.value);
  };

  const passwordHandler = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div className="wrapper flex-center">
      <article className="card">
        <form className="login-form" onSubmit={signupHandler}>
          <label htmlFor="">Firstname</label>
          <input type="text" onChange={FirstNameHandler} />
          <label htmlFor="">Lastname</label>
          <input type="text" onChange={LastNameHandler} />
          <label htmlFor="">email</label>
          <input type="email" onChange={mailHandler} />
          <label htmlFor="">password</label>
          <input type="password" onChange={passwordHandler} />
          <button type="submit" className="mg-top-2x">
            Signup
          </button>
        </form>
      </article>
      <button onClick={navigateToLogin} className="mg-top-5x">
        Login
      </button>
    </div>
  );
};

export default Signup;
