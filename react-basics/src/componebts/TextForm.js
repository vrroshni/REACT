import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("Hi There....Enter your text here!");
  const ConverToUpper = () => {
    console.log("Converted");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const Changingtext = (event) => {
    console.log("text changed");
    setText(event.target.value);
  };

  return (
    <div className="container">
      <div className="form-group mt-5 text-center">
        <h2><b>Enter Text Here....</b></h2>
       
        <textarea
          className="form-control"
          onChange={Changingtext}
          rows="3" value={text}
        ></textarea>
      </div>

      <div className="field padding-bottom--24 mt-3">
        <button className="btn btn-primary" onClick={ConverToUpper}>
          ConverToUpper
        </button>
      </div>
    </div>
  );
}
