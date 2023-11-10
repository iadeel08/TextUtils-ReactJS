// import React, {useState} from 'react'
import React, { useState } from "react";

export default function TextF(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase", "success")
  };
  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
   props.showAlert("Convert to LowerCase", "success")
  };
  const handleOnChange = (event) => {
        setText(event.target.value);
  };
          const handleCopy = () => {

          // let text = document.getElementById("myBox");
          // text.select();
          navigator.clipboard.writeText(text);
          document.getSelection().removeAllRanges();
          props.showAlert("copy to clipboard", "success")
        

          };
  
          const handleClearText = () => {
          let newText = "";
          setText(newText);


          };
          const handleRemoveExtraSpaces = () => {
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));     
          };

  const [text, setText] = useState("");
 
 
    return (
    <>
    <div className="container" style={ { color:props.mode==="dark"?'white':'#042743'} }>
      <h1>{props.heading} </h1>
      <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={ { backgroundColor:props.mode==="dark"?'#46505C':'white',color:props.mode==="dark"?'white':'#042743'} } id="myBox" rows="8" ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear</button>
    </div>
    <div className="container my-3" style={ { color:props.mode==="dark"?'white':'#042743'} }>
        <h2>Your Text Summery</h2>
        {/* <p>{text.split(" ").length} Words {text.length} Characters </p> */}
        {/* <p>{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters </p> */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} charecters </p>
        <p>{.008  * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    
    
    
    </>

  );
    }