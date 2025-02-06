import React, { useState } from "react";

export default function TextForm(props) {
  const HandleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case.", "success");
  };

  const HandleclearClick = () => {
    setText("");
    props.showAlert("Text cleared.", "success");
  };

  const HandleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case.", "success");
  };

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

  const HandleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied.", "success");
  };

  const HandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Space Removed.", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "primary" ? "#212529" : "white" }}>
          {props.heading}
        </h1>
        <textarea
          className={`form-control ${props.mode === "primary" ? "light-placeholder" : "dark-placeholder"}`}
          placeholder="Enter the text here..."
          id="myBox"
          value={text}
          style={{
            backgroundColor: props.mode === "primary" ? "white" : "#495057", //495057
            color: props.mode === "primary" ? "#212529" : "white",
          }}
          onChange={HandleOnChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={HandleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleclearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleExtraSpaces}>
          Remove Space
        </button>
      </div>
      <div className="container">
        <h2 style={{ color: props.mode === "primary" ? "#212529" : "white" }}>
          Text Summary
        </h2>
        <p style={{ color: props.mode === "primary" ? "#212529" : "white" }}>
          Words:{" "}
          {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} and
          Characters: {text.length}
        </p>
        <p style={{ color: props.mode === "primary" ? "#212529" : "white" }}>
          {0.008 * text.split(" ").length} minutes read
        </p>
        <h2 style={{ color: props.mode === "primary" ? "#212529" : "white" }}>
          Preview
        </h2>
        <p style={{ color: props.mode === "primary" ? "#212529" : "white" }}>
          {text}
        </p>
      </div>
    </>
  );
}
