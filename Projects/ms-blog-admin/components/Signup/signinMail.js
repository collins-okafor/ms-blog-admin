import Link from "next/link";
import React from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { MailBody, MailContainer } from "./styles/mailSignup";
import { useDispatch } from "react-redux";
import { getLoginPageCounter } from "../../store.js/actions/authAction";

const MailSignIn = () => {
  const dispatch = useDispatch();
  return (
    <MailBody>
      <MailContainer>
        <h3>Admin Login</h3>
        <div className="inputContainer">
          <label>Your email</label>
          <input type="mail" />
        </div>
        <div className="inputContainer">
          <label>Password</label>
          <input type="mail" />
        </div>
        <button className="signUpButton">Login</button>
      </MailContainer>
    </MailBody>
  );
};

export default MailSignIn;
