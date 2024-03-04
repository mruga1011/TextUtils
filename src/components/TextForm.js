import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upperclick was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "danger");
    }

    const handleloClick = () => {
        console.log("lowerclick was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowecase", "primary");
    }

    const handleclrClick = () => {
        let newText = '';
        setText(newText)
    }


    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);

    }

    const handlExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

    }


    const [text, setText] = useState('');
    // text = "new text";  -> wrong way to chenage text
    //setText("new Text"); --> correct way to change text
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloClick} >Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleclrClick} >Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handlExtraSpace} >Remove Extra Space </button>



            </div>
            <div className="conatiner my-3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}  Minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text in above text box"}</p>


            </div>
        </>
    )
}

