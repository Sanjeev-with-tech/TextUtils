// import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text has been cleared", "success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Activated speach", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("onChange");
    setText(event.target.value);
  }
  const handleExtraSpaces = ()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    props.showAlert("Extra spaces had been removed", "success");
    }
  const handelCopyClick = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text had been copied", "success");
  }
  const [text, setText] = useState('');
  // text = "new text" // wrong way to set the state
  // setText("new text");// correct way to set the state
  return (
      <>
    <div className='Container' style={{color: props.mode==='dark '?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: 
          props.mode==='dark '?'grey':'white', color: props.mode==='dark '?'white':'black'}}id="myBox" rows="8">
          </textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handelCopyClick}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spacest</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-1">Speak</button>
    </div>
    <div className='Container2' style={{color: props.mode==='dark '?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
