import React,{useState} from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
export default function TextForm(props) 
{
//Upper case conversion method
  const handleUpCase = () =>
   {
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert('converted to UpperCase','Sucess')
  }

//Lower case conversion method
  const handlelowCase = () => 
  {
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert('converted to lowerCase','Sucess')
  }
//On change or adding text compare  method
  const onChangeHandler = (event) => 
  {
    setText(event.target.value)
  }
//Removing extra spaces method
  const removeExtraSpace = () => 
  {
    let newText= text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showAlert('Extra space Removed','Sucess')
  }
  const textToSpeech = () => 
  {
    props.showAlert('Speaking...','')
    speak({ text: text })

  }
 
  
  const [text, setText] = useState('this is use text');
  const { speak } = useSpeechSynthesis();
  return (
    <>
      <div className="mb-3">
        <h1>{props.Heading}</h1>

        <textarea className="form-control" value={text} onChange={onChangeHandler} id="mybox" rows="7"></textarea>
        <button className='btn btn-primary mx-1 my-3' onClick={handleUpCase}>Convert To UpperCase</button>
        <button className='btn btn-primary mx-1 my-3' onClick={handlelowCase}>Convert To LowerCase</button>
        <button className='btn btn-primary mx-1 my-3' onClick={removeExtraSpace}>remove Extra space</button>
        <button className='btn btn-primary mx-1 my-3' onClick={textToSpeech}>Read</button>

       
       
      </div>
      <div className="container">
        <h2>Text Summary </h2>
        <p>word size - {text.split(" ").length} and chracter size - {text.length}</p>
        <h4>Preview </h4>
        <p>{text}</p>
      </div>
    </>
  )
}
