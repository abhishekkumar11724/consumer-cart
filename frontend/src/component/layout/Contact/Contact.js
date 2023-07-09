import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:abhishek.k.11724@gmail.com">
        <Button>Contact: abhishek.k.11724@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
