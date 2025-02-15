import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../../UserContext";
import logo from "./logo.svg";

import HomeNav from "../NavBar/HomeNav";
import useApplicationData from "../../hooks/useApplicationData";

export default function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const { state } = useApplicationData();

  const validateForm = () => {
    if (!email) {
      setError("Email cannot be blank");
      return false;
    }
    setError("");
    if (!password) {
      setError("Password cannot be blank");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post(
          "http://localhost:8080/login/login",
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then(() => {
          const mentee = state.mentees.filter((user) => {
            if (user.email === email) {
              return user;
            }
          });

          const mentor = state.mentors.filter((user) => {
            if (user.email === email) {
              return user;
            }
          });

          if (typeof mentee[0] === "object") {

            login(mentee[0]);

            // login(mentee)
          } else if (typeof mentor[0] === "object") {
            login(mentor[0]);
          }
          const menteeEmail = state.mentees.map(
            (menteeEmails) => menteeEmails.email
          );
          const mentorEmail = state.mentors.map(
            (mentorEmails) => mentorEmails.email
          );
          if (menteeEmail.includes(email.toLowerCase())) {
            navigate("/dashboard/mentee/menteefeed");
          }
          if (mentorEmail.includes(email.toLowerCase())) {
            navigate("/dashboard/mentor/mentorfeed");
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div>
      <HomeNav />
      <div className="login-wrapper">
        <div className="orange-main">
          <div className="register-btn">
            <button className="button-52" type="submit">
              <Link to="/register">
                <span className="register-btn-text">Register</span>
              </Link>
            </button>
          </div>
          <div className="transparent-text"></div>
          <div className="sage-block">
            <div className="head-main">
              <span className="head-left"> S</span>
              <img className="o3" src={logo} alt="logo" />
              <span className="head-right">GE</span>
              <div className="login">
                {!email || !password ? (
                  <div>
                    <h4> Please enter email and password to proceed.</h4>
                  </div>
                ) : (
                  <h4>“The expert in anything was once a beginner.”</h4>
                )}
                <form onSubmit={handleSubmit} action="">
                  <input
                    type="text"
                    name=""
                    id="email"
                    placeholder="email"
                    className="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                  <input
                    type="password"
                    name=""
                    id="password"
                    placeholder="password"
                    className="pass"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                  <button className="button-52" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
