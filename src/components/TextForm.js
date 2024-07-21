import React, {useState} from 'react'



export default function TextForm(props) {
  
  const handclick = ()=>{
    // console.log("Uppercase" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("convert to Uppercase" , "success")
  }
  const handloclick = ()=>{
    // console.log("Uppercase" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("convert to LowerCase" , "success")
  
  }

  const [mystyle, setMystyle] =  useState({
         
    color : 'black',
    
    

})
  const oclick = ()=>{
    if(mystyle.color === 'black'){
      setMystyle({
        color : 'orange'
      })
    }
    else{
      setMystyle({
        color : 'black'
      })
    }
  



  }
    
  const clearclick = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("clearn " , "success")
  }
  
  const handlecopy= () =>{
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("convert copy" , "success")
  
  }
  const handlespace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("space off" , "success")
  
  }


  

  const handleOnchange = (event)=>{
    // console.log("on change")
    setText(event.target.value)
  }
  const [text , setText] = useState('')


  // text = "new text"   // wrong way to change the state
  // setText("new text") // correct way to the change the state
  
  return (
    <>
    <div className = "container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
      <h1>{props.heading} </h1>
<div className="mb-3">

  <textarea className="form-control"  value = {text} style={{backgroundColor:props.mode=== 'dark'? '#13466e':'white', color:props.mode==='dark'? 'white':'#042743'}}  onChange={handleOnchange}  id="myBox" rows="8"></textarea>
  <button disabled={text.length===0} className={`btn btn-${props} mx-2  my-2`} onClick={handclick}>Convert to uppercase</button>
  <button disabled={text.length===0} className={`btn btn-${props} mx-2  my-2`} onClick={handloclick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className={`btn btn-${props} mx-2  my-2`} onClick={clearclick}>Clean button</button>
  <button disabled={text.length===0} className={`btn btn-${props} mx-2  my-2`} onClick={oclick} >Change text color</button>
  <button disabled={text.length===0} className={`btn btn-${props} mx-2  my-2`} onClick={handlecopy}>Copy text</button>
  <button disabled={text.length===0} className={`btn btn-${props} mx-2  my-2`} onClick={handlespace}>Extra space</button>
  
</div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'? 'white':'#042743'}} >
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} charactor</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text: "Nothing to preview"}</p>
    </div>
    </>
  )
}

