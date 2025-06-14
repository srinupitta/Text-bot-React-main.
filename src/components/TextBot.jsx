import React ,{useState}from 'react'
export default function TextBox(props){
    const[text,setName] = useState('');
    const [myStyle, setMyStyle] = useState({
      color:'black',
      backgroundColor:'white'

    })
    const[btnText,setBtnText] = useState("Dark Mode")
    let convetUpper = ()=>{
        let capital = text.toUpperCase();
        setName(capital);
        props.showAlert("Changes to UpperCase","success")
    }
    let convertLower = ()=>{
        let small = text.toLowerCase();
        setName(small);
        props.showAlert("Changes to LowerCase","success")
    }
    let onChanged = (event)=>{
        setName(event.target.value);
    }
    let clear =()=>{
      setName("");
      props.showAlert("Text Cleared","warning")
    }

    // let toggleColor = ()=>{
    //   console.log('tog'); 
    //   if(btnText==="Light Mode"){
    //     console.log("Light");
    //     setMyStyle({
    //       backgroundColor:'White',
    //       color:'black'
    //     })
    //     setBtnText("Dark Mode")
    //   }
    //     else if(btnText==="Dark Mode"){
    //       console.log("Dark");
    //       setMyStyle({
    //         backgroundColor:'black',
    //         color:'White',
    //       })  
    //       setBtnText("Light Mode")
    //     }
    // }
  return (
      <div className="cont" style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" id="my-box" value={text} onChange={onChanged} rows="8"></textarea>
        </div>
        <button  className="btn btn-primary mx-1" type="submit" onClick={convetUpper}>UpperCase</button>
        <button   className="btn btn-primary mx-1" type="submit" onClick={convertLower}>lowerCase</button>
        <button   className="btn btn-primary mx-1" type="submit" onClick={clear}>Clear</button>
        {/* <button   className="btn btn-primary" onClick={toggleColor}>{btnText}</button> */}
    </div>
    <div className="container my-3">
        <h3>Text Analysis</h3>
        <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> characters</p>
        <p><b>{0.008*text.split(" ").length} </b>Minutes required to read</p>
        <h2>Preview:</h2>
        <p><b>{text.length>0?text:"Enter Something to Preview"}</b></p>
    </div>
      </div>
  )
}
