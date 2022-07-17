import { useRef,useState } from "react";

const SimpleInput = (props) => {
const nameInputRef = useRef();
const [enteredName, setEnteredName] = useState('');

const [enteredNameIsValid, setEnteredNameIsValid]= useState(false);
const [enteredNameTouched, setEnteredNameTouched]= useState(false);


const nameInputHandler = event=>{
  setEnteredName(event.target.value);
};
 const formSubmissionHandler = event =>{
  event.preventDefault();

  if (enteredName.trim()===''){
    setEnteredNameIsValid(false);
    return;
  }
 
 console.log(enteredName);
 const enteredValue =nameInputRef.current.value;
 
 console.log(enteredValue)
 };
 const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
 const nameInputClasses = enteredNameIsValid ? 'form-control': 'form-control invalid'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
       <input
       ref={nameInputRef}
       type='text'
       id="name"
       onChange={nameInputHandler}
       value= {enteredName}
       />
       {!nameInputIsInvalid&& <p className="error-text">Name must not be empty</p>}
       </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form> 
  );
};


export default SimpleInput;
