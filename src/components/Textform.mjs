import React, { useState } from 'react'

export default function Textform(props) {
const [text ,setText]= useState('Enter text here')
// setText("Enter new text here");
function handleOnChange (event){
  console.log("on change")
  setText(event.target.value)
} 

function handleUpCase (){
  let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Text is convert to uppercase", "success")
  }

function handleloCase (){
  let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text is convert to lowercase", "success")
  }

function handleclear (){
    setText("")
    props.showAlert("Cleared Text", "success")
  }
 
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Text is Capitilize", "success")
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Text has been speaking", "success")
}
 const handlecopy= ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("Text has been Copied", "success")
}

const handleExtraSpace = () => {
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "))
  props.showAlert("Removed Extra Space", "success")

}

return (
    <>
      <div className="container mb-3 my-4">
        <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Textutils Used To Uppercase, Lowercase, Capitilize, Copy and Remove Extra Space </h1>
        <textarea value={text} className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        <button disabled = {text.length === 0} className='btn btn-primary mt-3 my-1' onClick={handleUpCase}>Convert To Uppercase</button>
        <button disabled = {text.length === 0}className='btn btn-primary mt-3 mx-2 my-1' onClick={handleclear}>clear</button>
        <button disabled = {text.length === 0}className='btn btn-primary mt-3 mx-2 my-1' onClick={handleloCase}>Convert To lowercase</button>
        <button disabled = {text.length === 0} className='btn btn-primary mt-3 mx-2 my-1' onClick={handleCapitalize}>Capitalize</button>
        <button disabled = {text.length === 0}className='btn btn-primary mt-3 mx-2 my-1' onClick={speak}>speak</button>
        <button disabled = {text.length === 0}className='btn btn-primary mt-3 mx-2 my-1' onClick={handlecopy}>copy</button>
        <button disabled = {text.length === 0} className='btn btn-primary mt-3 mx-2 my-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>

      </div>
      <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <h1>your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length } words , {text.length} character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length } minutes</p>
      </div>
      <div >
        <h1 className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h1>
        <p className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.length>0?text:"There is nothing to preview"}</p>
      </div>
    </>
  );
};
