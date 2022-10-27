import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Hi There....Enter your text here!");
  const ConverToUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const ConverToLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const ClearAll = () => {
    let newtext = "";
    setText(newtext);
  };
  const [basicstyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [stylebtntext, setbtntext] = useState("ENABLE DARK MODE");

  const Appearance = () => {
    if (basicstyle.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("ENABLE DARK MODE");
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtntext("ENABLE LIGHT MODE");
    }
  };
  const Changingtext = (event) => {
    console.log("text changed");
    setText(event.target.value);
  };
  const CopyText = (event) => {
    var text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const RemoveSpace = () => {
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "));
  };
  return (
    <>
      <div className="container">
        <div className="form-group mt-5 text-center">
          <h2>
            <b className={`text-${props.mode === "light" ? "dark" : "light"}`}>
              Enter Text Here....
            </b>
          </h2>

          <textarea
            className="form-control"
            onChange={Changingtext}
            rows="3"
            value={text}
            id="textbox"
          ></textarea>
        </div>

        <div className="field padding-bottom--24 mt-3">
          <button className="btn btn-primary" onClick={ConverToUpper}>
            ConverToUpper
          </button>
          <button className="btn btn-primary mx-3" onClick={ConverToLower}>
            ConverToLower
          </button>
          <button className="btn btn-primary mx-3" onClick={ClearAll}>
            Clear All
          </button>
          <button className="btn btn-primary mx-3" onClick={CopyText}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-3" onClick={RemoveSpace}>
            Remove Extra Space
          </button>
        </div>

        <div className="containerclass" style={basicstyle}>
          <div className="content" style={basicstyle}>
            <h1 style={basicstyle}>Info about Sentence</h1>
            <p>
              {text.split(" ").length - 1} words and {text.length} characters
            </p>
            <p>Took {0.08 * text.split(" ").length} Minutes to Process</p>
            <h2>
              <b> Preview</b>
            </h2>
            <p>
              <b>{text}</b>
            </p>
            <button className="btn btn-primary" onClick={Appearance}>
              {stylebtntext}
            </button>
          </div>

          <div className="flap"></div>
        </div>
      </div>
    </>
  );
}
