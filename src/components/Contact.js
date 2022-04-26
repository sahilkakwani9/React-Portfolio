import React from "react";
import "./Contact.css";
import db from "./firebase";
import firebase from "firebase/compat/app";
function Contact() {
  const sendmsg = () => {
    db.collection("TEST").add({
      name: "sahil",
    });
  };
  return (
    <>
      <div className="contact-box">
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email-Id</label>
        <input type="text" />
        <button type="submit" onClick={sendmsg}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Contact;
