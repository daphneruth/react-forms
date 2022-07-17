import { useRef,useState } from "react";
const SimpleInput = (props) => {
const [enteredName, setEnteredName] = useState('');
const nameInputRef = useRef();
const nameInputHandler = event=>{
  setEnteredName(event.target.value);
};
 const formSubmissionHandler = event =>{
  event.preventDefault();
 }
 console.log(enteredName);
 const enteredValue =nameInputRef.current.value;
 
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
