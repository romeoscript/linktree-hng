import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [emailChange, setEmailChange] = useState("");
  const [nameChange, setNameChange] = useState("");
  const [lnameChange, setLnameChange] = useState("");
  const [messageChange, setMessageChange] = useState("");
  const name = `{name}`;

  const emailChangeHandler = (event) => {
    setEmailChange(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setNameChange(event.target.value);
  };
  const lnameChangeHandler = (event) => {
    setLnameChange(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessageChange(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const submittedvalues = {
      last: lnameChange,
      first: nameChange,
      email: emailChange,
      message: messageChange,
    };
    console.log(submittedvalues);
    setMessageChange("");
    setLnameChange("");
    setNameChange("");
    setEmailChange("");
  };
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form action="#" onSubmit={submitHandler}>
        <main className="form__flex">
          <div>
            <label htmlFor="first_name">First name</label> <br />
            <input
              type="text"
              id="first_name"
              className={nameChange.trim() === "" ? "error__state" : "romeo"}
              value={nameChange}
              placeholder="Enter your first name"
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last name</label> <br />
            <input
              type="text"
              id="last_name"
              className={lnameChange.trim() === "" ? "error__state" : "romeo"}
              value={lnameChange}
              placeholder="Enter your Last name"
              onChange={lnameChangeHandler}
            />
          </div>
        </main>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          className={emailChange.trim() === "" ? "error__state" : "romeo"}
          value={emailChange}
          placeholder="yourname@email.com"
          onChange={emailChangeHandler}
        />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name=""
          className={messageChange.trim() === "" ? "error__state" : "romeo"}
          value={messageChange}
          id="message"
          cols="30"
          rows="10"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          onChange={messageChangeHandler}
        ></textarea>
        <span className={messageChange.trim() === "" ? "spanny" : "span"}>
          Please enter a message
        </span>{" "}
        <br />
        <label className="checkbox" htmlFor="checkbox">
          <input type="checkbox" className="check__input" id="checkbox" />
          <div className="checkbox__box">
          
          </div>
          You agree to providing your data to {name} who may contact you.
        </label>
        <input type="submit" id="btn__submit" value="Send message" />
      </form>
    </div>
  );
};

export default Contact;
