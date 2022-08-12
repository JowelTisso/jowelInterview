import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../../utils/Constants";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/signup");
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      if (mail && password) {
        const res = await axios.post(`${API.login}${mail}/login`, {
          password,
        });
        console.log(res.data);
      } else {
        alert("Fill all details!");
      }
    } catch (err) {
      console.log(err);
    }
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
        <form className="login-form" onSubmit={loginHandler}>
          <label htmlFor="">email</label>
          <input type="email" onChange={mailHandler} />
          <label htmlFor="">password</label>
          <input type="password" onChange={passwordHandler} />
          <button type="submit" className="mg-top-2x">
            Login
          </button>
        </form>
      </article>

      <button className="mg-top-5x" onClick={navigateToSignup}>
        Signup
      </button>
    </div>
  );
};

export default Login;
