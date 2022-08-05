import React from "react";
import TelegramLogo from "./TelegramLogo.svg";
import './Login.css'
import { Container } from 'react-bootstrap'

export default function Login() {
  return (
    <>
      <Container>
      <div className="error-login-content">
      <h3>You should log in first</h3>
      <img src={TelegramLogo} alt="Telegram Logo" />
      </div>
      </Container>
    </>
  );
}
