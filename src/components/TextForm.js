import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCase = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Upper Case","success");
    }
    const handlelowerCase = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lower Case","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCaptilize = ()=>{
        let newText = text.toLowerCase();
        setText(newText[0].toUpperCase() + newText.slice(1));
        props.showalert("Text Capitalized","success");
    }

    const handleClear = ()=>{
        let newtext="";
        setText(newtext);
        props.showalert("Textbox cleared","success");
    }
    const handlecopy = ()=>{
        var txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showalert("Copied to clipboard","success");
    }
    const numofwords = (s)=>{
        if(s===""){
            return 0;
        }
        else
        {
            return s.charAt(s.length-1)===" "?s.split(" ").length-1:s.split(" ").length;
        }
    }
    const handlepreview = ()=>{
        newpreview(text);
    }
    const [text, setText] = useState('Enter text here');
    const [preview, newpreview] = useState('');

    return (
        < >
        <div className="container" style={{color: props.mode === 'light'?'black':'white' , fontFamily: "inherit"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange}
                 style={{backgroundColor: props.mode === 'light'?'white':'grey',color: props.mode === 'light'?'black':'white' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handlelowerCase}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCaptilize}>Capitalize</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>ClearText</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy text to clipboard</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{numofwords(text)} words and {text.charAt(text.length-1)===" "?text.length-1:text.length} characters</p>
            <button className="btn btn-primary  my-5" onClick={handlepreview}>Click to preview text here</button>
            <p>{preview}</p>
        </div>
        </>
    )
}
